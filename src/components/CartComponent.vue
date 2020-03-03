<template>
    <div>
        <div class="px-4 px-lg-0">
            <!-- For demo purpose -->
            <div class="container text-white py-5 text-center">
                <h1 class="display-4">Bootstrap 4 shopping cart</h1>
                <p class="lead mb-0">Build a fully structred shopping cart page using Bootstrap 4. </p>
                <p class="lead">Snippet by <a href="https://bootstrapious.com/snippets" class="text-white font-italic">
                        <u>Bootstrapious</u></a>
                </p>
            </div>
            <!-- End -->
            <div class="pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                            <!-- Shopping cart table -->
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Quantity</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Remove</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(product, index) in cartListing" :key="index">
                                            <th scope="row">
                                                <div class="p-2">
                                                    <img v-for="(image,
                                index) in product.productsinfo.photos.slice(0, 1)" :key="index" :src="image" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">{{ product.productsinfo.name }}</a></h5><span class="text-muted font-weight-normal font-italic">{{ product.productsinfo.category }}</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle" v-show="!quantity['productQuantity_'+index]"><strong>N{{ Number(product.productsinfo.amount) * product.quantity }}</strong></td>
                                            <td class="align-middle" v-if="quantity['productQuantity_'+index]"><strong>N{{ Number(product.productsinfo.amount) * Number(quantity['productQuantity_'+index]) }}</strong></td>
                                            <td class="align-middle">
                                                <div><input type="number" v-model="quantity['productQuantity_'+index]" value="1" :min="product.quantity" :placeholder="product.quantity" @change="updateCart(product, quantity['productQuantity_'+index])" @keyup="updateCart(product, quantity['productQuantity_'+index])"></div>
                                            </td>
                                            <td class="align-middle"><a @click.prevent="activateModal(product)" class="text-dark"><i class="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <confirm-modal-component v-if="showModal" @close="showModal = false" @delete-product="deleteProduct" :product="selectedProduct" :loading="isLoading">
                                </confirm-modal-component>
                            </div>
                            <!-- End -->
                        </div>
                    </div>
                    <div class="row py-5 p-4 bg-white rounded shadow-sm">
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                            <div class="p-4">
                                <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                <div class="input-group mb-4 border rounded-pill p-2">
                                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
                                    <div class="input-group-append border-0">
                                        <button id="button-addon3" type="button" class="btn btn-theme rounded-pill text-white no-border"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                            <div class="p-4">
                                <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                            <div class="p-4">
                                <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                <ul class="list-unstyled mb-4">
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                        <h5 class="font-weight-bold">$400.00</h5>
                                    </li>
                                </ul><a href="#" class=" mt-5 btn btn-theme rounded-pill py-4 btn-block no-border text-white">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ConfirmModal from '@/components/modals/confirm-modal';
export default {
    name: 'CartComponent',
    data() {
        return {
            quantity: {},
            showModal: false,
            selectedProduct: null,
        };
    },
    components: {
        'confirm-modal-component': ConfirmModal
    },
    props: {
        cartListing: [Array],
        isLoading: [Boolean]
    },
    methods: {
        deleteProduct(product) {
            const payload = {
                cartid: product.id
            };
            this.$emit('delete-cart', payload);
        },
        updateCart(cart, quantity) {
            // console.log(cartid);
            const payload = {
                id: cart.id,
                cid: cart.cid,
                pid: cart.pid,
                quantity
            };
            console.log(payload);
            this.$emit('update-cart', payload);
        },
        activateModal(product) {
            this.selectedProduct = product;
            this.showModal = true;
        },
    }
};
</script>
<style lang="scss" scoped>
.no-border {
    border: none !important;
}
</style>
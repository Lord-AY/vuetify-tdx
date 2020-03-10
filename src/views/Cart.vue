<template>
    <div>
        <div id="global-loader" v-show="isLoading">
            <HomeLoader class="mobile-hidden"></HomeLoader>
        </div>
        <cart-component :cartListing="userCart" @delete-cart="removeProduct" @update-cart="updateProduct" :isLoading="isLoading"></cart-component>
    </div>
</template>
<script>
import HomeLoader from "@/components/loaders/Homeloader";
import { mapGetters, mapActions } from 'vuex';
import CartComponent from '@/components/CartComponent';
export default {
    name: "Cart",
    data() {
        return {
            isLoading: false,
        };
    },
    components: {
        HomeLoader,
        'cart-component': CartComponent,
    },
    computed: {
        ...mapGetters('cart', ['userCart', 'getMessages', 'getErrors']),
    },
    methods: {
        ...mapActions('cart', ['updateUserCart', 'deleteCartProduct']),
        removeProduct(payload) {
            // console.log("clicked delete button.");
            this.deleteCartProduct(payload);
        },
        updateProduct(payload) {
            // console.log(payload);
            this.updateUserCart(payload);
        },
        showMessage(message) {
            this.$swal.fire({
                toast: true,
                icon: "success",
                width: 350,
                padding: '1.5em',
                background: "#fff",
                position: "top-end",
                title: 'Cart Message!!!',
                text: message,
                showConfirmButton: false,
                timer: 6000,
                timerProgressBar: true,
                onOpen: toast => {
                    toast.addEventListener("mouseenter", this.$swal.stopTimer);
                    toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                }
            });
        },
        showError(error, title) {
            this.$swal.fire({
                toast: true,
                icon: "error",
                width: 350,
                padding: '1.5em',
                background: "#fff",
                position: "top-end",
                title,
                text: error,
                showConfirmButton: false,
                timer: 6000,
                timerProgressBar: true,
                onOpen: toast => {
                    toast.addEventListener("mouseenter", this.$swal.stopTimer);
                    toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                }
            });
        },
    },
    watch: {
        getMessages: {
            handler: function(message) {
                if (message) {
                    this.showMessage(message)
                }
            }
        },
        getErrors: {
            handler: function(message) {
                if (message) {
                    let title = "Cart Error";
                    this.showError(error, title);
                }
            }
        }
    }
};
</script>
<style lang="css" scoped></style>
<template>
    <transition name="modal">
        <div class="modal-mask">
            <!-- <Loading :active.sync="loading" :is-full-page="fullPage"></Loading> -->
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <h5>Delete <strong>{{ product.productsinfo.name }}</strong> from your cart.</h5>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <div class="m-auto">
                            <h3 class="mb-5">Are you sure you want to remove this from your cart</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <button class="btn btn-danger" @click='removeProduct(product)'>Remove Product</button>
                                </div>
                                <div class="col-md-6">
                                    <slot name="footer">
                                        <button class="modal-default-button btn btn-success" @click="$emit('close')">
                                            cancel
                                        </button>
                                    </slot>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
// import Loading from "vue-loading-overlay";

export default {
    name: "confirm-modal",
    data() {
        return {
            fullPage: true
        };
    },
    // components: {
    //     Loading
    // },
    props: {
        product: [Object, Array],
        loading: Boolean
    },
    methods: {
        removeProduct(product) {
            this.$emit('delete-product', product);
            this.$emit('close');
        }
    },
    watch: {}
};
</script>
<style lang="scss" scoped>
.disabled {
    cursor: not-allowed;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.82);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 450px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
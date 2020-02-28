<template>
    <div>
        <div id="global-loader" v-show="isLoading">
            <HomeLoader class="mobile-hidden"></HomeLoader>
        </div>
        <cart-component :cartListing="userCart" @delete-cart="removeProduct" @update-cart="updateProduct"></cart-component>
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
        'cart-component': CartComponent
    },
    computed: {
        ...mapGetters('cart', ['userCart']),
    },
    methods: {
        ...mapActions('cart', ['updateUserCart']),
        removeProduct() {
            console.log("clicked delete button.");
        },
        updateProduct(payload) {
            // console.log(payload);
            this.updateUserCart(payload);
        }
    }
};
</script>

<style lang="css" scoped></style>

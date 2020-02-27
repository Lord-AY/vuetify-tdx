<template>
    <div>
        <div id="global-loader" v-show="isLoading">
            <HomeLoader class="mobile-hidden"></HomeLoader>
        </div>
        <cart-component :cartListing="userCart" @delete-product="removeProduct"></cart-component>
    </div>
</template>

<script>
import HomeLoader from "@/components/loaders/Homeloader";
import { mapGetters } from 'vuex';
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
        removeProduct() {
            console.log("clicked delete button.");
        }
    }
};
</script>

<style lang="css" scoped></style>

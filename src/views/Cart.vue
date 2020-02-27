<template>
    <div>
        <div id="global-loader" v-show="isLoading">
            <HomeLoader class="mobile-hidden"></HomeLoader>
        </div>
        <cart-component></cart-component>
    </div>
</template>

<script>
import HomeLoader from "@/components/loaders/Homeloader";
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

};
</script>

<style lang="css" scoped></style>

<template>
    <!--User Dashboard-->
    <section>
        <!--Breadcrumb-->
        <section>
            <div class="bannerimg cover-image bg-background3" data-image-src="../assets/images/banners/banner2.jpg">
                <div class="header-text mb-0">
                    <div class="container">
                        <div class="text-center text-white">
                            <h1 class="">My Dashboard</h1>
                            <ol class="breadcrumb text-center">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active text-white" aria-current="page">My Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Breadcrumb-->
        <section class="sptb">
            <div class="container">
                <div class="row">
                    <dashboard-sidebar @changeComponent="toggleComponent"/>
                    <div class="col-xl-9 col-lg-12 col-md-12">
                        <keep-alive>
                            <component v-bind:is="component" />
                        </keep-alive>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <!--/User Dashboard-->
</template>
<script>
import DashboardSidebar from "@/components/DashboardSidebar"
import EditProfile from "@/components/EditProfile"
import AdsManager from "@/components/AdsManager"
import FavoriteAds from "@/components/FavoriteAds"
import ManagedAds from "@/components/ManagedAds"
import UserPayments from "@/components/UserPayments"
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    components: {
        DashboardSidebar,
        EditProfile,
        AdsManager,
        FavoriteAds,
        ManagedAds,
        UserPayments
    },
    data() {
        return {
            code: null,
            component: 'EditProfile'
        };
    },
    computed: {
        ...mapGetters("auth", ["isLoggedIn"]),
        ...mapState("auth", ["user"])
    },
    methods: {
        ...mapActions("auth", ["getVerificationCode"]),
        sendVerifyCode() {
            this.getVerificationCode();
        },
        toggleComponent(nextComponent) {
          console.log("component changed !!!")
          this.component = nextComponent;
        }
    }
};
</script>
<style></style>
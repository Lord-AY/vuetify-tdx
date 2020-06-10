<template>
    <div class="col-xl-3 col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">My Dashboard</h3>
            </div>
            <div class="card-body text-center item-user border-bottom">
                <div class="profile-pic">
                    <div class="profile-pic-img">
                        <span class="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
                        <img src="https://res.cloudinary.com/coderoute/image/upload/v1580833737/ecommerce/pywfxdwubswggl8oqfbp.jpg" class="brround" alt="user">
                    </div>
                    <a href="userprofile.html" class="text-dark">
                        <h4 class="mt-3 mb-0 font-weight-semibold">Robert McLean</h4>
                    </a>
                </div>
            </div>
            <div class="item1-links  mb-0">
                <a @click.prevent="setComponent('EditProfile',1)" class=" d-flex border-bottom" :class="activeStatus == 1 ? 'active' : ''">
                    <span class="icon1 mr-3"><i class="icon icon-user"></i></span> Edit Profile
                </a>
                <a @click.prevent="setComponent('AdsManager',2)" class="d-flex  border-bottom" :class="activeStatus == 2 ? 'active' : ''">
                    <span class="icon1 mr-3"><i class="icon icon-diamond"></i></span> My Ads
                </a>
                <a @click.prevent="setComponent('FavoriteAds',3)" class=" d-flex border-bottom" :class="activeStatus == 3 ? 'active' : ''">
                    <span class="icon1 mr-3"><i class="icon icon-heart"></i></span> My Favorite
                </a>
                <a @click.prevent="setComponent('ManagedAds',4)" class="d-flex border-bottom" :class="activeStatus == 4 ? 'active' : ''">
                    <span class="icon1 mr-3"><i class="icon icon-folder-alt"></i></span> Managed Ads
                </a>
                <a @click.prevent="setComponent('UserPayments',5)" class="d-flex border-bottom" :class="activeStatus == 5 ? 'active' : ''">
                    <span class="icon1 mr-3"><i class="icon icon-credit-card"></i></span> Payments
                </a>
                <a @click.prevent="setComponent('UserOrders',6)" class="d-flex  border-bottom" :class="activeStatus == 6 ? 'active' : ''">
                    <span class="icon1 mr-3"><i class="icon icon-basket"></i></span> Orders
                </a>
                <a @click.prevent="setComponent('DashboardSettings',7)" class="d-flex border-bottom" :class="activeStatus == 7 ? 'active' : ''">
                    <span class="icon1 mr-3"><i class="icon icon-game-controller"></i></span> Settings
                </a>
                <a href="#" class="d-flex">
                    <span class="icon1 mr-3"><i class="icon icon-power"></i></span> Logout
                </a>
            </div>
        </div>
        <div class="card my-select">
            <div class="card-header">
                <h3 class="card-title">Search Ads</h3>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <input type="text" class="form-control" id="text" placeholder="What are you looking for?">
                </div>
                <div class="form-group">
                    <select name="country" id="select-countries" class="form-control custom-select select2-show-search">
                        <option value="1" selected="">All Categories</option>
                        <option value="2">RealEstate</option>
                        <option value="3">Apartments</option>
                        <option value="4">3BHK Flat</option>
                        <option value="5">Homes</option>
                        <option value="6">Laxury Rooms</option>
                        <option value="7">Deluxe Houses</option>
                        <option value="8">Duplex House</option>
                        <option value="9">Laxury Rooms</option>
                        <option value="10">Pets &amp; Flats</option>
                        <option value="11">Apartments</option>
                        <option value="12">Duplex Houses</option>
                        <option value="13">3BHK Flatss</option>
                        <option value="14">2BHK Flats</option>
                        <option value="15">Modren Houses</option>
                    </select>
                </div>
                <div class="">
                    <a href="#" class="btn  btn-primary">Search</a>
                </div>
            </div>
        </div>
        <div class="card mb-xl-0">
            <div class="card-header">
                <h3 class="card-title">Safety Tips For Buyers</h3>
            </div>
            <div class="card-body">
                <ul class="list-unstyled widget-spec  mb-0">
                    <li class="">
                        <i class="fa fa-check text-success" aria-hidden="true"></i> Meet Seller at public Place
                    </li>
                    <li class="">
                        <i class="fa fa-check text-success" aria-hidden="true"></i> Check item before you buy
                    </li>
                    <li class="">
                        <i class="fa fa-check text-success" aria-hidden="true"></i> Pay only after collecting item
                    </li>
                    <li class="ml-5 mb-0">
                        <a href="tips.html"> View more..</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'DashboardSidebar',
    data() {
        return {
            componentName: "EditProfile",
            activeStatus: 1
        };
    },
    methods: {
        setComponent(newComponent, status) {
            this.componentName = newComponent
            this.activeStatus = status
            console.log(this.componentName)
            this.$emit('changeComponent', this.componentName);
        }
    }
};
</script>
<style lang="css" scoped>
</style>
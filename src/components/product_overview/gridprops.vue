<template>
	<!--Start Section-->
	<div class="row">
		<div class="col-md-12 col-grid-tx">
			<div class="grid-style-2">
				<div
					class="posts-masonry"
					v-for="(product, index) in products"
					:key="index"
				>
					<div class="col-md-3 col-lg-3 col-sm-6 col-xs-12" id=".holder-1375">
						<div class="category-grid-box-1">
							<!-- <div class="featured-ribbon"><span>Featured</span></div> -->
							<div class="image">
								<div class="hot-ribbon">
									<img src="../../assets/images/hot-deals.svg" />
								</div>
								<a
									href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"
								>
									<img
										src="../../assets/carspot-css/wp-content/uploads/2017/12/IMG_5006-268x166.jpg"
										alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles"
										class="img-responsive"
									/>
								</a>
								<!-- <a href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"><img src="../wp-content/uploads/2017/12/IMG_5006-268x166.jpg" alt="2017 Maserati Ghibli SQ4 Blue 1,695 Miles" class="img-responsive"></a>  -->
								<!-- <div class="play-video"><i class="fa fa-camera price-tag-tx camera-icon"></i></div> -->
								<div class="price-tag">
									<div class="price">
										<span class="price-tag-tx">
											&#8358; {{ product.amount }}
											<span class>(Negotiable)</span>
										</span>
									</div>
								</div>
							</div>
							<div class="short-description-1 clearfix">
								<div class="category-title">
									<span class="padding_cats">
										<router-link :to="`productDetails/${index}`"
											>{{ product.category }}
										</router-link>
									</span>
								</div>
								<h3>
									<router-link :to="`productDetails/${index}`">
										{{ product.name }}
									</router-link>
								</h3>
								<p class="location">
									<i class="fa fa-map-marker"></i>
									<a href="../ad_country/california/index.html">{{
										product.region
									}}</a>
								</p>
								<ul class="list-unstyled">
									<li><i class="flaticon-gas-station-1"></i>Petrol</li>
									<li><i class="flaticon-dashboard"></i>1,694 Km</li>
									<li><i class="flaticon-engine-2"></i>3,000 cc</li>
									<li><i class="flaticon-car-2"></i>Sedan</li>
									<li><i class="flaticon-cogwheel-outline"></i>Blue</li>
								</ul>
							</div>
							<div class="ad-info-1">
								<p>
									<i class="flaticon-calendar"></i> &nbsp;
									<span>January 24, 2019</span>
								</p>
								<!-- <ul class="pull-right "><li><a data-toggle="tooltip" data-placement="top" title="" data-original-title="Save Ad" href="javascript:void(0);" class="save-ad" data-adid="1375"><i class="flaticon-like-1"></i></a></li><li><a href="../ad/2017-maserati-ghibli-sq4-blue-1695-miles-2/index.html"><i class="flaticon-message"></i></a></li></ul> -->
								<div class="icon-reveal mobile-hidden">
									<a class="btn icon-reveal-btn">
										<i class="fa fa-heart-o"></i>
									</a>
								</div>
								<div class="button-reveal mobile-hidden">
									<a
										class="btn btn-block button-reveal-btn"
										href="productdetail.html"
										>Contact Seller</a
									>
								</div>
								<div class="button-griddy hidden-desktop">
									<a class="btn btn-block btn-theme" href="productdetail.html"
										>Contact Seller</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-lg-3 col-sm-6 col-xs-12" id=".holder-89">
					<div class="category-grid-box-1">
						<!-- <div class="featured-ribbon"><span>Featured</span></div> -->
						<div class="image">
							<a
								href="https://www.youtube.com/watch?v=lr7mPzjTgC0"
								class="play-video"
							>
								<i
									class="fa fa-play-circle"
									style="font-size: 24px; color: #fff;"
								></i>
							</a>
							<!-- <a href="https://www.youtube.com/watch?v=lr7mPzjTgC0" class="play-video"><img src="../wp-content/uploads/2017/08/playbutton-u693-r.png" alt="Icon"></a> -->
							<a href="../ad/land-rover-freelander-2-se/index.html">
								<img
									src="../../assets/carspot-css/wp-content/uploads/2017/06/1-13-268x166.jpg"
									alt="Land Rover Freelander 2 Se"
									class="img-responsive"
								/>
							</a>
							<div class="price-tag">
								<div class="price">
									<span class="price-tag-tx">Price On Call</span>
								</div>
							</div>
						</div>
						<div class="short-description-1 clearfix">
							<div class="category-title">
								<span class="padding_cats">
									<a href="../ad_category/land-rover/index.html">Land Rover</a>
								</span>
							</div>
							<h3>
								<a href="../ad/land-rover-freelander-2-se/index.html"
									>Land Rover Freelande...</a
								>
							</h3>
							<p class="location">
								<i class="fa fa-map-marker"></i>
								<a href="../ad_country/district-of-columbia/index.html"
									>District of Columbia</a
								>,
								<a href="../ad_country/united-states/index.html"
									>United States</a
								>
							</p>
							<ul class="list-unstyled">
								<li><i class="flaticon-gas-station-1"></i>Diesel</li>
								<li><i class="flaticon-dashboard"></i>1,300 Km</li>
								<li><i class="flaticon-engine-2"></i>1,500 cc</li>
								<li><i class="flaticon-car-2"></i>Luxury</li>
								<li><i class="flaticon-cogwheel-outline"></i>Blue</li>
							</ul>
						</div>
						<div class="ad-info-1">
							<p>
								<i class="flaticon-calendar"></i> &nbsp;
								<span>June 20, 2017</span>
							</p>
							<div class="icon-reveal mobile-hidden">
								<a class="btn icon-reveal-btn">
									<i class="fa fa-heart-o"></i>
								</a>
							</div>
							<div class="button-reveal mobile-hidden">
								<a
									class="btn btn-block button-reveal-btn"
									href="productdetail.html"
									>Contact Seller</a
								>
							</div>
							<div class="button-griddy hidden-desktop">
								<a class="btn btn-block btn-theme" href="productdetail.html"
									>Contact Seller</a
								>
							</div>
						</div>
					</div>
					<!-- Listing Ad Grid -->
				</div>
			</div>
		</div>
	</div>
	<!--/Section-->
</template>

<script>
export default {
	name: 'gridprops',

	props: {
		products: [Object, Array]
	}
}
</script>

<style></style>

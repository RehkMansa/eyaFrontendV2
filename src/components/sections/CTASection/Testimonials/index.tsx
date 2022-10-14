const Testimonials = () => (
    <section class="testimonials">
			<div class="background bg-img bg-fixed section-padding pb-0" data-background="img/banner2.jpg" data-overlay-dark="3">
				<div class="container">
					<div class="row">
						<!-- Promo video -->
						<div class="col-md-6">
							<div class="vid-area">
								<div class="vid-icon">
									<a class="play-button vid" href="https://youtu.be/RziCmLzpFNY">
										<svg class="circle-fill">
											<circle cx="43" cy="43" r="39" stroke="#fff" stroke-width=".5"></circle>
										</svg>
										<svg class="circle-track">
											<circle cx="43" cy="43" r="39" stroke="none" stroke-width="1" fill="none"></circle>
										</svg> <span class="polygon">
											<i class="ti-control-play"></i>
										</span> </a>
								</div>
								<div class="cont mt-15 mb-30">
									<h5>View promo video</h5>
								</div>
							</div>
						</div>
						<!-- Testiominals -->
						<div class="col-md-5 offset-md-1">
							<div class="testimonials-box animate-box" data-animate-effect="fadeInUp">
								<div class="head-box">
									<h4>What Client's Say?</h4>
								</div>
								<div class="owl-carousel owl-theme">
									<div class="item"> <span class="quote"><img src="img/quot.png" alt=""></span>
										<p>Architect dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
										<div class="info">
											<div class="author-img"> <img src="img/team/1.jpg" alt=""> </div>
											<div class="cont">
												<h6>Jason Brown</h6> <span>Crowne Plaza Owner</span>
											</div>
										</div>
									</div>
									<div class="item"> <span class="quote">
											<img src="img/quot.png" alt="">
										</span>
										<p>Interior dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
										<div class="info">
											<div class="author-img"> <img src="img/team/2.jpg" alt=""> </div>
											<div class="cont">
												<h6>Emily White</h6> <span>Armada Owner</span>
											</div>
										</div>
									</div>
									<div class="item"> <span class="quote">
											<img src="img/quot.png" alt="">
										</span>
										<p>Urban dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
										<div class="info">
											<div class="author-img"> <img src="img/team/4.jpg" alt=""> </div>
											<div class="cont">
												<h6>Jesica Smith</h6> <span>Alsa Manager</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
)
 
export default Testimonials;
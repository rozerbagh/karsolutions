import React from "react";

export default function Other() {
  return (
    <>
      {/* <!-- Owl Slider Section Start --> */}
      <section class="sloder-img section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="slider-center slider">
                <div>
                  <img
                    class="img-fluid"
                    src="assets/img/slide/img1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="img-fluid"
                    src="assets/img/slide/img2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="img-fluid"
                    src="assets/img/slide/img3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="img-fluid"
                    src="assets/img/slide/img4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="img-fluid"
                    src="assets/img/slide/img5.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="img-fluid"
                    src="assets/img/slide/img6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Owl Slider Section End --> */}

      {/* <!-- Subscribe Section Start --> */}
      <section id="Subscribes" class="subscribes section-padding">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-10 col-lg-5">
              <h4 class="wow fadeInUp" data-wow-delay="0.3s">
                Start For Free
              </h4>
              <p class="wow fadeInUp" data-wow-delay="0.6s">
                Existing customized ideas through client-based deliverables.
                <br />
                Compellingly unleash fully tested outsourcing
              </p>
              <form for="">
                <div class="subscribe wow fadeInDown" data-wow-delay="0.3s">
                  <input
                    type="Email"
                    class="form-control"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button class="btn-submit" type="submit">
                    <i class="lni-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Subscribe Section End --> */}

      {/* <!-- Contact Section Start --> */}
      <section id="contact" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-header text-center">
                <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                  Contact
                </h2>
              </div>
            </div>
          </div>
          <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">
            <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="contact-block">
                <h2>Contact Form</h2>
                <form id="contactForm">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          class="form-control"
                          name="email"
                          required
                          data-error="Please enter your email"
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="msg_subject"
                          class="form-control"
                          required
                          data-error="Please enter your subject"
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          id="message"
                          placeholder="Your Message"
                          rows="5"
                          data-error="Write your message"
                          required
                        ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="submit-button">
                        <button
                          class="btn btn-common"
                          id="form-submit"
                          type="submit"
                        >
                          Send Message
                        </button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="contact-right-area wow fadeIn">
                <h2>Get In Touch</h2>
                <div class="contact-right">
                  <div class="single-contact">
                    <div class="contact-icon">
                      <i class="lni-map-marker"></i>
                    </div>
                    <p>Skopje, Macedonia</p>
                  </div>
                  <div class="single-contact">
                    <div class="contact-icon">
                      <i class="lni-envelope"></i>
                    </div>
                    <p>
                      <a href="#">email@gmail.com</a>
                    </p>
                    <p>
                      <a href="#">tomsaulnier@gmail.com</a>
                    </p>
                  </div>
                  <div class="single-contact">
                    <div class="contact-icon">
                      <i class="lni-phone-handset"></i>
                    </div>
                    <p>
                      <a
                        href="https://api.whatsapp.com/send?phone=+918160712491"
                        target="_blank"
                      >
                        +91 81607 12491
                      </a>
                    </p>
                    <p>
                      <a href="tel:+918160712491">+91 81607 12491</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End --> */}

      {/* <!-- Map Section Start --> */}
      <div class="map">
        <div class="containre-fulid">
          <div id="conatiner-map"></div>
        </div>
      </div>
      {/* <!-- Map Section End --> */}
    </>
  );
}

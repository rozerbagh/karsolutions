import React from "react";

export default function Teams() {
  return (
    <>
      {/* <!-- Team Section Start --> */}
      <section id="team" class="section-padding text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-header text-center">
                <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                  Our Team
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div class="team-item text-center">
                <div class="team-img">
                  <img
                    class="img-fluid"
                    src="assets/img/team/team-01.jpg"
                    alt=""
                  />
                  <div class="team-overlay">
                    <div class="overlay-social-icon text-center">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i
                              class="lni-facebook-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="lni-twitter-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="lni-instagram-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="info-text">
                  <h3>
                    <a href="#">Rafael Basilla</a>
                  </h3>
                  <p>Front-end Developer, Dropbox</p>
                </div>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div class="team-item text-center">
                <div class="team-img">
                  <img
                    class="img-fluid"
                    src="assets/img/team/team-02.jpg"
                    alt=""
                  />
                  <div class="team-overlay">
                    <div class="overlay-social-icon text-center">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i
                              class="lni-facebook-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="lni-twitter-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="lni-instagram-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="info-text">
                  <h3>
                    <a href="#">Renee Fleck</a>
                  </h3>
                  <p>Product Designer, Tesla</p>
                </div>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div class="team-item text-center">
                <div class="team-img">
                  <img
                    class="img-fluid"
                    src="assets/img/team/team-03.jpg"
                    alt=""
                  />
                  <div class="team-overlay">
                    <div class="overlay-social-icon text-center">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i
                              class="lni-facebook-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="lni-twitter-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              class="lni-instagram-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="info-text">
                  <h3>
                    <a href="#">Paul Kowalsy</a>
                  </h3>
                  <p>Lead Designer, TNW</p>
                </div>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team Section End --> */}
    </>
  );
}
import React from "react";

export default function Teams() {
  return (
    <>
      {/* <!-- Team Section Start --> */}
      <section id="team" className="section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2
                  className="section-title wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  Our Team
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item text-center">
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/team/team-01.jpg"
                    alt=""
                  />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-facebook-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-twitter-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-instagram-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3>
                    <a href="https://karsolutions.in/">Rafael Basilla</a>
                  </h3>
                  <p>Front-end Developer, Dropbox</p>
                </div>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item text-center">
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/team/team-02.jpg"
                    alt=""
                  />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-facebook-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-twitter-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-instagram-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3>
                    <a href="https://karsolutions.in/">Renee Fleck</a>
                  </h3>
                  <p>Product Designer, Tesla</p>
                </div>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item text-center">
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/team/team-03.jpg"
                    alt=""
                  />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-facebook-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-twitter-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://karsolutions.in/">
                            <i
                              className="lni-instagram-filled"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3>
                    <a href="https://karsolutions.in/">Paul Kowalsy</a>
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

import React from "react";

export default function Feature() {
  return (
    <>
      {/* <!-- Feature Section Start --> */}
      <div id="feature">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-wrapper">
                <div>
                  <h2 className="title-hl wow fadeInLeft" data-wow-delay="0.3s">
                    Learn More About Us
                  </h2>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div
                        className="features-box wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="features-icon">
                          <i className="lni-layers"></i>
                        </div>
                        <div className="features-content">
                          <h4>Bootstrap 4</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Veniam tempora quidem vel sint.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div
                        className="features-box wow fadeInLeft"
                        data-wow-delay="0.6s"
                      >
                        <div className="features-icon">
                          <i className="lni-briefcase"></i>
                        </div>
                        <div className="features-content">
                          <h4>100% Free</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Veniam tempora quidem vel sint.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div
                        className="features-box wow fadeInLeft"
                        data-wow-delay="0.9s"
                      >
                        <div className="features-icon">
                          <i className="lni-cog"></i>
                        </div>
                        <div className="features-content">
                          <h4>Responsive</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Veniam tempora quidem vel sint.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div
                        className="features-box wow fadeInLeft"
                        data-wow-delay="1.2s"
                      >
                        <div className="features-icon">
                          <i className="lni-leaf"></i>
                        </div>
                        <div className="features-content">
                          <h4>Easy to Use</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Veniam tempora quidem vel sint.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 padding-none">
              <div
                className="feature-thumb wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img src="assets/img/feature/img-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature Section End --> */}
    </>
  );
}

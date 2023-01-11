import React from "react";

export default function Clients() {
  return (
    <>
      {/* <!-- Clients Section Start --> */}
      <div id="clients" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              As Seen On
            </h2>
          </div>
          <div className="row text-align-">
            <div
              className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="client-item-wrapper">
                <img
                  className="img-fluid"
                  src="assets/img/clients/img1.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="client-item-wrapper">
                <img
                  className="img-fluid"
                  src="assets/img/clients/img2.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="client-item-wrapper">
                <img
                  className="img-fluid"
                  src="assets/img/clients/img3.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-xs-12 wow fadeInUp"
              data-wow-delay="1.2s"
            >
              <div className="client-item-wrapper">
                <img
                  className="img-fluid"
                  src="assets/img/clients/img4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Clients Section End --> */}
    </>
  );
}

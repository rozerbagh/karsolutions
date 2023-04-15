import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Section Start --> */}
      <footer id="footer" className="footer-area section-padding">
        <div className="container">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="footer-logo mb-3">
                  <img src="assets/img/logo.svg" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam excepturi quasi, ipsam voluptatem.
                </p>
              </div>
              <div
                className="col-lg-2 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3 className="footer-titel">Company</h3>
                <ul>
                  <li>
                    <a href="https://karsolutions.in">Press Releases</a>
                  </li>
                  <li>
                    <a href="https://karsolutions.in">Mission</a>
                  </li>
                  <li>
                    <a href="https://karsolutions.in">Strategy</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <h3 className="footer-titel">About</h3>
                <ul>
                  <li>
                    <a href="https://karsolutions.in">Career</a>
                  </li>
                  <li>
                    <a href="https://karsolutions.in">Team</a>
                  </li>
                  <li>
                    <a href="https://karsolutions.in">Clients</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <h3 className="footer-titel">Find us on</h3>
                <div className="social-icon">
                  <a className="facebook" href="https://karsolutions.in">
                    <i className="lni-facebook-filled"></i>
                  </a>
                  <a className="twitter" href="https://karsolutions.in">
                    <i className="lni-twitter-filled"></i>
                  </a>
                  <a className="instagram" href="https://karsolutions.in">
                    <i className="lni-instagram-filled"></i>
                  </a>
                  <a className="linkedin" href="https://karsolutions.in">
                    <i className="lni-linkedin-filled"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}

      <section id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Copyright © {new Date().getFullYear()} Karsolutions All Right
                Reserved
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Go to Top Link --> */}
      <a href="https://karsolutions.in" className="back-to-top">
        <i className="lni-arrow-up"></i>
      </a>

      {/* <!-- Preloader --> */}
      <div id="preloader">
        <div className="loader" id="loader-1"></div>
      </div>
      {/* <!-- End Preloader --> */}

      {/* <!-- Call and whatsapp --> */}
      <div className="call-to-action">
        <a
          href="https://api.whatsapp.com/send?phone=+918160712491"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt=""
          />
        </a>
        <a href="tel:+918160712491">
          <img
            src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/000000/external-call-ui-basic-anggara-flat-anggara-putra.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
}

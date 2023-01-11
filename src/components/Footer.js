import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Section Start --> */}
      <footer id="footer" class="footer-area section-padding">
        <div class="container">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div class="footer-logo mb-3">
                  <img src="assets/img/logo.png" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam excepturi quasi, ipsam voluptatem.
                </p>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3 class="footer-titel">Company</h3>
                <ul>
                  <li>
                    <a href="#">Press Releases</a>
                  </li>
                  <li>
                    <a href="#">Mission</a>
                  </li>
                  <li>
                    <a href="#">Strategy</a>
                  </li>
                </ul>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <h3 class="footer-titel">About</h3>
                <ul>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                </ul>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <h3 class="footer-titel">Find us on</h3>
                <div class="social-icon">
                  <a class="facebook" href="#">
                    <i class="lni-facebook-filled"></i>
                  </a>
                  <a class="twitter" href="#">
                    <i class="lni-twitter-filled"></i>
                  </a>
                  <a class="instagram" href="#">
                    <i class="lni-instagram-filled"></i>
                  </a>
                  <a class="linkedin" href="#">
                    <i class="lni-linkedin-filled"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}

      <section id="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>Copyright © 2018 UIdeck All Right Reserved</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Go to Top Link --> */}
      <a href="#" class="back-to-top">
        <i class="lni-arrow-up"></i>
      </a>

      {/* <!-- Preloader --> */}
      <div id="preloader">
        <div class="loader" id="loader-1"></div>
      </div>
      {/* <!-- End Preloader --> */}

      {/* <!-- Call and whatsapp --> */}
      <div class="call-to-action">
        <a
          href="https://api.whatsapp.com/send?phone=+918160712491"
          target="_blank"
        >
          <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" />
        </a>
        <a href="tel:+918160712491">
          <img src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/000000/external-call-ui-basic-anggara-flat-anggara-putra.png" />
        </a>
      </div>
    </>
  );
}

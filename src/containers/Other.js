import React, { useRef } from "react";

export default function Other() {
  const form = useRef();
  const from_name = useRef();
  const user_email = useRef();
  const message = useRef();
  const subject = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    window.emailjs
      .sendForm(
        "caabhijeetchouby_123",
        "ca_123",
        form.current,
        "oeKEawwInABx20OFx"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for contacting us! We will get bak to You");
        },
        (error) => {
          alert("Unable to send the message ");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* <!-- Owl Slider Section Start --> */}
      <section className="sloder-img section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="slider-center slider">
                <div>
                  <img
                    className="img-fluid"
                    src="assets/img/slide/img1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="assets/img/slide/img2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="assets/img/slide/img3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="assets/img/slide/img4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="assets/img/slide/img5.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
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
      <section id="Subscribes" className="subscribes section-padding">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10 col-lg-5">
              <h4 className="wow fadeInUp" data-wow-delay="0.3s">
                Start For Free
              </h4>
              <p className="wow fadeInUp" data-wow-delay="0.6s">
                Existing customized ideas through client-based deliverables.
                <br />
                Compellingly unleash fully tested outsourcing
              </p>
              <form htmlFor="">
                <div className="subscribe wow fadeInDown" data-wow-delay="0.3s">
                  <input
                    type="Email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button className="btn-submit" type="submit">
                    <i className="lni-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Subscribe Section End --> */}

      {/* <!-- Contact Section Start --> */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2
                  className="section-title wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  Contact
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row contact-form-area wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="contact-block">
                <h2>Contact Form</h2>
                <form ref={form} id="contactForm" onSubmit={sendEmail}>
                  <input hidden value={"CA Abhijeet"} name="to_name" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="from_name"
                          ref={from_name}
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          ref={user_email}
                          id="email"
                          className="form-control"
                          name="user_email"
                          required
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="msg_subject"
                          ref={subject}
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          ref={message}
                          name="message"
                          placeholder="Your Message"
                          rows="5"
                          data-error="Write your message"
                          required
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button">
                        <button
                          className="btn btn-common"
                          id="form-submit"
                          type="submit"
                          onSubmit={sendEmail}
                        >
                          Send Message
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="contact-right-area wow fadeIn">
                <h2>Get In Touch</h2>
                <div className="contact-right">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-map-marker"></i>
                    </div>
                    <p>APC Circle, Jigani, Bangalore Karnataka - 560105</p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-envelope"></i>
                    </div>
                    <p>
                      <a href="mailto:caabhijeetchouby@gmail.com">
                        caabhijeetchouby@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-phone-handset"></i>
                    </div>
                    <p>
                      <a
                        href="https://api.whatsapp.com/send?phone=+918160712491"
                        target="_blank"
                        rel="noreferrer"
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
      <div className="map">
        <div className="containre-fulid">
          <div id="conatiner-map"></div>
        </div>
      </div>
      {/* <!-- Map Section End --> */}
    </>
  );
}

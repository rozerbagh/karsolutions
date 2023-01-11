import React from "react";

function Header() {
  return (
    <>
      {/* <!-- Header Area wrapper Starts --> */}
      <header id="header-wrap">
        {/* <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="icon-menu"></span>
                <span className="icon-menu"></span>
                <span className="icon-menu"></span>
              </button>
              <a href="index.html" className="navbar-brand">
                <img src="assets/img/logo.svg" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-left clearfix">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    {" "}
                    feature{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    {" "}
                    Team{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    {" "}
                    Testimonial{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    {" "}
                    Pricing{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    {" "}
                    Contact{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog/">
                    {" "}
                    Blogs{" "}
                  </a>
                </li>
              </ul>
              <div className="btn-sing float-right">
                <a className="btn btn-border" href="#feature">
                  FAQ
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Mobile Menu Start --> */}
          <ul className="mobile-menu navbar-nav">
            <li>
              <a className="page-scroll" href="#hero-area">
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#services">
                {" "}
                Services{" "}
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#feature">
                {" "}
                feature{" "}
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#team">
                {" "}
                Team{" "}
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#testimonial">
                {" "}
                Testimonial{" "}
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#pricing">
                {" "}
                Pricing{" "}
              </a>
            </li>
            <li>
              <a className="page-scroll" href="#contact">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
          {/* <!-- Mobile Menu End --> */}
        </nav>
        {/* <!-- Navbar End --> */}

        {/* <!-- Hero Area Start --> */}
        <div id="hero-area" className="hero-area-bg">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="contents text-center">
                  <h2 className="head-title wow fadeInUp">
                    One stop solution for
                    <br />
                    For Business, SaaS and Apps
                  </h2>
                  <div
                    className="header-button wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <a href="#contact" className="btn btn-common">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div
                  className="img-thumb text-center wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/hero-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero Area End --> */}
      </header>
      {/* <!-- Header Area wrapper End --> */}
    </>
  );
}

export default Header;

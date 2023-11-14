import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="mastfoot pb-5 bg-white section-padding pb-0">
      <div class="inner container">
        <div class="row">
          <div class="col-lg-4">
            <div class="footer-widget pr-lg-5 pr-0">
              <img
                src="img/logo.png"
                class="img-fluid footer-logo mb-3"
                alt=""
              />
              <div className="footer-text" > 
              <p>
              Get the dish! Be the first to hear about new flavors, seasonal specials, and upcoming events. Join our community of food lovers!.
              </p>
              </div>

              <nav class="nav nav-mastfoot justify-content-start">
                <Link class="nav-link" to="#">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link class="nav-link" to="#">
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link class="nav-link" to="#">
                  <i class="fab fa-instagram"></i>
                </Link>
              </nav>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer-widget px-lg-5 px-0">
              <h4>Open Hours</h4>
              <ul class="list-unstyled open-hours">
                <li class="d-flex justify-content-between">
                  <span>Monday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Tuesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Wednesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Thursday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Friday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Saturday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Sunday</span>
                  <span> Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="footer-widget pl-lg-5 pl-0">
              <h4>Newsletter</h4>
              <p>Stay in the loop! Subscribe to our newsletter for the latest culinary delights and exclusive offers.</p>
              <form id="newsletter">

              </form>
            </div>
          </div>
          <div class="col-md-12 d-flex align-items-center">
            <p class="mx-auto text-center mb-0">
              Copyright 2023. All Right Reserved. Design by Angel Quezada{" "}

            </p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

import { Link } from "react-router-dom";
import "./topSections.css";
import './statics/Button.css'

const TopSection = () => {
  return (
    <div class="hero">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 hero-left">
            <div className="DeliciousFoods">
            <h1 class="display-4 mb-5">We Love</h1>
            <h1 class="display-4 mb-5">Delicious Foods!</h1>
            </div>

            <div class="mb-2">
              <Link
                class="btn btn-primary btn-shadow btn-lg"
                to="/menu"
                role="button"
              >
                Explore Menus
              </Link>

            </div>
            <ul class="hero-info list-unstyled d-flex text-center mb-0">
              <li class="border-right">
                <span class="lnr lnr-rocket"></span>
                <h5>Fast Delivery</h5>
              </li>
              <li class="border-right">
                <span class="lnr lnr-leaf"></span>
                <h5>Fresh Food</h5>
              </li>
              <li class="">
                <span class="lnr lnr-bubble"></span>
                <h5>24/7 Support</h5>
              </li>
            </ul>
          </div>

          <div class="col-lg-6 hero-right">
            <div class="owl-carousel owl-theme hero-carousel">
              <div class="item">
                <img
                  class="img-fluid"
                  src="https://cdn3.photostockeditor.com/c/0711/food-beef-steak-with-fork-cutlery-cutlery-image.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
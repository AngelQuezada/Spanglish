import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section id="gtco-welcome" className="bg-white section-padding">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div
              className="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"
              style={{
                backgroundImage:
                  "url(" +
                  "https://cdn2.photostockeditor.com/c/2612/food-waffle-with-cream-on-white-ceramic-plate-breakfast-breakfast-image.jpg" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-sm-7 py-5 pl-md-0 pl-4 phone-text">
              <div className="heading-section pl-lg-5 ml-md-5">
                <span className="subheading">About</span>
                <h2> Spanglish Bites cafe!</h2>
              </div>
              <div className="pl-lg-5 ml-md-5">
                <p>
                  Discover a tantalizing blend of English and Spanish flavors at Spanglish Bites. Our passionate chefs combine traditional recipes with innovative techniques to create a culinary experience that will delight your senses. Immerse yourself in our inviting ambiance and let us take you on a remarkable journey of taste and culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// import './home.css';
// import FoodMenu from './FoodMenu'
// import { Card, Button } from "react-bootstrap";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <Card className="card">
//         <Card.Body className="text-center">
//           <Card.Title>
//             <h3 className="font-weight-bold">
//               Welcome to Spanglish Bites cafe!
//             </h3>
//           </Card.Title>
//         </Card.Body>
//       </Card>

//       <Card className="card">
//         <Card.Body>
//           <Card.Title>
//             <h4 className="font-italic text-center mb-4">About Us</h4>
//           </Card.Title>
//           <Card.Text className="font-family-curly">
//             Discover a tantalizing blend of English and Spanish flavors at Spanglish Bites. Our passionate chefs combine traditional recipes with innovative techniques to create a culinary experience that will delight your senses. Immerse yourself in our inviting ambiance and let us take you on a remarkable journey of taste and culture.
//           </Card.Text>
//           <Button variant="primary" href="/menu">View Menu</Button>
//         </Card.Body>
//       </Card>

//     </div>
//   );
// }

// export default Home;


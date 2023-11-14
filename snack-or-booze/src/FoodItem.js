import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import createContext from "./context/createContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function ItemDescription({items, catFind}) {
  const { id } = useParams();

  let product = items.find(product => product.id === id);
  if(!product) return <Redirect to={catFind}/>

  const {name, description, recipe, serve } = product;


  return (

<div class="hero" style={{marginTop:"5%"}}>
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 hero-left">
          <Card
    color="danger"
    outline
 >
<CardBody>
          <CardTitle className="title font-weight-bold text-center">{name}</CardTitle>
          <br></br>
          <CardText className="font-italic">{description}</CardText>
          <p>
            <b>Recipe:</b> {recipe}
          </p>
          <p>
            <b>Serve:</b> {serve}
          </p>
          <Link
                class="btn btn-primary btn-shadow btn-lg"
                to="/menu"
                role="button"
              >
                Menu
              </Link>
        </CardBody>
        </Card>
          </div>

          <div class="col-lg-4 hero-right">
            <div class="owl-carousel owl-theme hero-carousel">
              <div class="item">
                <img
                  
                  class="img-fluid"
                  src="https://img.freepik.com/free-photo/lobster-soup_1339-2173.jpg?w=740&t=st=1689097362~exp=1689097962~hmac=cad955b4134ec51584b05694c0066dd4cd9b9c276543130de8436557e17adae4"
                  alt=""
                  style={{marginLeft: "20%",
                }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





//     <section style={{
//       marginTop: "5%",
//       width: "50%",
//       textAlign: "center"
//       }}>
//       <div class="container">
// <Card className="my-2"
//     color="danger"
//     outline
//     style={{
//       width: '80%',
//       marginLeft: "30%",

      
//     }}>
// <CardBody>
//           <CardTitle className="title font-weight-bold text-center">{name}</CardTitle>
//           <br></br>
//           <CardText className="font-italic">{description}</CardText>
//           <p>
//             <b>Recipe:</b> {recipe}
//           </p>
//           <p>
//             <b>Serve:</b> {serve}
//           </p>
//           <Link
//                 class="btn btn-primary btn-shadow btn-lg"
//                 to="/menu"
//                 role="button"
//               >
//                 Menu
//               </Link>
//         </CardBody>
//         </Card>
//         <div class="col-lg-6 hero-right">
//             <div class="owl-carousel owl-theme hero-carousel">
//               <div class="item">
//                 <img
//                   class="img-fluid"
//                   src="https://cdn3.photostockeditor.com/c/0711/food-beef-steak-with-fork-cutlery-cutlery-image.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </section>



    
  );
}

export default ItemDescription;


// function ItemDescription({ data }) {
//   if (!data) {
//     return <p>No item found.</p>;
//   }
//   console.log(data)

//   const { name, description, recipe, serve } = data;

//   return (
//     <section>
//       <Card>
//         <CardBody>
//           <CardTitle className="font-weight-bold text-center">{name}</CardTitle>
//           <CardText className="font-italic">{description}</CardText>
//           <p>
//             <b>Recipe:</b> {recipe}
//           </p>
//           <p>
//             <b>Serve:</b> {serve}
//           </p>
//         </CardBody>
//       </Card>
//     </section>
//   );
// }

// export default ItemDescription;

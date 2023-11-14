import React from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import useFetch from './hooks/useFetch'
import Food from "./Food";
import DrinkMenu from "./Drinks";

const FoodMenu = () => {


  return (
    <>
    <DrinkMenu/>
    <Food/>

    </>
  );
};


export default FoodMenu;





// const FoodMenu = () => {

  

//   const { data: drinks, loading: drinksLoading, error: drinksError } = useFetch("drinks");
//   const { data: snacks, loading: snacksLoading, error: snacksError } = useFetch("snacks");

//   if (drinksLoading || snacksLoading) {
//     return <p>Loading...</p>;
//   }

//   if (drinksError || snacksError) {
//     return <p>Error: {drinksError?.message || snacksError?.message}</p>;
//   }

//   return (
//     <>
//       <Card>
//         <CardBody>
//           <CardTitle className="font-weight-bold text-center">Drink Menu</CardTitle>
//           <CardText>
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//           </CardText>
//           <ListGroup>
//             {drinks.map(drink => (
              
//               <Link to={`/drinks/${drink.id}`} key={drink.id}>
//                 <ListGroupItem>{drink.name}</ListGroupItem>
//               </Link>
//             ))}
//           </ListGroup>
//         </CardBody>
//       </Card>

//       <Card>
//         <CardBody>
//           <CardTitle className="font-weight-bold text-center">Food Menu</CardTitle>
//           <CardText>
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//           </CardText>
//           <ListGroup>
//             {snacks.map(snack => (
//               <Link to={`/snacks/${snack.id}`} key={snack.id}>
//                 <ListGroupItem>{snack.name}</ListGroupItem>
//               </Link>
//             ))}
//           </ListGroup>
//         </CardBody>
//       </Card>
//     </>
//   );
// };

// export default FoodMenu;

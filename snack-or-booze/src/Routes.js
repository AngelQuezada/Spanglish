import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footers from "./Footers";
import NavBar from "./NavBar";
import FoodMenu from "./FoodMenu";
import useFetch from "./hooks/useFetch";
import ItemDescription from "./FoodItem";
import HomeRoutes from "./HomeRoutes";
import DrinkMenu from "./Drinks";
import Food from "./Food";


function Routes() {
  const { data: drinks, loading: drinksLoading, error: drinksError } = useFetch("drinks");
  const { data: snacks, loading: snacksLoading, error: snacksError } = useFetch("snacks");

  if (drinksLoading || snacksLoading) {
    return <p>Loading...</p>;
  }

  if (drinksError || snacksError) {
    return <p>Error occurred while fetching data</p>;
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route exact path="/menu">
            <FoodMenu drinks={drinks} snacks={snacks} />
          </Route>

          <Route exact path="/Drink">
            <DrinkMenu drinks={drinks} />
          </Route>

          <Route exact path="/snacks">
            <Food snacks={snacks} />
          </Route>

          <Route path="/drinks/:id">
            <ItemDescription items={drinks} cantFind="/drinks" />
          </Route>

          
          <Route path="/snacks/:id">
            <ItemDescription items={snacks} cantFind="/snacks" />
          </Route>
          
          <Route path="/">
            <HomeRoutes/>
          </Route>

          <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
          </Route>

        </Switch>
        <Footers />

      </BrowserRouter>
    </div>
  );
}

export default Routes;



// function Routes() {

//     const {  snacks,  snacksLoading, snacksError } = useFetch("snacks");
//     const {  drinks,  drinksLoading, drinksError } = useFetch("drinks");
  
//     if (snacksLoading || drinksLoading) {
//       return <p>Loading...</p>;
//     }
  
//     if (snacksError || drinksError) {
//       return <p>Error occurred while fetching data</p>;
//     }
//     console.log(snacks)
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <NavBar />
//           <main>
//             <Switch>

//               <Route exact path="/menu">
//               <MenuItem snacks={snacks}/>
//                 {/* <MenuItem snacks={snacks} drinks={drinks}/> */}
//               </Route>

//               <Route path="/">
//                 <Home />
//               </Route>

//               <Route path="/snacks/:id">
//                 <ItemDescription data={ ["Nachos","An American classic!", "Cover expensive, organic tortilla chips with Cheez Whiz.", "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"] } cantFind="/snacks" />
//               </Route>

//               <Route path="/drinks/:id">
//                 <ItemDescription data={drinks} cantFind="/drinks" />
//               </Route>

//               <Route>
//                 <p>Hmmm. I can't seem to find what you want.</p>
//               </Route>
//             </Switch>
//           </main>
//         </BrowserRouter>
//       </div>
//     );
//   }
  
//   export default Routes;
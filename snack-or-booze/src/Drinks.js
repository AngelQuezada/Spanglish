import React from "react";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import useFetch from './hooks/useFetch'
import './statics/Drink.css'

const DrinkMenu = () => {

    const { data: drinks, loading: drinksLoading, error: drinksError } = useFetch("drinks");
    const { data: snacks, loading: snacksLoading, error: snacksError } = useFetch("snacks");

    if (!drinks || !snacks) {
    return <p>Loading...</p>;
    }

  return (
    <>
<div className="drink">
      <div class="container">
        <div class="row d-flex align-items-center">
        <div class="col-lg-6 hero-left">
            <div class="owl-carousel owl-theme hero-carousel">
              <div class="item">
                <img
                  class="img-fluid"
                  src="https://img.freepik.com/free-photo/lemon-drop-martini-cocktail-wooden-table_123827-23251.jpg?w=740&t=st=1689088467~exp=1689089067~hmac=101991e732ac7f5aac46bda42e1b911b796dc5fb9397653d9b3a5021be80c3a3"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 hero-right">

        <CardBody>
          <CardTitle className="title font-weight-bold text-center">Drink Menu</CardTitle>
          <br></br>
          <ListGroup>
            {drinks.map((drink) => (
              <Link to={`/drinks/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      
          </div>


        </div>
      </div>
    </div>

    </>
  );
};


export default DrinkMenu;
import React from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import useFetch from './hooks/useFetch'
import './statics/Drink.css'

const Food = () => {

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

        <CardBody>
          <CardTitle className="title font-weight-bold text-center">Food Menu</CardTitle>
          <br></br>
          <ListGroup>
            {snacks.map((snacks) => (
              <Link to={`/snacks/${snacks.id}`} key={snacks.id}>
                <ListGroupItem>{snacks.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      
          </div>

          <div class="col-lg-6 hero-right">
            <div class="owl-carousel owl-theme hero-carousel">
              <div class="item">
                <img
                    style={{marginLeft: '45px'}}
                  class="img-fluid"
                  src="https://img.freepik.com/free-photo/salad-with-vitamins-body-weight-maintenance_7502-7270.jpg?w=740&t=st=1689089885~exp=1689090485~hmac=e8bad2ad2831573c6205a396b54f60c428b5b895ca119a03ad2da1734c24ce1d"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};


export default Food;
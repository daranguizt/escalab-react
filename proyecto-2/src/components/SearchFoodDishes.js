import React, { Fragment, useState } from "react";
import { Grid } from "@material-ui/core";
import AnyFoodDishes from "./AnyFoodDishes";
import PredefinedFoodDishes from "./PredefinedFoodDishes";
import FoodDishes from "./FoodDishes";
import { getApiUrl } from "../constants/index";

const SearchFoodDishes = () => {
  const [hits, setHits] = useState();

  const getData = (query) => {
    query &&
      fetch(getApiUrl(query))
        .then((res) => res.json())
        .then((data) => setHits(data.hits));
  };

  return (
    <Fragment>
      <div className="root">
        <Grid container spacing={3} justify="center">
          <AnyFoodDishes getData={getData} />
          <PredefinedFoodDishes getData={getData} setHits={setHits} />
        </Grid>
      </div>
      {hits && <FoodDishes hits={hits} />}
    </Fragment>
  );
};

SearchFoodDishes.displayName = "SearchFoodDishes";

export default SearchFoodDishes;

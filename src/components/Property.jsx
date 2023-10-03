import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data.json";
import Card from "./Card";

const Property = (Params) => {
  const params = useParams();
  const { id } = params;
  const filterObj = Data.find((item) => item.id === id);
  console.log(filterObj);
  return (
    <Card image={filterObj.image} title={filterObj.title} price={filterObj.price} />
  );
};

export default Property;

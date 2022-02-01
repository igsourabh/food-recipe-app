import React from 'react';
import { addFood } from "./redux/features/foodSlice";
import { useSelector } from "react-redux";
import { allfood } from "./redux/features/foodSlice";
import Card from './Card';
const Carditem = () => {
  const fooddata = useSelector(allfood);
console.log(fooddata)

  return (<>
   <div className="row">
          {fooddata.map((element, index) => {
            return (
              <div className="col-md-3 my-2" key={element.recipe.uri}>
                <Card
                  source={element.recipe.source}
                  image={element.recipe.image}
                  healthLabels={element.recipe.healthLabels}
                  title={element.recipe.label}
                  dietLabels={element.recipe.dietLabels}
                  id={element.recipe.uri.slice(51,element.recipe.uri.length)}
                />
              </div>
            );
          })}
        </div>
  </>)
};

export default Carditem;

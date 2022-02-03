import React from 'react';
import Card from './Card';

const Carditem = (props) => {



  return (<>
   <div className="row" >
          {props.data.map((element, index) => {
            return (
              <div className="col my-2" key={element.recipe.uri}>
                <Card
                  source={element.recipe.source}
                  image={element.recipe.image}
                  healthLabels={element.recipe.healthLabels}
                  title={element.recipe.label}
                  dietLabels={element.recipe.dietLabels}
                  id={element.recipe.uri.slice(51,element.recipe.uri.length)}
                  cusinetype={element.recipe.cuisineType}
                />
              </div>
            );
          })}
        </div>
  </>)
};

export default Carditem;

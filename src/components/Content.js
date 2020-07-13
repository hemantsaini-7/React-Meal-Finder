import React from "react";
import "./../Styles/content.css";

function Content(props) {
  return (
    <div className='items'>
      {props.meals.map((meal) => (
        <div className='item' key={meal.idMeal}>
          <h1 className='head'>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} className='img-style' alt='MainImg' />
          <div>
            <h1 className='instr-head'>Instructions</h1>
            <p className='instructions'>{meal.strInstructions}</p>
          </div>
          <a
            href={meal.strSource}
            target='_blank'
            rel='noopener noreferrer'
            className='video-link'
          >
            Video Source
          </a>
        </div>
      ))}
    </div>
  );
}

export default Content;

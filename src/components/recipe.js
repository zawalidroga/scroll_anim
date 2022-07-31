import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const Container = styled.div`
  height: 200px;
  width: 500px;
  position: fixed;
  background-color: brown;
  top: 100px;
  left: calc(50vw - 250px);
  z-index: 5;
  h1 {
    text-align: center;

  }
`;

const Recipe = () => {
  const [hiddenRecipe, setHiddenRecipe] = useState("hidden");
  const [imgRecipe, setImgRecipe] = useState('');
  const [recipes, setRecipes] = useState('');
  const [source, setSource] = useState('');
  const [title, setTitle] = useState('error');
  const [tagValue, setTagValue] = useState('');
  const dinner = ['Beef', 'Chicken', 'Goat', 'Pasta', 'Pork']

  const options = {
    method: 'GET',
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${tagValue}`, 
  };


  const getRecipe = (e) => {
    axios.request(options).then(function (response) {
      let randomMeal = Math.floor(Math.random()*response.data.meals.length)
      const randRecipe = response.data.meals[randomMeal].strMeal
      const randTitle = response.data.meals[randomMeal].strMeal
      const randSource = response.data.meals[randomMeal].strMealThumb
      setRecipes(randRecipe)
      setSource(randSource)
      setTitle(randTitle)
      setImgRecipe('error')

    }).catch(function (error) {
      console.error(error);
    });
  };

  const showRecipe = (e) => {
    if (e.key === "ArrowUp" && 800 < window.scrollX && window.scrollX < 940) {
      setHiddenRecipe("visible");
      setTagValue('Breakfast')

    } else if (e.key === "ArrowUp" && 2470 < window.scrollX && window.scrollX < 2600) {
      setHiddenRecipe("visible");
      setTagValue('Dessert')
    } else if (e.key === "ArrowUp" && 3800 < window.scrollX ) {
      setHiddenRecipe("visible");
      setTagValue(dinner[Math.floor(Math.random()*dinner.length)])
    }
  };

  const hideRecipe = () => (
    setHiddenRecipe('hidden')
  )
  
  useEffect(() => {
    window.addEventListener('keydown', showRecipe);
   
  }, [])

  useEffect(() => {
    getRecipe()
  }, [tagValue])

// useEffect(() => {
//   options.params.tags = options.params.tags + tagValue
//   console.log(options.params.tags)
//   console.log(typeof options.params.tags)
// },[tagValue]);


  return (
    <Container style={{ visibility: hiddenRecipe }}>
      
      <h1>{title}</h1>
        <div>{source} tutaj</div>
      <button onClick={hideRecipe}> CLOSE </button>
    </Container>
  );
};

export default Recipe;

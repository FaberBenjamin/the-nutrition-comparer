import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import MenuItems from './components/MenuItems';
import HeaderModified from './components/headerModified';
import BurgerCard from './components/BurgerCard';
import AlternativeCard from './components/AlternativeCard'

function App() {

  const [idSelected, setIdSelected] = useState('0')
  const [nutritionChosen, setNutritionChosen] = useState('Calories')
  const [itemSelectionHappened, setSelectionHappened] = useState(false);

  const selectHandler = (event) => {
    setIdSelected(event.target.selectedIndex);
  }
  const selectNutritionHandler = (event) => {
    setNutritionChosen(event.target.value)
  }
  const setItemClickHandler = () => {
    setSelectionHappened(true);
  }
  const resetClickHandler = () => {
    setSelectionHappened(false)
  }

  if (itemSelectionHappened === true) {
    return (
      <Fragment>
        <HeaderModified />
        <div className='cards_container'>
        <BurgerCard id={idSelected}/>
        <AlternativeCard onClick={resetClickHandler} nutritionChosen={nutritionChosen} sugar={MenuItems[idSelected].sugar} fat={MenuItems[idSelected].fat} protein={MenuItems[idSelected].protein} calories={MenuItems[idSelected].calories} cholesterol={MenuItems[idSelected].cholesterol}/>
        </div>
      </Fragment>
    )
  } else {

    return (
      <Fragment>
        <Navbar />
        <Header />

        <div className='text_container'>

          <h2 className='main_h2'>Have you ever wondered what alternative could you eat compared to our favorite burgers?
            For example, if you wanted to eat the same amount of protein in a different meal-option, what
            would the other nutrions be look like? Or if you would like to eat something already sugary, is there a better food alternative?
          </h2>
          <h2 className='main_h2'>The nutrition comparisor provides you data-comparison
            adjusted to one serving of food.
          </h2>
          <h3 className='main_h3'>First you have to select an item which you
            want to be compared.
          </h3>

          <form>
            <label>Choose a Menu Item:</label>
            <select onChange={selectHandler}>

              <option name={"McChicken"}>{MenuItems[0].name}</option>
              <option name={"Cheeseburger"}>{MenuItems[1].name}</option>
              <option name={"Filet-O-Fish"}>{MenuItems[2].name}</option>
              <option name={"McNuggets"}>{MenuItems[3].name}</option>
              <option name={"Fries"}>{MenuItems[4].name}</option>
              <option name={"McFreeze"}>{MenuItems[5].name}</option>
              <option name={"BigMac"}>{MenuItems[6].name}</option>
              <option name={"Hamburger"}>{MenuItems[7].name}</option>
            </select>
          </form>

          <h3 className='main_h3'>Second you have to select the nutrition value,
            which is going to remain more or less identical. Eg.: If you
            select Calories, then the calories within the items
            will be similar, thus you can observe the other
            nutrition factors for the same amount of calories.
          </h3>

          <form>
            <label>Choose a nutrition:</label>
            <select onChange={selectNutritionHandler} name="Nutritions">
              <option>Calories</option>
              <option>Protein</option>
              <option>Fat</option>
              <option>Sugar</option>
              <option>Cholesterol</option>
            </select>
          </form>

          <h3 className='main_h3'>Time to compare!
          </h3>

          <button className='main_bottom' type="submit" onClick={setItemClickHandler}>Compare!</button>

        </div>

      </Fragment>
    );
  }
}

export default App;

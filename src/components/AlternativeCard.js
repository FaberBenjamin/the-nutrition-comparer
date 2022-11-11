import { useState, useEffect, Fragment } from "react";
import classes from "./Alternativecard.module.css"

const AlternativeCard = (props) => {
    const url = "bb9d8fe3ccd847f68d8e04f554ba77fa";
    const [firstObject, setFirstObject] = useState({});
    const [newData, setNewData] = useState('')

    const compareClickHandler = () => {
        let y = Math.floor(Math.random() * 10)
        setNewData(y)
    }

    let nutritionSugarValue = 0;
    let nutritionFatValue = 0;
    let nutritionCaloriesChosen = 0;
    let nutritionProteinValue = 0;
    let nutritionCholesterolValue = 0;

    let NutritionChosen = (props.nutritionChosen)

    if (NutritionChosen === "Protein") {
        nutritionProteinValue = (props.protein)
    } else if (NutritionChosen === "Fat") {
        nutritionFatValue = (props.fat)
    } else if (NutritionChosen === "Cholesterol") {
        nutritionCholesterolValue = (props.cholesterol)
    } else if (NutritionChosen === "Sugar") {
        nutritionSugarValue = (props.sugar)
    } else if (NutritionChosen === "Calories") {
        nutritionCaloriesChosen = (props.sugar)
    } else {
        console.log("nyet")
    }

    let minSugar = "minSugar=".concat(nutritionSugarValue);
    let minFat = "minFat=".concat(nutritionFatValue);
    let minProtein = "minProtein=".concat(nutritionProteinValue);
    let minCholesterol = "minCholesterol=".concat(nutritionCholesterolValue);
    let minCalories = "minCalories=".concat(nutritionCaloriesChosen);

    let SugarcountVariable = 1000;
    let FatcountVariable = 1000;
    let CaloriescountVariable = 1000;
    let ProteincountVariable = 1000;
    let CholesterolcountVariable = 1000;

    if (Number(nutritionSugarValue) != 0) {
        SugarcountVariable = Number(nutritionSugarValue * 0.1)
    } else if (
        (Number(nutritionFatValue) != 0)) {
        FatcountVariable = Number(nutritionFatValue * 0.1)
    } else if (
        (Number(nutritionCaloriesChosen) != 0)) {
        CaloriescountVariable = Number(nutritionCaloriesChosen * 0.1)
    } else if (
        (Number(nutritionProteinValue) != 0)) {
        ProteincountVariable = Number(nutritionProteinValue * 0.1)
    } else if (
        (Number(nutritionCholesterolValue) != 0)) {
        CholesterolcountVariable = Number(nutritionCholesterolValue * 0.1)
    } else {
    }

    let maxSugar = "maxSugar=".concat(Number(nutritionSugarValue) + SugarcountVariable);
    let maxFat = "maxFat=".concat(Number(nutritionFatValue) + FatcountVariable);
    let maxProtein = "maxProtein=".concat(Number(nutritionProteinValue) + ProteincountVariable);
    let maxCholesterol = "maxCholesterol=".concat(Number(nutritionCholesterolValue) + CholesterolcountVariable);
    let maxCalories = "maxCalories=".concat(Number(nutritionCaloriesChosen) + CaloriescountVariable);



    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${url}&${minSugar}&${minFat}&${minProtein}&${minCholesterol}&${minCalories}&${maxSugar}&${maxProtein}&${maxFat}&${maxCholesterol}&${maxCalories}&minFiber=0&maxFiber=1000&minSaturatedFat=0&maxSaturatedFat=1000&minCholesterol=0&maxCholesterol=1000`)
            .then(response => response.json())
            .then(data => {
                let x = Math.floor(Math.random() * (data.length - 1 - 0) + 0);
                console.log(x);
                setFirstObject(data[x])

            });
    }, [newData]);

    // console.log(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${url}&${minSugar}&${minFat}&${minProtein}&${minCholesterol}&${minCalories}&${maxSugar}&${maxProtein}&${maxFat}&${maxCholesterol}&${maxCalories}&minFiber=0&maxFiber=1000&minSaturatedFat=0&maxSaturatedFat=1000&minCholesterol=0&maxCholesterol=1000`)

    let ChoosenSugar = (props.sugar)
    let ChoosenFat = (props.fat)
    let ChoosenCalories = (props.calories)
    let ChoosenCholesterol = (props.cholesterol)
    let ChoosenProtein = (props.protein)

    let alternativeSugar = (firstObject.sugar)
    let alternativeFat = (firstObject.fat)
    let alternativeCalories = (firstObject.calories)
    let alternativeCholesterol = (firstObject.cholesterol)
    let alternativeProtein = (firstObject.protein)

    if (alternativeSugar != undefined) {
        alternativeSugar = alternativeSugar.slice(0, -1);
        alternativeCholesterol = alternativeCholesterol.slice(0, -2);
        alternativeFat = alternativeFat.slice(0, -1)
        alternativeProtein = alternativeProtein.slice(0, -1)
    }

    let Sugardeterminator = (Number(ChoosenSugar) - Number(alternativeSugar));
    let FatDeterminator = (Number(ChoosenFat) - Number(alternativeFat));
    let ProteinDeterminator = (Number(ChoosenProtein) - Number(alternativeProtein));
    let CholesterolDeterminator = (Number(ChoosenCholesterol) - Number(alternativeCholesterol));
    let CaloriesDeterminator = (Number(ChoosenCalories) - Number(alternativeCalories));


    let SugarClassCondition = classes.basic;
    let FatClassCondition = classes.basic
    let ProteinClassCondition = classes.basic
    let CaloriesClassCondition = classes.basic
    let CholesterolClassCondition = classes.basic

if (alternativeCalories || alternativeCholesterol || alternativeFat || alternativeSugar || alternativeProtein != undefined) {
         SugarClassCondition = Number(Sugardeterminator) > 0 ? classes.better_result : classes.worse_result;
         FatClassCondition = Number(FatDeterminator) > 0 ? classes.better_result : classes.worse_result;
         ProteinClassCondition = Number(ProteinDeterminator) <= 0 ? classes.better_result : classes.worse_result;
         CaloriesClassCondition = Number(CaloriesDeterminator) > 0 ? classes.better_result : classes.worse_result;
         CholesterolClassCondition = Number(CholesterolDeterminator) > 0 ? classes.better_result : classes.worse_result;
        console.log("Succesfull fetching")
    }

    return (
        <Fragment>


            <div className={classes.logo_container}>
                <img className={classes.logo} src="https://cdn-icons-png.flaticon.com/512/2990/2990154.png" />
                <div>
                <button className={classes.alternative_button} onClick={compareClickHandler}>NewCompare</button>
                <button className={classes.alternative_button} type="submit" onClick={props.onClick}>HomePage</button>
                </div>
            </div>



            <div className={classes.card_container}>
                <div className={classes.card_logo}><img className={classes.alternative_img} src={firstObject.image} /></div>
                <div className={classes.title}>{firstObject.title}</div>

                <div className={classes.nutrions_container}>
                    <div>
                        <div className={`${classes.line1} ${classes.line_decorated} ${CaloriesClassCondition}`}>Calories:<div>{firstObject.calories}kcal</div></div>
                        <div className={`${classes.line2} ${classes.line} ${FatClassCondition}`}>Fat:<div>{firstObject.fat}</div></div>
                        <div className={`${classes.line3} ${classes.line_decorated}`}>Saturated-Fat:<div>{firstObject.saturatedFat}</div></div>
                        <div className={`${classes.line4} ${classes.line} ${CholesterolClassCondition}`} >Cholesterol:<div>{firstObject.cholesterol}</div></div>
                        <div className={`${classes.line5} ${classes.line_decorated}`}>Carbs:<div>{firstObject.carbs}</div></div>
                        <div className={`${classes.line} ${classes.line6}`}>Fiber:<div>{firstObject.fiber}</div></div>
                        <div className={`${classes.line7} ${classes.line_decorated} ${SugarClassCondition}`}>Sugar:<div>{firstObject.sugar}</div></div>
                        <div className={`${classes.line8} ${classes.line} ${ProteinClassCondition}`}>Protein:<div>{firstObject.protein}</div></div>
                    </div>
                </div>



            </div>
        </Fragment>
    )
}



export default AlternativeCard;
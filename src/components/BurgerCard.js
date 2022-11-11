import { Fragment } from "react";
import classes from "./Burgercard.module.css";
import MenuItems from "./MenuItems";

const BurgerCard = (props) => {

   let identifier = (props.id);
   
console.log(MenuItems[identifier].sugar)

    return (
        <Fragment>
            <div className={classes.card_container}>
                <div className={classes.card_logo}><img src={MenuItems[identifier].img} /></div>
                <div className={classes.title}>{MenuItems[identifier].name}</div>

                <div className={classes.nutrions_container}>
                    <div>
                        <div className={`${classes.line1} ${classes.line_decorated}`}>Calories:<div>{MenuItems[identifier].calories}kcal</div></div>
                        <div className={`${classes.line2} ${classes.line}`}>Fat:<div>{MenuItems[identifier].fat}g</div></div>
                        <div className={`${classes.line3} ${classes.line_decorated}`}>Saturated-Fat:<div>{MenuItems[identifier].saturated} g</div></div>
                        <div className={`${classes.line4} ${classes.line}`}>Cholesterol:<div>40mg</div></div>
                        <div className={`${classes.line5} ${classes.line_decorated}`}>Carbs:<div>{MenuItems[identifier].carbs}g</div></div>
                        <div className={`${classes.line6} ${classes.line}`}>Fiber:<div>{MenuItems[identifier].fiber}g</div></div>
                        <div className={`${classes.line7} ${classes.line_decorated}`}>Sugar:<div>{MenuItems[identifier].sugar}g</div></div>
                        <div className={`${classes.line8} ${classes.line}`}>Protein:<div>{MenuItems[identifier].protein}g</div></div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default BurgerCard;
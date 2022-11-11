import React, { Fragment } from "react";
import classes from "./header.module.css"

const Header = () => {
    return (
        <Fragment>
       
            <div className={classes.background}>
            </div>

            <div className={classes.container}>
            <img  className={classes.logo} src="https://cdn-icons-png.flaticon.com/512/5968/5968696.png"></img>
            <h1  className={classes.font}>The nutrition comparer</h1>
            </div>

          
        </Fragment>
    )
}

export default Header;
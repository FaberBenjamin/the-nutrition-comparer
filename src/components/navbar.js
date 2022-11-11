import classes from "./navbar.module.css";
import { useEffect, useState } from "react";
import Modal from "../Modal"
import AboutModal from "../AboutModal"

const Navbar = () => {

    const [navbarItem, setNavbarItemActive] = useState(3)
    const [disclaimerOpen, setDisclaimerOpen] = useState(false)
    const [aboutOpen, setAboutOpen] = useState(false)
    const [toogleMenu, setToogleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

            return () => {
                window.removeEventListener('resize', changeWidth)
            }
    }, [])

    const mouseOverHandler = (event) => {
        console.log(event.target.value)
        setNavbarItemActive(event.target.value)
    }
    const mouseLeaveHandler = () => {
        setNavbarItemActive(3)
    }

    const toogleNav = () => {
        setToogleMenu(!toogleMenu)
    }

    return (

        <div>
           {(toogleMenu || screenWidth > 600) && (<ul className={classes.navbar_background}>
                <li value="0" onClick={() => setDisclaimerOpen(true)} onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler} className={navbarItem === 0 ? classes.navbar_element_active : classes.navbar_element}>Disclaimer</li>
                <li value="1" onClick={() => setAboutOpen(true)} onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler} className={navbarItem === 1 ? classes.navbar_element_active : classes.navbar_element}>About</li>
                <li value="2" className={`${navbarItem === 2 ? classes.navbar_element_active : classes.navbar_element} ${classes.inProgress}`}>Create</li>
            </ul>)}
            <button onClick={toogleNav} className={classes.hamburger}><img className={classes.hamburger_icon} src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"></img></button>

            <Modal onOpen={disclaimerOpen} onClose={() => setDisclaimerOpen(false)}>
                <h1>Disclaimer</h1>
                <p>This website was made for entartaining purposes only, and not for widespread public
                    usage.
                </p>
                <p>The products' names, logos and imagies displayed are properties of McDonald's inc. Nor the website nor its creator has intention
                    of putting the afforementioned brand in a bad shade regarding healthy eating habits.
                </p>
                <p>The nutrition data of the McDonald's products are scourced from the offical McDonald's Hungary website. The data might differ according to you region.
                </p>
                <p>Me - as well as many of us - love McDonalds ❤. And you should definately eat there as much as you prefer. It is your choice.
                </p>
                <p>The products displayed on the Alterative Card are properties of spoonacular.com who provides the neccessary data for us.
                    Make sure to check their websites as well.
                </p>
            </Modal>

            <AboutModal onOpen={aboutOpen} onClose={() => setAboutOpen(false)}>
                <div>
                    <h1>About this project</h1>
                    <h2>This project was created by using:</h2>

                    <div className={classes.grid_container}>
                        <img className={classes.icons} src="https://cdn-icons-png.flaticon.com/512/875/875209.png"></img>
                        <p className={classes.icon_desc}>React</p>
                        <img className={classes.icons} src="https://cdn-icons-png.flaticon.com/512/354/354756.png"></img>
                        <p className={classes.icon_desc}>CSS Modules</p>
                        <img className={classes.icons} src="https://cdn-icons-png.flaticon.com/512/103/103093.png"></img>
                        <p className={classes.icon_desc}>API fetching</p>
                    </div>

                    <h2>This is a relatively simple application, the main goal was to use
                        the concepts of UseState, UseEffect, ReactPortals and basic API fetching.
                    </h2>
                    <p>For more information visit: github.com/FaberBenjamin</p>
                    <p>Version: Beta 1.0</p>
                </div>
            </AboutModal>
        </div>
    )
}

export default Navbar;
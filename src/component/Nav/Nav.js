import classes from "./Nav.module.css"
import logo from "../../Imges/LogoAnt.png"
const Nav =() =>{
    return(
        <div className={classes.Logo}>
            { <img src={logo} alt={"Dont's"} /> }
            <div>ANT'S SHOP</div>
        </div>
    )
}
export default Nav;
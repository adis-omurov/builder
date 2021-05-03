import classes from "./Logo.module.css"
// import logo from "../../imegs/with-plate.png"
const Logo =() =>{
    return(
        <div className={classes.Logo}>
            {/* <img src={logo} alt={"Dont's"} /> */}
            <div>Donut's</div>
        </div>
    )
}
export default Logo;
import classes from "Logo.module.css";
import logo from "../../Imges/AntImages"
const Logo = () => {
  return (
    <div className={classes.Logo}>
        <img src={logo} alt={"logo"}/>
    </div>
  );
}

export default Logo; 
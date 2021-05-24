import classes from "./Logo.module.css"
import logo from "../../Imges/LogoAnt.png"
const Logo = () => {
    return (
<ul className={classes.Logo}><img src={logo} alt={"logo"}/></ul>
    )
}
export default Logo
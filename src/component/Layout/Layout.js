import Drawer from "../Drawer/Drawer"
import Toolbar from "../Toolbar/Toolbar"
import classes from "./Layout.module.css"

const Layout = () =>{
    return(
<ul className={classes.Layout}>
 <div>
     <Toolbar/>
     <Drawer/>
     </div>   
</ul>
    )
}
export  default Layout
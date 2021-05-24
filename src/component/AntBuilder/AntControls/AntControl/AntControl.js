// import classes from "./DonutControl.module.css";
// import DonutIngredient from "../../DonutIngredient/DonutIngredient";
// import Button from "../../../UI/Button/Button";
// import { useDispatch } from "react-redux";
// import { add, remove } from "../../../../store/action/builder";

import classes from "./AntControl.module.css";
import Button from "../../../UI/Button/Button";
import AntIngredient from "../../AntIngredient/AntIngredient";

const AntControl = ({ type,  count }) => {
    const dispatch = useDispatch()
    return (
        <div className={classes.AntControl}>
            <Button onClick={() => dispatch(add(type))}>+</Button>
            <div className={classes.ingredient}><AntIngredient type={type} fixed/></div>
            <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
        </div>
    );
}

export default AntControl;
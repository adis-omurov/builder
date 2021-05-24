import AntIngredient from '../../../../AntIngredient/AntIngredient';
import classes from './AntPreview.module.css';
// import plate from '../../../img/plate.png'

const AntPreview = ({ ingredients, price }) => {
    const result = []

    for (const ingredient in ingredients) {
        for (let i = 0; i < ingredients[ingredient]; i++) {
            result.push(<AntIngredient key={ingredient + i} type={ingredient} />)
        }
    }
    return (
        <div className={classes.AntPreview} >
            <div className={classes.plate}  >
                <div className={classes.ingredients}>{result}</div>
            </div>
            <div className={classes.price}>{price}som</div>
        </div>
        //    <div className={classes.AntPreview} >
        //         <div className={classes.plate}  style={{ backgroundImage: url(${plate}), backgroundPosition: "center", backgroundSize: 'cover', witdth: "520px", height: "400px", marginRight: "-3px" }}>
        //             <div className={classes.ingredients }>{result}</div>
        //         </div>
        //         <div className={classes.price}>{price}som</div>
        //     </div>
    );
}

export default AntPreview
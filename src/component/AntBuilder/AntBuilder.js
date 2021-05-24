// const AntBuilder = () =>{
//     return(
//         <div>

//         </div>
//     )
// }
// export default AntBuilder
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import classes from "./AntBuilder.module.css";
import AntControls from "./AntControls/AntControls";
import AntPreview from "./AntPreview/AntPreview";
import OrderSummary from "./OrderSummarry/OrderSummarry";
// import DonutControls from "./DonutControls/DonutControls";
// import DonutPreview from "./DonutPreview/DonutPreview";
// import OrderSummary from "./OrderSummary/OrderSummary";

const AntBuilder = ({ history }) => {
    const [ingredients, setIngredients] = useState({})
    const [price, setPrice] = useState(0);
    const [ordering, setOrdering] = useState(false);
    const prices = {
        // red: 15,
        // blue: 25,
        // brown: 53,
        // black: 32,
        // pink: 25,
        // violet: 47
    }
    useEffect(loadDefaults, []);

    function loadDefaults() {
        axios
            .get('https://builder-660e7-default-rtdb.firebaseio.com/defauld.json')
            .then(response => {
                setPrice(response.data.price);

                // For arrays
                // setIngredients(Object.values(response.data.ingredients));
                // For objects
                setIngredients(response.data.ingredients);
            });
    }





    function startOrdering() {
        setOrdering(true);
    }

    function stopOrdering() {
        setOrdering(false);
    }
    function finishOrdering() {
        axios.post('https://builder-660e7-default-rtdb.firebaseio.com/orders.json', {
            ingredients: ingredients,
            price: price,
            address: "1234 Jusaeva str",
            phone: "0 777 777 777",
            name: "Sadyr Japarov",
        })
            .then(() => {
                setOrdering(false);
                loadDefaults()
                history.push('/checkout');
            })
    }

    function addIngredient(type) {
        const newIngredients = { ...ingredients };
        newIngredients[type]++;
        setPrice(price + prices[type]);
        setIngredients(newIngredients);
    }
    function removeIngredient(type) {
        if (ingredients[type]) {
            const newIngredients = { ...ingredients };
            newIngredients[type]--;
            setPrice(price - prices[type])
            setIngredients(newIngredients)
        }

    }

    return (
        <div className={classes.AntBuilder}>
            <AntPreview ingredients={ingredients}
                price={price} />
            <AntControls ingredients={ingredients}
                addIngredient={addIngredient}
                removeIngredient={removeIngredient}
                startOrdering={startOrdering}
            />


            <Modal show={ordering} cancel={stopOrdering}>
                <OrderSummary ingredients={ingredients} price={price} />

                <div className={classes.Button}>
                    <Button onClick={() => finishOrdering()} green>Checkout</Button>
                    <Button onClick={() => stopOrdering()} >Cancel</Button>
                </div>
            </Modal>
        </div>
    );
}

export default AntBuilder;
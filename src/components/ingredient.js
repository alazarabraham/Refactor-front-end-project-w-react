import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import{Button} from "bloomer";

class Ingredient extends Component {
    state = {
        ingredients: []
        };



    async componentDidMount() {
        this.renderIngredient();
    }

    renderIngredient = async () => {
        const response = await loadData(
            `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=dev`
        );
        const ingredients = await response.results;
        {ingredients.map((ingredient) =>{
            console.log(ingredient.ingredients);

            return (
            <li>
                {ingredient.ingredients}
             </li>

            )
         })}
       
        // CONVERT INGREDIENTS TO ARRAY!
        
        this.setState({
            ingredients
        });
    };

    refreshIngredient = () => {
        this.renderIngredient();
    };

    render() {

        const { ingredient } = this.state;
            return (
                <>
                    <p>{ingredient}</p>
                    <Button isColor="danger" onClick={() => this.refreshIngredient()}>
                        Refresh ingredient
                    </Button>
                </>
            );
        }
}

export default Ingredient;
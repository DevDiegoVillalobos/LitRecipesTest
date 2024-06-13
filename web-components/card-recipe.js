import {LitElement, html, css, } from 'lit';

export class CardRecipe extends LitElement{

    static properties = {
        title: {type: String},
        ingredients: {type: String}
    };

    constructor(){
        super();
        this.title = 'Edame Noodles';
        this.ingredients = 'Edame Beans, Noodels, Garlic oil';
    }

    render(){
        return html`
            <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link type="text/css" href="/css/styles.css" rel="stylesheet">

        <div class="card-panel recipe white row">
            <img src="/img/dish.png" alt="recipe thumb">
            <div class="recipe-details">
                <div class="recipe-title">${this.title}</div>
                <div class="recipe-ingredients">${this.ingredients}</div>
            </div>
            <div class="recipe-delete">
                <i class="material-icons">delete_outline</i>
            </div>
        </div>
        `
    }
}

customElements.define('card-recipe', CardRecipe);
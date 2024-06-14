import { LitElement, html, css } from "lit-element";
import "./card-recipe.js";
import "./add-recipe.js";
export class Recipes extends LitElement {
  static properties = {
    recipesList: { type: Array, reflect: true },
    nextIdx: { type: Number },
  };

  constructor() {
    super();
    this.recipesList = [
      {
        id: 1,
        title: "Edame Noodles",
        ingredients: "Edame Beans, Noodels, Garlic oil",
      },
      {
        id: 2,
        title: "Edame Noodles",
        ingredients: "Edame Beans, Noodels, Garlic oil",
      },
    ];
    this.nextIdx = 3;
  }

  _printRecipes() {
    return this.recipesList.length <= 0
      ? html`<div class="center-align"><span>Sin registros</span></div>`
      : this.recipesList.map(
          (recipe) => html`
            <card-recipe
              id=${recipe.id}
              title=${recipe.title}
              ingredients=${recipe.ingredients}
              @deleteRecipe=${this._removeRecipe}
            ></card-recipe>
          `
        );
  }

  _addedRecipe(e) {
    const recipeToAdd = { ...e.detail };
    recipeToAdd.id = this.nextIdx++;
    this.recipesList = [...this.recipesList, recipeToAdd];
    M.toast({ html: "Added Recipe", classes: "rounded" });
  }

  _removeRecipe(e) {
    const id = e.detail;
    console.log(id);
    this.recipesList = this.recipesList.filter((recipe) => recipe.id !== id);
    M.toast({ html: "Removed Recipe", classes: "rounded" });
  }

  render() {
    return html`
      <link type="text/css" href="/css/materialize.min.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link type="text/css" href="/css/styles.css" rel="stylesheet" />

      <div class="recipes container grey-text text-darken-1">
        ${this._printRecipes()}
      </div>

      <add-recipe @addedRecipe=${this._addedRecipe}></add-recipe>
    `;
  }
}

customElements.define("recipes-component", Recipes);

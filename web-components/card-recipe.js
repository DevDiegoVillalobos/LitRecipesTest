import { LitElement, html, css } from "lit";
import mainStyles from "/css/styles.css" with { type: "css" };
import materializeStyles from "/css/materialize.min.css" with { type: "css" };

export class CardRecipe extends LitElement {
  static properties = {
    id: { type: Number },
    title: { type: String },
    ingredients: { type: String },
  };

  static styles = [
    mainStyles,
    materializeStyles,
    css`
      /* recipe styles */
      .recipes {
        margin-top: 20px;
      }
      .card-panel.recipe {
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0px 1px 3px rgba(90, 90, 90, 0.1);
        display: grid;
        grid-template-columns: 2fr 6fr 1fr;
        grid-template-areas: "image details delete";
        position: relative;
      }
      .recipe img {
        grid-area: image;
        max-width: 60px;
      }
      .recipe-details {
        grid-area: details;
        margin-top: 6px;
      }
      .recipe-delete {
        grid-area: delete;
        position: absolute;
        bottom: 0px;
        right: 0px;
      }
      .recipe-delete i {
        font-size: 18px;
      }
      .recipe-title {
        font-weight: bold;
      }
      .recipe-ingredients {
        font-size: 0.8em;
      }

      /* form-styles */
      .add-btn {
        background: var(--title) !important;
      }
      input {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
      }
      .side-form button {
        background: var(--title);
        box-shadow: 1px 1px 3px rgba(90, 90, 90, 0.2);
      }
      form .input-field {
        margin-top: 30px;
      }
    `,
  ];

  constructor() {
    super();
    this.id = -1;
    this.title = "Edame Noodles";
    this.ingredients = "Edame Beans, Noodels, Garlic oil";
  }

  _removeRecipe() {
    const detail = this.id;
    const event = new CustomEvent("deleteRecipe", {
      detail,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div class="card-panel recipe white row">
        <img src="/img/dish.png" alt="recipe thumb" />
        <div class="recipe-details">
          <div class="recipe-title">${this.title}</div>
          <div class="recipe-ingredients">${this.ingredients}</div>
        </div>
        <div class="recipe-delete" @click=${this._removeRecipe}>
          <i class="material-icons">delete_outline</i>
        </div>
      </div>
    `;
  }
}

customElements.define("card-recipe", CardRecipe);

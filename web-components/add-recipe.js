import { LitElement, html, css } from "lit";
import mainStyles from "/css/styles.css" with { type: "css" };
import materializeStyles from "/css/materialize.min.css" with { type: "css" };

export class AddRecipe extends LitElement {
  static properties = {
    isOpen: { type: Boolean },
    recipe: {
      type: Object,
      attribute: false,
    },
  };

  static styles = [
    mainStyles,
    materializeStyles,
    css`
      :host {
        display: block;
        position: relative;
        --primary: #ffe9d2;
        --secondary: #ffe1c4;
        --tertiary: #3e2400;
        --title: #ff8816;
        --white: #fff;
        --grey: #f5f5f5;
        --dark-grey: #333;
      }

      .sidebar {
        position: fixed;
        top: 0;
        z-index: 1000;
        left: -250px;
        width: 250px;
        height: 100%;
        background: var(--tertiary);
        color: var(--white);
        font-size: 1.2rem;
        transition: left 0.3s;
      }
      .sidebar.open {
        left: 0;
      }
      .sidebar-content {
        padding: 30px 0px;
      }
      .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
      }
      .close-btn i {
        font-size: 2rem;
        color: var(--white);
      }
      .close-btn i:hover {
        color: var(--title);
      }

      input {
        color: var(--white);
        border-bottom: 1px solid var(--white);
      }
    `,
  ];

  constructor() {
    super();
    this.isOpen = false;
    this.recipe = {
      title: "",
      ingredients: "",
    };
  }

  _changeState() {
    this.isOpen = !this.isOpen;
  }

  _addRecipe() {
    const detail = this.recipe;
    const event = new CustomEvent("addedRecipe", {
      detail,
      bubbles: true,
    });
    this.dispatchEvent(event);
    this._changeState();
  }

  _updateTitleValue(e) {
    this.recipe.title = e.srcElement.value;
  }
  _updateIngredientsValue(e) {
    this.recipe.ingredients = e.srcElement.value;
  }
  render() {
    return html`
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div class="center">
        <a
          class="btn-floating btn-small btn-large add-btn sidenav-trigger"
          @click=${this._changeState}
          data-position="bottom"
          data-delay="50"
          data-tooltip="I am tooltip"
        >
          <i class="material-icons">add</i>
        </a>
      </div>

      <div id="side-form" class="sidebar ${this.isOpen ? "open" : ""}">
        <div class="add-recipe container section">
          <button class="close-btn" @click=${this._changeState}>
            <i class="material-icons">close</i>
          </button>
          <h6 class="center-align p4">New Recipe</h6>
          <div>
            <input
              placeholder="e.g. Ninja soup"
              id="title"
              type="text"
              class="validate"
              value=${this.recipe.title}
              @change=${this._updateTitleValue}
            />
            <label for="title">Recipe Title</label>
          </div>
          <div>
            <input
              placeholder="e.g. Tofu, mushroom, garlic"
              id="ingredients"
              type="text"
              class="validate"
              value=${this.recipe.ingredients}
              @change=${this._updateIngredientsValue}
            />
            <label for="ingredients">Ingredients</label>
          </div>
          <div class="input-field center">
            <button class="btn-small" @click=${this._addRecipe}>Add</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("add-recipe", AddRecipe);

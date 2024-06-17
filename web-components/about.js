import { LitElement, html, css } from "lit";
import mainStyles from "/css/styles.css" with { type: "css" };
import materializeStyles from "/css/materialize.min.css" with { type: "css" };

export class About extends LitElement {

    static styles = [
        mainStyles,
        materializeStyles,
        css`
        /* about styles */
        .container {
            margin-top: 20px;
        }
        `,
    ];

    render() {
        return html`
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <div class="container grey-text">
            <h5 class="center">About Food Ninja</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus omnis, ea doloremque exercitationem id necessitatibus. Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus amet iure, non dignissimos illo.</p>
        </div>
        `;
    }
}

customElements.define("about-component", About);
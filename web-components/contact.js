import { LitElement, html, css } from "lit";
import mainStyles from "/css/styles.css" with { type: "css" };
import materializeStyles from "/css/materialize.min.css" with { type: "css" };

export class Contact extends LitElement {
    static styles = [
        mainStyles,
        materializeStyles,
        css`
        /* contact styles */
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
            <h5 class="center">Contact Us</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
            <div class="divider"></div>
            <h6>Find us at:</h6>
            <ul>
            <li>123 Spicy Noodle Road</li>
            <li>Manchester, UK</li>
            </ul>
        </div>
        `;
    }
}

customElements.define("contact-component", Contact);
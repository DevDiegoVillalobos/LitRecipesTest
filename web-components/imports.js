import { LitElement, html } from 'lit';

export class Imports extends LitElement {
    static properties = {
        title: { type: String }
    }

    constructor() {
        super();
        this.title = 'Recipes';
    }

    render() {
        html`
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Food Ninja</title>
            <!-- materialize icons, css & js -->
            <link type="text/css" href="./css/materialize.min.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link type="text/css" href="./css/styles.css" rel="stylesheet">
            <script type="text/javascript" src="./js/materialize.min.js"></script>
            <link rel="manifest" href="/manifest.json">
            <!-- ios support -->
            <link rel="apple-touch-icon" href="/img/icons/icon-96x96.png">
            <meta name="apple-moible-web-app-status-bar" content="#aa7700"></meta>
            <script type="module" src="./web-components/navbar.js"></script>
        `
    }
}

customElements.define('imports-component', Imports);
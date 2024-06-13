import { html, css, nothing, } from 'lit';
import { Navbar } from './navbar.js';
export class Sidebar extends Navbar {

    render() {
        return html`
             <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link type="text/css" href="/css/styles.css" rel="stylesheet">
        ${super.isOpen
                ? html`
            <ul id="side-menu" class="sidenav side-menu">

                <li><a class="subheader">FOODNINJA</a></li>
                <li><a href="/" class="waves-effect">Home</a></li>
                <li><a href="/pages/about.html" class="waves-effect">About</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/pages/contact.html" class="waves-effect">
                <i class="material-icons">mail_outline</i>Contact</a>
                </li>
            </ul>
            `
                : nothing}
        `;
    }
}

customElements.define('sidebar-component', Sidebar);
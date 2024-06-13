import {LitElement, html, css, } from 'lit';
export class Navbar extends LitElement{
    static properties = {
        isOpen: {type: Boolean}
    };

    static styles = css`
        :host{
            display: block;
            position: relative;
        }

        .sidebar{
            position: fixed;
            top: 0;
            z-index: 1000;
            right: -250px;
            width: 250px;
            height: 100%;
            background: #333;
            color: #fff;
            font-size: 10px;
            transition: right 0.3s;
            box-shadow: 5px 0 5px rgba(0,0,0,0.5);
        }

        .sidebar.open{
            right: 0;
        }

        .sidebar-content {
            padding: 16px;
        }

        .close-btn{
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border:none;
            cursor: pointer;
        }

       `;

    constructor(){
        super();
        this.isOpen = false;
    }

    changeState(){
        this.isOpen = !this.isOpen;
        console.log(this.isOpen);
    }

    render(){
        return html`
             <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link type="text/css" href="/css/styles.css" rel="stylesheet">

            <nav class="z-depth-0">
                <div class="nav-wrapper container">
                <a href="/">Food<span>Ninja</span></a>
                <span class="right grey-text text-darken-1">
                    <i class="material-icons sidenav-trigger" data-target="side-menu" @click=${this.changeState}>menu</i>
                </span>
                </div>
            </nav>

            <div class="sidebar side-menu ${this.isOpen ? 'open' : ''}" id="sidebar">
                <ul id="side-menu" class="side-menu">
                    <li><i class="material-icons sidenav-close">close</i></li>
                    <li><a class="subheader">FOODNINJA</a></li>
                    <li><a href="/" class="waves-effect">Home</a></li>
                    <li><a href="/pages/about.html" class="waves-effect">About</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/pages/contact.html" class="waves-effect">
                    <i class="material-icons">mail_outline</i>Contact</a>
                </li>
            </ul>
            </div>
            

        `;
    }
}

customElements.define('navbar-component', Navbar);
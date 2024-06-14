import { LitElement, html, css } from "lit";
import mainStyles from "/css/styles.css" with { type: "css" };
import materializeStyles from "/css/materialize.min.css" with { type: "css" };
export class Navbar extends LitElement {
  static properties = {
    isOpen: { type: Boolean },
  };

  static styles = [
    mainStyles,
    materializeStyles,
    css`
      /* navbar styles */
      nav {
        background: var(--primary);
        border-bottom: 10px solid var(--secondary);
      }
      nav a {
        text-transform: uppercase;
        color: var(--title);
      }
      nav a span {
        font-weight: bold;
      }
      nav .sidenav-trigger {
        margin: 0;
      }

      /* sidebar styles */
      .sidebar {
        position: fixed;
        top: 0;
        z-index: 1000;
        right: -250px;
        width: 250px;
        height: 100%;
        background: var(--tertiary);
        color: var(--white);
        font-size: 1.2rem;
        transition: right 0.3s;
      }
      .sidebar.open {
        right: 0;
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
      .menu-btn {
        background: none;
        border: none;
        cursor: pointer;
      }
      li {
        list-style: none;
        padding: 2px 10px;
        font-size: 1.2rem;
        cursor: pointer;
      }
      li a {
        font-size: 1.2rem;
        color: var(--white);
      }
      li a:hover {
        color: var(--title);
      }
      .divider {
        margin: 10px 0;
        border-bottom: 1px solid var(--white);
      }
      .icon-space-text {
        display: flex;
        align-items: center;
      }
      .icon-space-text i {
        margin-right: 10px;
      }
      .close-btn i {
        font-size: 2rem;
        color: var(--white);
      }
      .close-btn i:hover {
        color: var(--title);
      }
      .menu-btn i {
        font-size: 2rem;
        color: var(--title);
      }
      .menu-btn i:hover {
        color: var(--dark-grey);
      }
    `,
  ];

  constructor() {
    super();
    this.isOpen = false;
  }

  _changeState() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return html`
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <nav class="z-depth-0">
        <div class="nav-wrapper container">
          <a href="/">Food<span>Ninja</span></a>
          <button class="right menu-btn" @click=${this._changeState}>
            <i class="material-icons">menu</i>
          </button>
        </div>
      </nav>

      <div class="sidebar ${this.isOpen ? "open" : ""}" id="sidebar">
        <button class="close-btn" @click=${this._changeState}>
          <i class="material-icons">close</i>
        </button>
        <ul id="side-menu" class="sidebar-content container">
          <li><a>FOODNINJA</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><div class="divider"></div></li>
          <li class="right">
            <a href="/pages/contact.html" class="icon-space-text">
              <i class="material-icons">mail_outline</i>Contact</a
            >
          </li>
        </ul>
      </div>
    `;
  }
}
customElements.define("navbar-component", Navbar);

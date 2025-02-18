import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";


export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "The Goat Lebron James";
    this.image = 'https://people.com/thmb/zWm7qonVB_6R3JTGC583rNoiQWY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x209:721x211):format(webp)/lebron-james-bbd6f753bf124dfcb4d7e6b3284970f3.jpg';
    this.desc = 'Default Description';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .btn{
  display: none;
  background-color: #4A4A4A;
  color: white;
  font-size: 20px;
  border-radius: 15%;
  padding: 8px 8px 8px 8px;
  margin: 4px 4px 4px 4px;
}
  .card-item{
  display: inline-flex;
  background-color:#FFFF00;
  max-width: 400px;
  padding: 8px;
  margin: 8px;
  border: 8px solid black;
  box-sizing: border-box;
  flex-direction: column;
  align-items: left;
}

:host([fancy]) {
display: block;
  background-color: pink;
  border: 16px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}

.card-image{
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.card-desc{
  font-size: 16px;
  max-height: 100px;
  padding: 8px;
  border-radius: 4px;
}

.change-color{
  background-color: #2E5A88;
}

.card-title{
  font-size: 20px;
  margin: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

    `;
  }
  
  
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
        <div class="card-item">
        <meme-maker alt="can't visualize the best" image-url=${this.image} top-text="The BIG" bottom-text="LeBron"></meme-maker>
          <h2 class="card-title">${this.title}</h2>
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div>
    <slot name="desc">${this.desc}</slot>
  </div>
</details>
        </div>
     
      `;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      link: { type: String},
      desc: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

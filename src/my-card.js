import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "The Goat Lebron James";
    this.image = 'https://people.com/thmb/zWm7qonVB_6R3JTGC583rNoiQWY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x209:721x211):format(webp)/lebron-james-bbd6f753bf124dfcb4d7e6b3284970f3.jpg';
    this.desc = 'Default Description';
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
  display: inine flex;
  background-color:#FFFF00;
  max-width: 400px;
  padding: 8px;
  margin: 8px;
  border: 8px solid black;
}

.card-image{
  max-width: 300px;
  max-height: 250px;
}

.change-color{
  background-color: #2E5A88;
}

.card-title{
  font-size: 26px;
}

    `;
  }
  

  render() {
    return html`
        <div class="card-item">
        <img src="${this.image}" alt="${this.title}" class="card-image" />
        <div>
          <h2 class="card-title">${this.title}</h2>
          <p>${this.desc}</p>
        </div>
      </div>
      `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String},
      desc: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

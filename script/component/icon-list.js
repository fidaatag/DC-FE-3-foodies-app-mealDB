import './icon-item.js';

class IconList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set categories(categories) {
        this._categories = categories;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ``;

        this._categories.forEach(category => {
            const IconItemEl = document.createElement('icon-item');

            IconItemEl.category = category;
            this.shadowDOM.appendChild(IconItemEl);            
        });

    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
          <style>
            .placeholder {
              font-weight: lighter;
              color: rgba(0, 0, 0, 0.5);
            }
          </style>
        `;
    
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
      }

}

customElements.define('icon-list', IconList);
class IconItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                text-decoration: none;
            }
            :root {
                --bg-color: #222327;
                --text-color: #fff;
                --main-color: #29fd53;
            }
            .col {
                padding: 16px;
                border-radius: 10%;
            }
            .col:hover {
                cursor: pointer;
                background: var(--text-color);
                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px
            }
            .col img {
                display: block;
                width: 100%;
                max-width: 100%;
                border-radius: 50%;
            }
        </style>

        <div class="col">
            <img src="${this._category.strCategoryThumb}">
        </div>
        
        `;
    }
}

customElements.define('icon-item', IconItem);
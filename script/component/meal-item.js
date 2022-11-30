class MealItem extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =
        `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :root {
                --bg-color: #222327;
                --text-color: #fff;
                --main-color: #29fd53;
            }
            .col { 
                padding: 16px;
                text-decoration: none;
                border-radius: 10%;
            }
            .col:hover {
                cursor: pointer;
                background: var(--text-color);
                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            }
            .col img {
                display: block;
                width: 100%;
                max-width: 100%;
                border-top-left-radius: 10%;
                border-top-right-radius: 10%;
            }
            .col p {
                background: var(--bg-color);
                color: var(--text-color);
                padding: 1vh;
                font-weight: 600;
                text-align: center;
                font-size: large;
                border-bottom-left-radius: 40%;
                border-bottom-right-radius: 40%;
            }
            
        </style>

        <div class="col">
            <img src="${this._meal.strMealThumb}">
            <p>${this._meal.strMeal}</p>
        </div>
        `;
    }
}

customElements.define('meal-item', MealItem);
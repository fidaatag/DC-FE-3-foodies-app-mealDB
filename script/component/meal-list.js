import './meal-item.js';

class MealList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ``;

        this._meals.forEach(meal => {
            const mealElement = document.createElement('meal-item');

            mealElement.meal = meal;
            this.shadowDOM.appendChild(mealElement);            
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

customElements.define('meal-list', MealList);
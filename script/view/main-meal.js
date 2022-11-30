import '../component/meal-list.js'
import '../component/search-meal.js'
import DataSource from '../data/data-source.js';

const mainMeal = () => {
    const searchEl = document.querySelector('search-meal');
    const mealListEl = document.querySelector('meal-list');

    const BtnSearchClick = () => {
        searchMeal(searchEl.value)
    }

    const searchMeal = async (keyword) => {
        try {
            const result = await DataSource.searchMeal(keyword);
            renderResult(result);
        } catch (message){
            fallbackResult(message);
        }
    };

    searchMeal('fish');

    const renderResult = result => {
        mealListEl.meals = result;
    }

    const fallbackResult = message => {
        mealListEl.renderError(message);
    }
    
    searchEl.clickEvent = BtnSearchClick;
};

export default mainMeal;
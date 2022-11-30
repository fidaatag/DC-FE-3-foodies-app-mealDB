import '../component/icon-list.js'
import DataSource from '../data/data-source.js';

const mainIcon = () => {
    const load = document.querySelector('body');
    const iconListEl = document.querySelector('icon-list');

    const loadIcon = async () => {
        try {
            const result = await DataSource.iconCategory();
            renderResult(result);

        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = result => {
        iconListEl.categories = result;
    }

    const fallbackResult = message => {
        iconListEl.renderResult(message);
    }

    load.onload = loadIcon;

    
}

export default mainIcon;
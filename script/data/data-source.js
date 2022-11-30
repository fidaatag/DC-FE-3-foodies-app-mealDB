class DataSource {
    static searchMeal(keyword) {
        return fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static iconCategory() {
        return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                // console.log(category)         // json fromat
                return response.json();          // converted to obeject
            })
            .then(responseJson => {
                if(responseJson){
                    return Promise.resolve(responseJson.categories)
                }else {
                    return Promise.reject('icon is not fond');
                }
            })
    }
}

export default DataSource;
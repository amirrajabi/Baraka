/**
 * Created by Amir on 23/11/16.
 */
var api = {
    getHome(){
        var url = `http://www.hoor.com.au/Baraka/home.json`;
        return fetch(url).then((res) => res.json())
    },
    getCategories(){
        var url = `http://www.hoor.com.au/Baraka/categories.json`;
        return fetch(url).then((res) => res.json());
    },
    getQuotes(){
        var url = `http://www.hoor.com.au/Baraka/quotes.json`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;

/**
 * Created by Amir on 23/11/16.
 */
var api = {
    getHome(){
        var url = `http://www.hoor.com.au/baraka/home.json`;
        return fetch(url).then((res) => res.json())
    },
    getCategories(){
        var url = `http://www.hoor.com.au/baraka/categories.json`;
        return fetch(url).then((res) => res.json());
    },
    getQuotes(){
        var url = `http://www.hoor.com.au/baraka/quotes.json`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;

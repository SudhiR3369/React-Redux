import { ADD_ARTICLE, USER_LIST } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

export function getData() {
    return function (dispatch) {
        return fetch("https://www.neptics.org.np/api/v1/user")//jsonplaceholder.typicode.com/posts
            .then(response => response.json())
            .then(json => {                       
                dispatch({ type: USER_LIST, payload: json });
            });
    };
}
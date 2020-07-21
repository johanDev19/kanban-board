import { API_URL } from "./../utils/constants";

export function getCards() {
    return fetch(API_URL)
    .then((res) => res.json())
}
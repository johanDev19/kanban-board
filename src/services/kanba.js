import { API_URL } from "./../utils/constants";

export function getBoard() {
  return fetch(API_URL).then((res) => res.json());
}

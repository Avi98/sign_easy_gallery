import { Base_URL, Token } from "../config";

export function searchPhotos(searchText, page=1){
  return fetch(`${Base_URL}/search/photos?page=${page}&query=${searchText}`, {
    headers: {
      Authorization: `Client-ID ${Token}`,
    },
  }).then((res) => res.json());
}
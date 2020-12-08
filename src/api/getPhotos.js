import { Base_URL, Token } from "../config";

export function getPhotos({count=30, start=1}={}){
  return fetch(`${Base_URL}/photos?&page=${start}`, {
    headers: {
      Authorization: `Client-ID ${Token}`,
      'X-Total': count
    },
  }).then((res) => res.json());
}
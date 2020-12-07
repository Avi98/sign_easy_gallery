import { Base_URL, Token } from "../config";

export function getPhotos({count=30, start=1}={}){
  return fetch(`https://api.unsplash.com/photos?count=${count}&start=${start}`, {
    headers: {
      Authorization: `Client-ID ${Token}`,
    },
  }).then((res) => res.json());
}
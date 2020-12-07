import React from 'react';
import { LikeDislikeButtons } from './';
import { ZoomImages } from './zoomImage';

export const Images = ({images, like, disLike, onClickLike, onClickDislike, index }) =>{

    return (
      <>
        <figure
          className={`gallery__item gallery__item--${index}`}
          key={images.id}
        >
          <ZoomImages>
            <img
              className="gallery__img"
              key={images.id}
              src={images.urls.thumb}
              alt={images.user.name}
            />
          </ZoomImages>
          <LikeDislikeButtons
            liked={
              like.find((likeObj) => likeObj.id === images.id) ? true : false
            }
            disliked={
              disLike.find((disLikeObj) => disLikeObj.id === images.id)
                ? true
                : false
            }
            onClickDislike={() =>
              onClickDislike({
                id: images.id,
                name: images.user.name,
              })
            }
            onClickLike={() =>
              onClickLike({
                id: images.id,
                name: images.user.name,
              })
            }
          />
        </figure>
      </>
    );
}
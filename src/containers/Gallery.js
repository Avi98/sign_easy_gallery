import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPhotos } from '../api/getPhotos';
import { searchPhotos } from '../api/searchPhotos';
import { InputElement, LikeDislikeButtons } from '../components';
import { useAsync } from '../useFetch';


const Section = styled.section`
  > input {
    margin: 20px 0;
    min-height: 25px;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;
    > figure {
<<<<<<< HEAD
=======
      position:relative;
>>>>>>> a46e0743ffad9b764bb5ac45cc367d108a0da128
      cursor: pointer;
      grid-column: span 4;
      grid-row: span 4;
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
<<<<<<< HEAD
=======

const isClickedInitialState = {
  id:'',
  name:'',
  isClicked:false
}
>>>>>>> a46e0743ffad9b764bb5ac45cc367d108a0da128
export const Gallery = () => {
  const [searchValue, setSearchValue] = useState('')
  const [photosParam, setPhotosParam] = useState({
    count:null,
    start:null
  })
<<<<<<< HEAD
=======
  const [like, setLiked] = useState(isClickedInitialState)
  const [disLike, setDisLike] = useState(isClickedInitialState)

>>>>>>> a46e0743ffad9b764bb5ac45cc367d108a0da128
  const {execute: fetchPhotos, status:statusPhotos, value:photos, error: photoError} = useAsync(getPhotos)
  const {execute: searchPhotos, status:statusSearch, value: searchResponse, error: photosError} = searchValue && useAsync(searchPhotos)

  useEffect(()=>{
    if(searchValue){
      execute("office");
    }
  },[searchValue])

<<<<<<< HEAD
  // useEffect(() => {
  //   execute()
  // }, [])
=======
  const onClickDislike = ({id, name})=>{
    debugger
    if(disLike.id !== id && !like.id){
      setDisLike({id, name, isClicked:true})
    }else if(like.id){
      setLiked(isClickedInitialState)
    }
    else{
      setDisLike(isClickedInitialState)
    }
  } 
  const onClickLike = ({id, name})=>{
    if(like.id !== id ){
      setLiked({id, name, isClicked:true})
    }else if(disLike.id){
      setDisLike(isClickedInitialState)
    }
    else{
      setLiked(isClickedInitialState)
    }
  } 
  // useEffect(() => {
  //   execute()
  // }, [])

>>>>>>> a46e0743ffad9b764bb5ac45cc367d108a0da128
  return (
    <Section>
      {/* <h3>Gallery</h3> */}
      <InputElement placeholder="Search Images" />
      <div className="gallery">
        {statusPhotos === "success" &&
          photos.map((images, i) => (
<<<<<<< HEAD
            <figure
              className={`gallery__item gallery__item--${i*i}`}
              key={images.id}

            >
              <img
                className="gallery__img"
                key={images.id}
                src={images.urls.thumb}
                alt={images.user.name}
              />
            </figure>
=======
            <>
              <figure
                className={`gallery__item gallery__item--${i * i}`}
                key={images.id}
              >
                <img
                  className="gallery__img"
                  key={images.id}
                  src={images.urls.thumb}
                  alt={images.user.name}
                />
                <LikeDislikeButtons
                  liked={like.id === images.id}
                  disliked={disLike.id === images.id}
                  onClickDislike={()=>onClickDislike({
                    id: images.id,
                    name: images.user.name,
                  })}
                  onClickLike={()=>onClickLike({
                    id: images.id,
                    name: images.user.name,
                  })}
                />
              </figure>
            </>
>>>>>>> a46e0743ffad9b764bb5ac45cc367d108a0da128
          ))}
      </div>
    </Section>
  );
};
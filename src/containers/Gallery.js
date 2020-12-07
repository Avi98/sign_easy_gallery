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
      position:relative;
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

const isClickedInitialState = [
  {
    id: "",
    name: "",
    isClicked: false,
  },
];
export const Gallery = () => {
  const [searchValue, setSearchValue] = useState('')
  const [photosParam, setPhotosParam] = useState({
    count:null,
    start:null
  })
  const [like, setLiked] = useState(isClickedInitialState)
  const [disLike, setDisLike] = useState(isClickedInitialState)

  const {execute: fetchPhotos, status:statusPhotos, value:photos, error: photoError} = useAsync(getPhotos)
  const {execute: searchPhotos, status:statusSearch, value: searchResponse, error: photosError} = searchValue && useAsync(searchPhotos)

  useEffect(()=>{
    if(searchValue){
      execute("office");
    }
  },[searchValue])

  const onClickDislike = ({id, name})=>{
    if(like.find(obj=> obj.id === id)) return 
    
    if(!disLike.find((disLikeObj) => disLikeObj.id === id)){
      setDisLike(state => [...state, {id, name, isClicked:true}])
    }
    else{
      setDisLike(state=> state.filter((likeObj)=> likeObj.id !== id))
    }
  }
  
  const onClickLike = ({id, name})=>{
    if(disLike.find(obj=> obj.id === id)) return 


    if (!like.find((likeObj) => likeObj.id === id)) {
      setLiked(state=> [...state, { id, name, isClicked: true }]);
    } else {
      setLiked((state) =>  state.filter((likeObj) => likeObj.id !== id));
    }
  }
  // useEffect(() => {
  //   execute()
  // }, [])

  return (
    <Section>
      {/* <h3>Gallery</h3> */}
      <InputElement placeholder="Search Images" />
      <div className="gallery">
        {statusPhotos === "success" &&
          photos.map((images, i) => (
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
                  liked={like.find(likeObj=> likeObj.id === images.id) ? true : false}
                  disliked={disLike.find(disLikeObj=> disLikeObj.id === images.id) ? true : false}
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
          ))}
      </div>
    </Section>
  );
};
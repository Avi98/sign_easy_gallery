import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPhotos } from '../api/getPhotos';
import { searchPhotos } from '../api/searchPhotos';
import { Images, InputElement, LikeDislikeButtons } from '../components';
import { useDebounce } from '../useDebounce';
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
      #zoom-in{
        font-size: 25px;
        position: absolute;
        top: 5px;
        left: 5px;
        background-color: #fff;
      }
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
  // const [photosParam, setPhotosParam] = useState({
  //   count:null,
  //   start:null
  // })
  const [like, setLiked] = useState(isClickedInitialState);
  const [disLike, setDisLike] = useState(isClickedInitialState);
  const [images, setImages] = useState([]);

  const { status: statusPhotos, value: photos } = useAsync(getPhotos);
  const {
    execute: searchImages,
    value: searchResults,
    status: searchStatus,
  } = useAsync(searchPhotos);

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  useEffect(() => {
    if (searchResults?.results) {
      return setImages(searchResults.results);
    }

    setImages(photos);
  }, [photos?.length, searchResults?.results.length]);

  useEffect(() => {
    if(debouncedSearchTerm){
      searchImages(debouncedSearchTerm); 
    }
  }, [debouncedSearchTerm])

  const onClickDislike = ({ id, name }) => {
    if (like.find((obj) => obj.id === id)) return;

    if (!disLike.find((disLikeObj) => disLikeObj.id === id)) {
      setDisLike((state) => [...state, { id, name, isClicked: true }]);
    } else {
      setDisLike((state) => state.filter((likeObj) => likeObj.id !== id));
    }
  };

  const onClickLike = ({ id, name }) => {
    if (disLike.find((obj) => obj.id === id)) return;

    if (!like.find((likeObj) => likeObj.id === id)) {
      setLiked((state) => [...state, { id, name, isClicked: true }]);
    } else {
      setLiked((state) => state.filter((likeObj) => likeObj.id !== id));
    }
  };

  const onChangeSearch = (e) => {
    // if (!e.target.value) return; 
    // searchImages(e.target.value);

    setSearchValue(e.target.value)
  };

  const ImagesComponent = () => (
    <div className="gallery">
      {statusPhotos === "success" &&
        images.map((images, index) => (
          <Images
            key={images.id}
            images={images}
            index={index}
            like={like}
            disLike={disLike}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
          />
        ))}
    </div>
  );

  return (
    <Section>
      <InputElement placeholder="Search Images" onChange={onChangeSearch} />

      {[statusPhotos, searchStatus].includes("pending") ? (
        <div>loading....</div>
      ) : (
        <ImagesComponent />
      )}
    </Section>
  );
};
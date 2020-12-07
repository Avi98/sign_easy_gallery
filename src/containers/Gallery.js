import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPhotos } from '../api/getPhotos';
import { searchPhotos } from '../api/searchPhotos';
import { InputElement } from '../components';
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
export const Gallery = () => {
  const [searchValue, setSearchValue] = useState('')
  const [photosParam, setPhotosParam] = useState({
    count:null,
    start:null
  })
  const {execute: fetchPhotos, status:statusPhotos, value:photos, error: photoError} = useAsync(getPhotos)
  const {execute: searchPhotos, status:statusSearch, value: searchResponse, error: photosError} = searchValue && useAsync(searchPhotos)

  useEffect(()=>{
    if(searchValue){
      execute("office");
    }
  },[searchValue])

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
          ))}
      </div>
    </Section>
  );
};
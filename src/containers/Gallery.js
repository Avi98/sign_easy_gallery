import React, { useEffect } from 'react';
import styled from 'styled-components';
import { searchPhotos } from '../api/searchPhotos';
import { InputElement } from '../components';
import { useAsync } from '../useFetch';

const Section = styled.section`
    >input{
        margin: 20px 0;
        min-height: 50px; 
    }
`
export const Gallery = () => {
  const {execute, status, value, error} = useAsync(searchPhotos)

  useEffect(()=>{
    execute('office')
  },[])
  return (
    <Section>
      {/* <h3>Gallery</h3> */}
      <InputElement placeholder="Search Images" />
    </Section>
  );
};
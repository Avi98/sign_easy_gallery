import React from 'react';
import { ImFilesEmpty } from 'react-icons/im';
import { FcStackOfPhotos, FcFolder } from 'react-icons/fc';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    margin: 20px 0px;
    align-items:flex-start;
    width:100%;
    .flex-row{
      display:flex;
      justify-content:space-between;
      align-items:center;
      >p{
        margin-left: 5px;
      }
    }

`

const menuItems = [
  {
  icon: (...props) => <ImFilesEmpty {...props} />,
  title: 'files'
},
  {
  icon: (...props) => <FcStackOfPhotos {...props} />,
  title: 'Photo Galleries'
},
  {
  icon: (...props) => <FcFolder {...props}/>,
  title: 'Folders'
},
]
export const FilterSection = () =>{
    return (
      <Container selectedClassName={'Photo Galleries'}>
        {menuItems.map((comp) => (
          <div key={comp.title} className={`flex-row ${comp.title}`}>
            {comp.icon()}
            <p>{comp.title}</p>
          </div>
        ))}
      </Container>
    );
}
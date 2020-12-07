import React from "react";
import {AiOutlineDislike} from 'react-icons/ai'
import {AiOutlineLike} from 'react-icons/ai'
import styled from "styled-components";


const FlexRow = styled.div`
    display:flex;
    justify-content: space-between;
    max-width: 15%;
    font-size: 30px;
    position:absolute;
    bottom: 0;
    right:0;
    background-color:#fff;

`
export const LikeDislikeButtons = ({onClickLike, onClickDislike, liked, disliked}) => {
  return (
    <FlexRow>
      <AiOutlineLike onClick={onClickLike} color={liked ? 'red' : 'black'}/>
      <AiOutlineDislike onClick={onClickDislike} color={disliked ? 'red' : 'black'} />
    </FlexRow>
  );
};

import React from "react";
import styled from "styled-components";
import { InputElement, FilterSection } from "../components";
import { Divider } from "./styles";

const NavSec = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;

    .filter-field{
        >input{
            margin: 20px 0;
        }
    }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const NavigationSection = () => {
  return (
    <NavSec>
      <div className='filter-field'>
        <InputElement placeholder="All" disable={true}/>
        <Divider />
        
        <FilterSection />
      </div>
    </NavSec>
  );
};

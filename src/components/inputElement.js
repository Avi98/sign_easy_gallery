import React from 'react';
import styled from 'styled-components';

const OutlinedInput = styled.input`
    position:relative;
    display:inline;
    color: var(--placeholder);
    border: 1px solid var(--grey);
    border-radius: 2px;

`
export const InputElement = ({ ...rest}) =>
      <OutlinedInput {...rest} />
     
    



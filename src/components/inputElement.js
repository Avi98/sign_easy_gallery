import React from 'react';
import styled from 'styled-components';

const OutlinedInput = styled.label`
    position:relative;
    display:inline;
    color: var(--placeholder);
    
    }
`
export const InputElement = ({ ...rest}) =>
      <OutlinedInput>
        <input {...rest} />
       
      </OutlinedInput>
    



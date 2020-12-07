import { useEffect, useRef, useState, cloneElement} from 'react';
import styled from 'styled-components';

import {AiOutlineZoomOut} from 'react-icons/ai'
import {AiOutlineZoomIn} from 'react-icons/ai'

const OverlayBg = styled.div`
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display:grid;
    place-items:center;
`
export const ZoomImages = ({children}) =>{
    const [height, setHight] = useState(null)
    const [width, setWidth] = useState(null)
    const [style, setStyle] = useState({})

    const imageRef = useRef(null)
    const initialSize = useRef({height: null, width:null})

    useEffect(()=>{
        if(imageRef.current){
          initialSize.current.height = imageRef.current.clientHeight;
          initialSize.current.width = imageRef.current.clientWidth;
        }
        
    },[])

    const handleZoomOut = () =>{
        setHight(initialSize.current.height)
        setWidth(initialSize.current.width)
        setStyle({})
    }
    const handleZoomIn = () =>{
        setHight(initialSize.current.height + 250) 
        setWidth(initialSize.current.width + 250)
        setStyle({
            position:'relative',
            zIndex: 1
        })
    }

    const cloneChild = cloneElement(children, { ref: imageRef,  style:{height, width, ...style }})

return Object.keys(style).length > 0 ? (
  <OverlayBg onClick={handleZoomOut}>
      {/* <AiOutlineZoomOut id='zoom-in'  onClick={handleZoomOut}/> */}
      {cloneChild}
  </OverlayBg>
) : (
  <>
    <div className="icon" id="zoom-in">
      <AiOutlineZoomIn onClick={handleZoomIn} />
      {/* <AiOutlineZoomOut /> */}
    </div>
    {cloneChild}
  </>
);
}
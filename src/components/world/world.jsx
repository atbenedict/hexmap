import React from 'react'
import worldinit from './init.js'
import Location from "../location/location.jsx"
import styled from 'styled-components'
import uuid from 'react-uuid'

const StyledWorld = styled.div`
line-height: 0;
width: 100%;
        margin-top: -${props=>props.hexWidth/3.78}px;
    :nth-child(even) {


        margin-left: ${props=>props.hexWidth/1.81}px;

}
:nth-child(odd) {
        width: 100%;
        
        /* margin-top: -6px; */

}


`

export const World = ({width}) => {
  //want to create grid based upon dynamic number, not fixed like I'm using here
    const hexAcross = 16;
    const hexWidth = width < (600/.8)?Math.floor((0.8*width)/hexAcross):Math.floor(600/hexAcross);
    console.log(hexWidth)
    return(
        
    worldinit.map((item) => {
        
            return (
                <StyledWorld key={uuid()} hexWidth={hexWidth}>
                
              <div className="row">
               {
                item.map((subitem) => {
                    
                  return (
                     <Location loc={subitem} key={uuid()} hexWidth={hexWidth}/>
                  )
                })
               }
              </div>
              </StyledWorld>
            )
          })
   )}

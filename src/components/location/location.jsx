import React from 'react'
import Hex from '../../images/hex.js'
import styled from 'styled-components'

const StyledLocation = styled.div`




`

const Location = ({loc, hexWidth}) => {
    return (
        <StyledLocation>
        <Hex hexWidth={hexWidth}/>
            {/* {loc} */}
        </StyledLocation>
    )
}

export default Location

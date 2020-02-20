import React from 'react'
import Hex from '../../images/hex.js'


const Location = ({loc, hexWidth}) => {
    return (
        <div>
        <Hex hexWidth={hexWidth}/>
            {/* {loc} */}
        </div>
    )
}

export default Location

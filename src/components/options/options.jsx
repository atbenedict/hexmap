import React, {useContext} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {store} from '../../utils/store.js';
import styled from 'styled-components';

const StyledOptions= styled.div`
margin-top: 30px;
display: flex;




`

const Options = () => {
    const globalState = useContext(store)
    const {dispatch} = globalState
    return (
        <StyledOptions>
            <button onClick={() =>
    dispatch({ type: 'TOGGLE_PLACING_INITIAL' })}>{globalState.state.placing_initial}
  </button>
        </StyledOptions>
    )
}

export default Options

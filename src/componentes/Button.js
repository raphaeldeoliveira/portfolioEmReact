import React from "react"
import { StyledButton } from './styles'
import PropTypes from "prop-types"

export default function Button(props) {
    
    return (
        <StyledButton
            onClick={() => props.scrollTo(props.scrollName)}
        >
            {props.buttonText}
        </StyledButton>
    )
}

Button.propTypes = {
    scrollTo: PropTypes.func.isRequired,
    scrollName: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}
import React from "react"
import { StyledButton } from './styles'

export default function Button(props) {
    
    
    return (
        <StyledButton
            onClick={() => props.scrollTo(props.scrollName)}
        >
            {props.buttonText}
        </StyledButton>
    )
    
    
}
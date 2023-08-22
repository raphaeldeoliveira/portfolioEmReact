import React from "react"
import { StyledCardLeetCode } from "./styles"
import PropTypes from "prop-types"

export default function CardLeetCode(props) {

    // colocar href no 'StyledCardLeetCode'

    return (
        <StyledCardLeetCode href={props.link} target="_blank">
            <div className="seccao-textos">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <img src={props.image}/>
        </StyledCardLeetCode>
    )
}

CardLeetCode.PropTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}
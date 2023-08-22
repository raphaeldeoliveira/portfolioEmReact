import React from "react"
import { ButtonSocialMidia } from "./styles"
import PropTypes from "prop-types"

export default function SocialMidiaButton(props) {

    return (
        <ButtonSocialMidia href={props.link} target="_blank">
            <img src={props.image}/>
        </ButtonSocialMidia>
    )
}

SocialMidiaButton.PropTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}
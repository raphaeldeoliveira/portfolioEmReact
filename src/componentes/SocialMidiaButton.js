import React from "react"
import { ButtonSocialMidia } from "./styles"

export default function SocialMidiaButton(props) {

    return (
        <ButtonSocialMidia href={props.link} target="_blank">
            <img src={props.image}/>
        </ButtonSocialMidia>
    )
}
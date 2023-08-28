import React from "react"

import angelOne from "../images/project-images/angel1.png"
import angelTwo from "../images/project-images/angel2.png"
import angelThree from "../images/project-images/angel3.png"
import angelFour from "../images/project-images/angel4.png"
import angelFive from "../images/project-images/angel5.png"

import fifaOne from "../images/project-images/fifa1.png"
import fifaTwo from "../images/project-images/fifa2.png"
import fifaThree from "../images/project-images/fifa3.png"
import fifaFour from "../images/project-images/fifa4.png"
import fifaFive from "../images/project-images/fifa5.png"
import fifaSix from "../images/project-images/fifa6.png"

import extensaoOne from "../images/project-images/projetoExtensao1.png"
import extensaoTwo from "../images/project-images/projetoExtensao2.png"
import extensaoThree from "../images/project-images/projetoExtensao3.png"
import extensaoFour from "../images/project-images/projetoExtensao4.png"

import { StyledCarrouselImages } from "./styles"
import PropTypes from "prop-types"

export default function CarrouselImages(props) {

    React.useEffect(() => {
        currentWidth()
    }, [window.innerWidth]);

    function currentWidth() {
        return `translateX(${props.deslocamento}vw)`
    }

    function images() {
        if (props.numDots === 6) {
            return (
                <div className="carosel-images" 
                style={{
                    transform: `translateX(${props.deslocamento}vw)`
                }}>
                    <img src={fifaOne} />
                    <img src={fifaTwo} />
                    <img src={fifaThree} />
                    <img src={fifaFour} />
                    <img src={fifaFive} />
                    <img src={fifaSix} />
                </div>
            )
        }
        else if (props.numDots === 5) {
            return (
                <div className="carosel-images" 
                style={{
                    transform: {currentWidth}
                }}>
                    <img src={angelOne} />
                    <img src={angelTwo} />
                    <img src={angelThree} />
                    <img src={angelFour} />
                    <img src={angelFive} />
                </div>
            )
        }
        else {
            return (
                <div className="carosel-images" 
                style={{
                    transform: `translateX(${props.deslocamento}vw)`
                }}>
                    <img src={extensaoOne} />
                    <img src={extensaoTwo} />
                    <img src={extensaoThree} />
                    <img src={extensaoFour} />
                </div>
            )
        }
    }

    return (
        <StyledCarrouselImages>
            {images()}
        </StyledCarrouselImages>
    )
}

CarrouselImages.propTypes = {
    numDots: PropTypes.number.isRequired,
    deslocamento: PropTypes.number.isRequired,
}
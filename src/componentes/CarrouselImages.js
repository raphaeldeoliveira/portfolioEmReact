import React from "react"

// imagens DESKTOP
import angelOne from "../images/project-images/desktop/angel1.png"
import angelTwo from "../images/project-images/desktop/angel2.png"
import angelThree from "../images/project-images/desktop/angel3.png"
import angelFour from "../images/project-images/desktop/angel4.png"
import angelFive from "../images/project-images/desktop/angel5.png"

import fifaOne from "../images/project-images/desktop/fifa1.png"
import fifaTwo from "../images/project-images/desktop/fifa2.png"
import fifaThree from "../images/project-images/desktop/fifa3.png"
import fifaFour from "../images/project-images/desktop/fifa4.png"
import fifaFive from "../images/project-images/desktop/fifa5.png"
import fifaSix from "../images/project-images/desktop/fifa6.png"

import extensaoOne from "../images/project-images/desktop/projetoExtensao1.png"
import extensaoTwo from "../images/project-images/desktop/projetoExtensao2.png"
import extensaoThree from "../images/project-images/desktop/projetoExtensao3.png"
import extensaoFour from "../images/project-images/desktop/projetoExtensao4.png"

// imagens MOBILE
import mobileAngelOne from "../images/project-images/mobile/angel1.png"
import mobileAngelTwo from "../images/project-images/mobile/angel2.png"
import mobileAngelThree from "../images/project-images/mobile/angel3.png"
import mobileAngelFour from "../images/project-images/mobile/angel4.png"
import mobileAngelFive from "../images/project-images/mobile/angel5.png"

import mobileFifaOne from "../images/project-images/mobile/fifa1.png"
import mobileFifaTwo from "../images/project-images/mobile/fifa2.png"
import mobileFifaThree from "../images/project-images/mobile/fifa3.png"
import mobileFifaFour from "../images/project-images/mobile/fifa4.png"
import mobileFifaFive from "../images/project-images/mobile/fifa5.png"
import mobileFifaSix from "../images/project-images/mobile/fifa6.png"

import mobileExtensaoOne from "../images/project-images/mobile/projetoExtensao1.png"
import mobileExtensaoTwo from "../images/project-images/mobile/projetoExtensao2.png"
import mobileExtensaoThree from "../images/project-images/mobile/projetoExtensao3.png"
import mobileExtensaoFour from "../images/project-images/mobile/projetoExtensao4.png"

import { StyledCarrouselImages } from "./styles"
import PropTypes from "prop-types"

export default function CarrouselImages(props) {

    const [mobileActive, setMobileActive] = React.useState(false)

    React.useEffect(() => {
        currentWidth()
        window.innerWidth < 680 ? setMobileActive(true) : setMobileActive(false)
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
                    <img src={mobileActive ? mobileFifaOne : fifaOne} />
                    <img src={mobileActive ? mobileFifaTwo : fifaTwo} />
                    <img src={mobileActive ? mobileFifaThree : fifaThree} />
                    <img src={mobileActive ? mobileFifaFour : fifaFour} />
                    <img src={mobileActive ? mobileFifaFive : fifaFive} />
                    <img src={mobileActive ? mobileFifaSix : fifaSix} />
                </div>
            )
        }
        else if (props.numDots === 5) {
            return (
                <div className="carosel-images" 
                style={{
                    //transform: {currentWidth}
                    transform: `translateX(${props.deslocamento}vw)`
                }}>
                    <img src={mobileActive ? mobileAngelOne : angelOne} />
                    <img src={mobileActive ? mobileAngelTwo : angelTwo} />
                    <img src={mobileActive ? mobileAngelThree : angelThree} />
                    <img src={mobileActive ? mobileAngelFour : angelFour} />
                    <img src={mobileActive ? mobileAngelFive : angelFive} />
                </div>
            )
        }
        else {
            return (
                <div className="carosel-images" 
                style={{
                    transform: `translateX(${props.deslocamento}vw)`
                }}>
                    <img src={mobileActive ? mobileExtensaoOne : extensaoOne} />
                    <img src={mobileActive ? mobileExtensaoTwo : extensaoTwo} />
                    <img src={mobileActive ? mobileExtensaoThree : extensaoThree} />
                    <img src={mobileActive ? mobileExtensaoFour : extensaoFour} />
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
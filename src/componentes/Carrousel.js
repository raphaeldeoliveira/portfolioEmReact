import React from "react"
import { StyledCarrousel } from "./styles"
import PropTypes from "prop-types"

export default function Carrousel(props) {

    const [activeImage, setActiveImage] = React.useState(0)

    function changeRight() {
        (activeImage === 2) ? setActiveImage(0) : setActiveImage(activeImage + 1);
    }

    function changeLeft() {
        (activeImage === 0) ? setActiveImage(2) : setActiveImage(activeImage - 1);
    }

    return (
        <StyledCarrousel>
            <img 
                className={(activeImage === 0) ? "imagem-ativa" : ""} 
                src={props.primeiraImagem}
            />
            <img 
                className={(activeImage === 1) ? "imagem-ativa" : ""}
                src={props.segundaImagem}
            />
            <img 
                className={(activeImage === 2) ? "imagem-ativa" : ""}
                src={props.terceiraImagem} 
            />
            <span onClick={changeLeft} className="flecha-esquerda">❮</span>
            <span onClick={changeRight} className="flecha-direita">❯</span>
        </StyledCarrousel>
    )
}

Carrousel.propTypes = {
    primeiraImagem: PropTypes.string.isRequired,
    segundaImagem: PropTypes.string.isRequired,
    terceiraImagem: PropTypes.string.isRequired
}
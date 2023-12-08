import React from "react"
import Carrousel from "./Carrousel"
import { StyledCard , StyledCardMobile } from "./styles"
import PropTypes from "prop-types"

export default function Card(props) {

    return (
        <>
            {!props.mobile ? (
                <StyledCard>
                    <div onClick={() => props.scrollTo(props.currentId)} className="seccao-textos">
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
                    <Carrousel
                        primeiraImagem={props.primeiraImagem}
                        segundaImagem={props.segundaImagem}
                        terceiraImagem={props.terceiraImagem}
                    />
                </StyledCard>
            ) : 
            (
                <StyledCardMobile>
                    <Carrousel
                        primeiraImagem={props.primeiraImagem}
                        segundaImagem={props.segundaImagem}
                        terceiraImagem={props.terceiraImagem}
                    />
                    <div onClick={() => props.scrollTo(props.currentId)} className="seccao-textos">
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
                </StyledCardMobile>
            )}
        </>
        
    )
}

Card.propTypes = {
    mobile: PropTypes.func.isRequired,
    scrollTo: PropTypes.func,
    projectName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    primeiraImagem: PropTypes.string,
    segundaImagem: PropTypes.string,
    terceiraImagem: PropTypes.string,
    currentId: PropTypes.number
}
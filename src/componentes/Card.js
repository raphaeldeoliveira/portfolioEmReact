import React from "react"
import Carrousel from "./Carrousel"
import { StyledCard } from "./styles"
import PropTypes from "prop-types"

export default function Card(props) {

    return (
        
        <StyledCard>
            <div onClick={() => props.scrollTo(props.projectName)} className="seccao-textos">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <Carrousel
                primeiraImagem={props.primeiraImagem}
                segundaImagem={props.segundaImagem}
                terceiraImagem={props.terceiraImagem}
            />
        </StyledCard>
    )
}

Card.propTypes = {
    scrollTo: PropTypes.func,
    projectName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    primeiraImagem: PropTypes.string,
    segundaImagem: PropTypes.string,
    terceiraImagem: PropTypes.string
}
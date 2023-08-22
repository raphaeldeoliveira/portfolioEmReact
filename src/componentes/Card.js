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

Card.PropTypes = {
    scrollTo: PropTypes.func.isRequired,
    projectName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    primeiraImagem: PropTypes.string.isRequired,
    segundaImagem: PropTypes.string.isRequired,
    terceiraImagem: PropTypes.string.isRequired
}
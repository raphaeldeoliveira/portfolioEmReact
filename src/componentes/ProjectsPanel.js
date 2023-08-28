import React from "react"
import Card from "./Card"
import CardLeetCode from "./CardLeetCode"
import { StyledGrid } from "./styles"
import PropTypes from "prop-types"

import photoAngelModasOne from "../images/project-cards/angelProject1.png";
import photoAngelModasTwo from "../images/project-cards/angelProject2.png";
import photoAngelModasThree from "../images/project-cards/angelProject5.png";

import photoFifaOne from "../images/project-cards/fifaProject.png";
import photoFifaTwo from "../images/project-cards/fifaProject2.png";
import photoFifaThree from "../images/project-cards/fifaProject3.png";

import photoProExtOne from "../images/project-cards/projectWilson2.png";
import photoProExtTwo from "../images/project-cards/projectWilson3.png";
import photoProExtThree from "../images/project-cards/projetoWilson.png";

import photoLeetcode from "../images/project-cards/leetcode.png"

export default function ProjectsPanel(props) {

    return (
        <StyledGrid id="cardProjects">
            <Card 
                title={props.titleProject1}
                description={props.cardParagrap1}
                primeiraImagem={photoFifaOne}
                segundaImagem={photoFifaTwo}
                terceiraImagem={photoFifaThree}
                scrollTo={props.scrollTo}
                projectName="fifabot"
                currentId={0}
            />
            <Card 
                title={props.titleProject2}
                description={props.cardParagrap2}
                primeiraImagem={photoProExtOne}
                segundaImagem={photoProExtTwo}
                terceiraImagem={photoProExtThree}
                scrollTo={props.scrollTo}
                projectName="extension"
                currentId={1}
            />
            <Card 
                title={props.titleProject3}
                description={props.cardParagrap3}
                primeiraImagem={photoAngelModasOne}
                segundaImagem={photoAngelModasTwo}
                terceiraImagem={photoAngelModasThree}
                scrollTo={props.scrollTo}
                projectName="angelmodas"
                currentId={2}
            />
            <CardLeetCode
                title={props.titleProject4}
                description={props.cardParagrap4}
                image={photoLeetcode}
                link="https://leetcode.com/raphaeloc/"
                
            />
        </StyledGrid>
    )
}

ProjectsPanel.propTypes = {
    scrollTo: PropTypes.func.isRequired,
    titleProject1: PropTypes.string.isRequired,
    cardParagrap1: PropTypes.string.isRequired,
    titleProject2: PropTypes.string.isRequired,
    cardParagrap2: PropTypes.string.isRequired,
    titleProject3: PropTypes.string.isRequired,
    cardParagrap3: PropTypes.string.isRequired,
    titleProject4: PropTypes.string.isRequired,
    cardParagrap4: PropTypes.string.isRequired,
}
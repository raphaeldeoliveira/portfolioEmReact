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

// Usar grid pra fazer os cards no projectpanel
// Criar um card especial para o leetcode

export default function ProjectsPanel(props) {


    return (
        <StyledGrid id="cardProjects">
            <Card 
                title={"FIFA Bot Project"}
                description={"This project is divided into three subprojects: the creation of the sales website, the development of a product (a browser extension), and the implementation of a REST API in Docker for user creation on the website."}
                primeiraImagem={photoFifaOne}
                segundaImagem={photoFifaTwo}
                terceiraImagem={photoFifaThree}
                scrollTo={props.scrollTo}
                projectName="fifabot"
            />
            <Card 
                title="Programming teaching platform"
                description="This is a extension project of university which i went a front-end devolpment, building all css components and build interactivites with Vue"
                primeiraImagem={photoProExtOne}
                segundaImagem={photoProExtTwo}
                terceiraImagem={photoProExtThree}
                scrollTo={props.scrollTo}
                projectName="extension"
            />
            <Card 
                title="Angel Modas"
                description="This is a stock management system project created for my girlfriend's store. The idea is to have control over the products sold, track profits, among other aspects."
                primeiraImagem={photoAngelModasOne}
                segundaImagem={photoAngelModasTwo}
                terceiraImagem={photoAngelModasThree}
                scrollTo={props.scrollTo}
                projectName="angelmodas"
            />
            <CardLeetCode
                title="My leetcode profile"
                description="This is to demonstrate my knowledge of programming logic. All the problems are solved using the Java language."
                image={photoLeetcode}
                link="https://leetcode.com/raphaeloc/"
                
            />
        </StyledGrid>
    )
}

ProjectsPanel.propTypes = {
    scrollTo: PropTypes.func.isRequired
}
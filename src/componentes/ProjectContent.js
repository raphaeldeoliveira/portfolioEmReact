import React from "react"
import { StyledPanel } from "./styles"

import CarrouselPanel from "./CarrouselPanel"

import PropTypes from "prop-types"

export default function ProjectContent(props) {

    React.useEffect(() => {
        props.setTitle(props.titleProject1);
    }, [props.titleProject1]);

    function setVariableWithCurrentProject(currentId) {
        if (currentId === 0) {
            props.setTranslateY(0)
            setTimeout(() => {
                props.setTitle(props.titleProject1)
                props.setProjectLink("https://github.com/raphaeldeoliveira/FIFABOT")
            }, 500)
        }
        else if (currentId === 1) {
            //props.setTranslateY(-38.25)
            props.setTranslateY(props.mobile ? -200 : -38.27)
            setTimeout(() => {
                props.setTitle(props.titleProject2)
                props.setProjectLink("https://github.com/raphaeldeoliveira/PlataformaEnsino")
            }, 500)
        }
        else {
            //props.setTranslateY(-76.5)
            props.setTranslateY(props.mobile ? -400 : -76.54)
            setTimeout(() => {
                props.setTitle(props.titleProject3)
                props.setProjectLink("https://github.com/raphaeldeoliveira/LojaRoupaApp")
            }, 500)
        }
    }

    function changeTop() {
        let currentId = (props.currentProject === 0 ? 2 : props.currentProject - 1)
        props.setCurrentProject((prevState) => prevState === 0 ? 2 : prevState - 1);
        setVariableWithCurrentProject(currentId)
        changeTitle()
    }

    function changeBottom() {
        let currentId = (props.currentProject === 2 ? 0 : props.currentProject + 1)
        props.setCurrentProject((prevState) => prevState === 2 ? 0 : prevState + 1);
        setVariableWithCurrentProject(currentId)
        changeTitle()
        setTimeout(() => {
        }, 1000)
    }

    function changeTitle() {
        setTimeout(() => {
            props.setTransicaoTitulo((prevTransicao) => !prevTransicao)
        }, 1000)
        props.setTransicaoTitulo((prevTransicao) => !prevTransicao)
    }

    return (
        <StyledPanel>
            <div id="correct-position-behavior"></div>
            <div id="section-projects" className="header-project-content">
                <div className="botoes-triangulo">
                    <button onClick={changeTop} className="trianguloCima">▲</button>
                    <button onClick={changeBottom} className="trianguloBaixo">▼</button>
                </div>
                <h2 className={
                    props.transicaoTitulo ? "transicaoTitulo" : ""
                }
                onClick={() => window.open(props.projectLink, '_blank')}
                >{props.title}
                </h2>
            </div>
            <div className="carrousel-de-paineis">
                <div 
                    className="carousel-panel"
                    style={{
                        transform: `translateY(${props.translateY}vw)`
                    }}
                >
                    <CarrouselPanel 
                        currentProject= {props.currentProject}

                        // FIFA
                        numDots={6}
                        description={props.contentParagraph1}

                        functionality={props.menuText11}
                        profitability={props.menuText12}
                        apprenticeship={props.menuText13}

                        titleOptionMenu1={props.titleOptionMenu1}
                        titleOptionMenu2={props.titleOptionMenu2}
                        titleOptionMenu3={props.titleOptionMenu3}

                        id="fifabot"
                        mobile={props.mobile}
                    />
                    <CarrouselPanel 
                        currentProject= {props.currentProject}

                        // EXTENSÃO
                        numDots={4}
                        description={props.contentParagraph2}

                        functionality={props.menuText21}
                        apprenticeship={props.menuText23}

                        titleOptionMenu1={props.titleOptionMenu1}
                        titleOptionMenu2={props.titleOptionMenu2}
                        titleOptionMenu3={props.titleOptionMenu3}

                        id="extension"
                        mobile={props.mobile}
                    />
                    <CarrouselPanel 
                        currentProject= {props.currentProject}

                        // ANGEL MODAS
                        numDots={5}
                        description={props.contentParagraph3}

                        functionality={props.menuText31}
                        apprenticeship={props.menuText33}

                        titleOptionMenu1={props.titleOptionMenu1}
                        titleOptionMenu2={props.titleOptionMenu2}
                        titleOptionMenu3={props.titleOptionMenu3}

                        id="angelmodas"
                        mobile={props.mobile}
                    />
                </div>
                
            </div>
            
        </StyledPanel>
    )
}

ProjectContent.propTypes = {
    titleProject1: PropTypes.string.isRequired,
    titleProject2: PropTypes.string.isRequired,
    titleProject3: PropTypes.string.isRequired,
    contentParagraph1: PropTypes.string.isRequired,
    contentParagraph2: PropTypes.string.isRequired,
    contentParagraph3: PropTypes.string.isRequired,
    menuText11: PropTypes.string.isRequired,
    menuText12: PropTypes.string.isRequired,
    menuText13: PropTypes.string.isRequired,
    titleOptionMenu1: PropTypes.string.isRequired,
    titleOptionMenu2: PropTypes.string.isRequired,
    titleOptionMenu3: PropTypes.string.isRequired,
    menuText21: PropTypes.string.isRequired,
    menuText23: PropTypes.string.isRequired,
    menuText31: PropTypes.string.isRequired,
    menuText33: PropTypes.string.isRequired,
    translateY: PropTypes.number.isRequired,
    setTranslateY: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    projectLink: PropTypes.string.isRequired,
    setProjectLink: PropTypes.func.isRequired,
    transicaoTitulo: PropTypes.bool.isRequired,
    setTransicaoTitulo: PropTypes.func.isRequired,
    currentProject: PropTypes.number.isRequired,
    setCurrentProject: PropTypes.func.isRequired,
    mobile: PropTypes.bool.isRequired
}
import React from "react"
import { StyledPanel } from "./styles"

import CarrouselPanel from "./CarrouselPanel"

import PropTypes from "prop-types"

export default function ProjectContent(props) {

    const [currentProject, setCurrentProject] = React.useState(0)
    const [projectLink, setProjectLink] = React.useState("https://github.com/raphaeldeoliveira/FIFABOT")
    const [title, setTitle] = React.useState(props.titleProject1)
    const [translateY, setTranslateY] = React.useState(0)

    React.useEffect(() => {
        setTitle(props.titleProject1);
    }, [props.titleProject1]);

    function setVariableWithCurrentProject(currentId) {
        if (currentId === 0) {
            setTranslateY(0)
            setTimeout(() => {
                setTitle(props.titleProject1)
                setProjectLink("https://github.com/raphaeldeoliveira/FIFABOT")
            }, 500)
        }
        else if (currentId === 1) {
            setTranslateY(-522.5)
            setTimeout(() => {
                setTitle(props.titleProject2)
                setProjectLink("https://github.com/raphaeldeoliveira/PlataformaEnsino")
            }, 500)
        }
        else {
            setTranslateY(-1045)
            setTimeout(() => {
                setTitle(props.titleProject3)
                setProjectLink("https://github.com/raphaeldeoliveira/LojaRoupaApp")
            }, 500)
        }
    }

    function changeTop() {
        let currentId = (currentProject === 0 ? 2 : currentProject - 1)
        setCurrentProject((prevState) => prevState === 0 ? 2 : prevState - 1);
        setVariableWithCurrentProject(currentId)
        changeTitle()
    }

    function changeBottom() {
        let currentId = (currentProject === 2 ? 0 : currentProject + 1)
        setCurrentProject((prevState) => prevState === 2 ? 0 : prevState + 1);
        setVariableWithCurrentProject(currentId)
        changeTitle()
        setTimeout(() => {
        }, 1000)
    }

    const [transicaoTitulo, setTransicaoTitulo] = React.useState(false)

    function changeTitle() {
        setTimeout(() => {
            setTransicaoTitulo((prevTransicao) => !prevTransicao)
        }, 1000)
        setTransicaoTitulo((prevTransicao) => !prevTransicao)
    }

    return (
        <StyledPanel>
            <div id="section-projects" className="header-project-content">
                <div className="botoes-triangulo">
                    <button onClick={changeTop} className="trianguloCima">▲</button>
                    <button onClick={changeBottom} className="trianguloBaixo">▼</button>
                </div>
                <h2 className={
                    transicaoTitulo ? "transicaoTitulo" : ""
                }
                onClick={() => window.open(projectLink, '_blank')}
                >{title}
                </h2>
            </div>
            <div className="carrousel-de-paineis">
                <div 
                    className="carousel-panel"
                    style={{
                        transform: `translateY(${translateY}px)`
                    }}
                >
                    <CarrouselPanel 
                        currentProject= {currentProject}

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
                    />
                    <CarrouselPanel 
                        currentProject= {currentProject}

                        // EXTENSÃO
                        numDots={4}
                        description={props.contentParagraph2}

                        functionality={props.menuText21}
                        apprenticeship={props.menuText23}

                        titleOptionMenu1={props.titleOptionMenu1}
                        titleOptionMenu2={props.titleOptionMenu2}
                        titleOptionMenu3={props.titleOptionMenu3}

                        id="extension"
                    />
                    <CarrouselPanel 
                        currentProject= {currentProject}

                        // ANGEL MODAS
                        numDots={5}
                        description={props.contentParagraph3}

                        functionality={props.menuText31}
                        apprenticeship={props.menuText33}

                        titleOptionMenu1={props.titleOptionMenu1}
                        titleOptionMenu2={props.titleOptionMenu2}
                        titleOptionMenu3={props.titleOptionMenu3}

                        id="angelmodas"
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
}
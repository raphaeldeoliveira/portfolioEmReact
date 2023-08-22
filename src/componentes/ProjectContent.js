import React from "react"
import { StyledPanel } from "./styles"

import CarrouselPanel from "./CarrouselPanel"

export default function ProjectContent(props) {

    const [currentProject, setCurrentProject] = React.useState(0)
    const [projectData, setProjectData] = React.useState({
        title: "FIFA Bot Project",
        link: "https://github.com/raphaeldeoliveira/FIFABOT"
    })
    const [translateY, setTranslateY] = React.useState(0)

    function setVariableWithCurrentProject(currentId) {
        if (currentId === 0) {
            setTranslateY(0)
            setTimeout(() => {
                setProjectData({
                    title: "FIFA Bot Project",
                    link: "https://github.com/raphaeldeoliveira/FIFABOT"
                })
            }, 500)
        }
        else if (currentId === 1) {
            setTranslateY(-522.5)
            setTimeout(() => {
                setProjectData({
                    title: "Programming teaching platform",
                    link: "https://github.com/raphaeldeoliveira/PlataformaEnsino"
                })
            }, 500)
        }
        else {
            setTranslateY(-1045)
            setTimeout(() => {
                setProjectData({
                    title: "Angel Modas",
                    link: "https://github.com/raphaeldeoliveira/LojaRoupaApp"
                })
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
                onClick={() => window.open(projectData.link, '_blank')}
                >{projectData.title}
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
                        projectData= {projectData}
                        currentProject= {currentProject}

                        // FIFA
                        numDots={6}
                        description="This is my most robust project. I created a product: an extension capable of earning coins in FIFA. In addition to the tool, a website was developed, which is a complete system with integrated back-end and front-end connected to a database."

                        functionality="The software will be a browser extension written in Javascript. The user will need a login and password to access the program, which may or may not be maintained depending on the payment of the monthly fee. The website's REST API was written in Java with Spring Boot. As for the website's front-end, it was written in Vue. For the database, I used MySQL in a Docker container."
                        profitability="The sources of income for the system will be through sales of system subscriptions and the sale of in-game currency (which will be earned through the software itself)."
                        apprenticeship="The main lesson I learned from this project was the importance of creating a robust and scalable product that can efficiently meet the needs of users. Through the software, I learned JS and gained an understanding of security principles and authentication to implement the login and password system. Furthermore, integrating the back-end and front-end of the website allowed me to explore different technologies and frameworks, such as Java with Spring Boot for the REST API and Vue for the front-end. Configuring the database with MySQL and Docker provided me with knowledge of storing and efficiently managing system data."
                        id="fifabot"
                    />
                    <CarrouselPanel 
                        projectData= {projectData}
                        currentProject= {currentProject}

                        // EXTENSÃO
                        numDots={4}
                        description="A extension project was developed to assist beginners in programming by providing exercises and solutions in three languages: Java, JavaScript, and Python. In addition to myself, 15 other students contributed to the development."

                        functionality="The project features 500 programming exercises divided into easy, medium, and difficult levels. All exercises have been solved by students participating in the project. The exercise topics cover expressions, selection, loops, arrays, strings, matrices, and functions."
                        apprenticeship="Through this project, I have learned how to utilize media queries and make the website fully responsive. Additionally, I have gained knowledge in working with Vue.js and creating more advanced interactions. My ability to create stylish components (CSS) and understanding of design principles such as color harmony and font selection have also significantly improved."
                        id="extension"
                    />
                    <CarrouselPanel 
                        projectData= {projectData}
                        currentProject= {currentProject}

                        // ANGEL MODAS
                        numDots={5}
                        description="A project to assist in sales management and financial control for a clothing store, keeping track of investment, revenue, profit, and projections. The design was specifically tailored for my girlfriend."

                        functionality="The system features a main menu with options for investment, revenue, and profit (actual and expected). These data are entered through the input of products purchased for resale. Products can be sold, returned, or lost, and they are organized in separate lists for available and sold items. The system also includes search bars and filters to easily find products in both lists."
                        apprenticeship="Through this project, I gained a solid understanding of object-oriented programming and learned to implement the MVC (Model-View-Controller) design pattern. Additionally, I acquired skills in creating user interfaces using the Swing framework (Java)."
                        id="angelmodas"
                    />
                </div>
                
            </div>
            
            
        </StyledPanel>
    )
}
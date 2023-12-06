import React from "react"
import { StyledPhotoProfile, StyledResume, StyledCurriculum, StyledMainContent, StyledResumeButton } from "./styles"

import PhotoDefault from "../images/foto-minha.jpeg"
import PhotoStuding from "../images/foto-minha-estudando.jpeg"

import PropTypes from "prop-types"

export default function MainContent(props) {

    const [activeResume, setActiveResume] = React.useState(false)
    const [marginAnimation, setMarginAnimation] = React.useState(false)

    function inverterState() {
        setTimeout(() => {
            setMarginAnimation((prevMargin) => !prevMargin)
        }, 150);
        setMarginAnimation((prevMargin) => !prevMargin)
        setTimeout(() => {
            setActiveResume((prevState) => !prevState)
        }, 800);
    }

    return (
        <StyledMainContent>
            
            <StyledPhotoProfile>
                <div>
                    <div className={`imagem-rotatoria ${activeResume ? "active-rotate" : ""}`}>
                        <img className="cara" src={PhotoDefault} />
                        <img className="coroa" src={PhotoStuding} />
                    </div>
                </div>
                <span>{props.textBelowImage}</span>
            </StyledPhotoProfile>
            
            <div className="conteudoCentral">
                <StyledResume
                    style={{
                        display: (activeResume ? "none" : "block")
                    }}
                >
                    <h1>RAPHAEL</h1>
                    <h1 className="sobrenome">CARVALHO</h1>
                    {<p>
                        {props.mainParagraph1} 
                        Html, Css, Javascript, <span className="sublinhado-react">React</span> 
                        {props.mainParagraph2} 
                        <span className="sublinhado-java">Java</span> 
                        {props.mainParagraph3} 
                        <span className="sublinhado-spring">Spring Boot</span>.  
                        {props.mainParagraph4}
                    </p>}
                </StyledResume>
                <StyledCurriculum
                    style={{
                        display: (activeResume ? "block" : "none")
                    }}
                >
                    <h4 className="title-cv">{props.cvCabecalho}</h4>
                    <h4 className="title-cv">(47) 98447-0822 - rafaolive3003@gmail.com</h4>

                    <h2>{props.cvTitle1}</h2>
                    <hr/>
                    <div className="two-text">
                        <span className="left-text">INSTITUTO FEDERAL DE SANTA CATARINA</span>
                        <span className="right-text">Lages, SC</span>
                    </div>
                    <br/>
                    <div className="two-text">
                        <span className="left-text italic">{props.cvSubtitle12}</span>
                        <span className="right-text italic">2022 - {props.cvComplement12}</span>
                    </div>
                    <br/>
                    <p>{props.cvParagraph1}</p>

                    <h2>{props.cvTitle2}</h2>
                    <hr/>
                    <p>{props.cvSubtitle2}</p>
                    <div className="two-text">
                        <span className="left-text">{props.cvSubtitle21}</span>
                        <span className="right-text">Lages, SC</span>
                    </div>
                    <br/>
                    <div className="two-text">
                        <span className="left-text italic">{props.cvSubtitle22}</span>
                        <span className="right-text italic">{props.cvComplement22}</span>
                    </div>
                    <br/>
                    <p>{props.cvParagraph2}</p>

                    <h2>{props.cvTitle3}</h2>
                    <hr/>
                    <p><strong>{props.cvArticle31title}</strong> {props.cvArticle31text}</p>
                    <p><strong>{props.cvArticle32title}</strong> {props.cvArticle32text}</p>

                </StyledCurriculum>

                <StyledResumeButton style={{ marginTop: (marginAnimation ? "40px" : "20px")}} onClick={inverterState}>{`${activeResume ? props.buttonText2 : props.buttonText1}`}</StyledResumeButton>
            </div>
        </StyledMainContent>
    )
}

MainContent.propTypes = {
    textBelowImage: PropTypes.string.isRequired,
    mainParagraph1: PropTypes.string.isRequired,
    mainParagraph2: PropTypes.string.isRequired,
    mainParagraph3: PropTypes.string.isRequired,
    mainParagraph4: PropTypes.string.isRequired,
    buttonText1: PropTypes.string.isRequired,
    buttonText2: PropTypes.string.isRequired,
    cvCabecalho: PropTypes.string.isRequired,
    cvTitle1: PropTypes.string.isRequired,
    cvSubtitle12: PropTypes.string.isRequired,
    cvComplement12: PropTypes.string.isRequired,
    cvParagraph1: PropTypes.string.isRequired,
    cvTitle2: PropTypes.string.isRequired,
    cvSubtitle2: PropTypes.string.isRequired,
    cvSubtitle21: PropTypes.string.isRequired,
    cvSubtitle22: PropTypes.string.isRequired,
    cvComplement22: PropTypes.string.isRequired,
    cvParagraph2: PropTypes.string.isRequired,
    cvTitle3: PropTypes.string.isRequired,
    cvArticle31title: PropTypes.string.isRequired,
    cvArticle31text: PropTypes.string.isRequired,
    cvArticle32title: PropTypes.string.isRequired,
    cvArticle32text: PropTypes.string.isRequired,
}
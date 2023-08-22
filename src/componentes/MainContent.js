import React from "react"
import { StyledPhotoProfile, StyledResume, StyledCurriculum, StyledMainContent, StyledResumeButton } from "./styles"

import PhotoDefault from "../images/foto-minha.jpeg"
import PhotoStuding from "../images/foto-minha-estudando.jpeg"

export default function MainContent() {

    const [activeResume, setActiveResume] = React.useState(false)
    const [marginAnimation, setMarginAnimation] = React.useState(false)

    function inverterState() {
        setTimeout(() => {
            setMarginAnimation((prevMargin) => !prevMargin)
        }, 150);
        setMarginAnimation((prevMargin) => !prevMargin)
        setTimeout(() => {
            setActiveResume((prevState) => !prevState)
        }, 1000);
    }

    return (
        <StyledMainContent>
            <StyledPhotoProfile>
                <img src={activeResume ? PhotoStuding : PhotoDefault} />
                <span>That&#39;s Me!</span>
            </StyledPhotoProfile>
            <div className="conteudoCentral">
                <StyledResume
                    style={{
                        display: (activeResume ? "none" : "block")
                    }}
                >
                    <h1>RAPHAEL</h1>
                    <h1 className="sobrenome">CARVALHO</h1>
                    <p>
                    I&#39;m a student of computer cience on Instituto Federal de Santa Catarina. Focused on becoming a fullstack developer. My actual skills is: Html, Css, <span className="sublinhado-js">Javascript</span> , <span className="sublinhado-vue">Vue</span> and <span className="sublinhado-java">Java</span> whit <span className="sublinhado-spring">Spring Boot</span>. But studying to become a great programmer. I have so much interesse in tech and search upgrade my skills day by day.
                    </p>
                </StyledResume>
                <StyledCurriculum
                    style={{
                        display: (activeResume ? "block" : "none")
                    }}
                >
                    <h4 className="title-cv">Brazilian, single, 22 years old, Lages SC</h4>
                    <h4 className="title-cv">(47) 98447-0822 - rafaolive3003@gmail.com</h4>

                    <h2>EDUCATION</h2>
                    <hr/>
                    <div className="two-text">
                        <span className="left-text">INSTITUTO FEDERAL DE SANTA CATARINA</span>
                        <span className="right-text">Lages, SC</span>
                    </div>
                    <br/>
                    <div className="two-text">
                        <span className="left-text italic">Bachelor&#39;s Degree in Computer Science</span>
                        <span className="right-text italic">2022 - present</span>
                    </div>
                    <br/>
                    <p>Currently in the 3rd semester. Focused on enhancing my skills in front-end and back-end programming. Planning to specialize in neural networks and data science in the upcoming phases.</p>

                    <h2>EXPERIENCE</h2>
                    <hr/>
                    <p>Currently, I do not have professional experience as a developer. However, I have worked on several personal projects that can be accessed on my website or GitHub.</p>
                    <div className="two-text">
                        <span className="left-text">EXTENSION PROJECT, IFSC</span>
                        <span className="right-text">Lages, SC</span>
                    </div>
                    <br/>
                    <div className="two-text">
                        <span className="left-text italic">Front-end Developer</span>
                        <span className="right-text italic">Jul 1 - Dec 30, 2022</span>
                    </div>
                    <br/>
                    <p>Developed all visual components of the website, including design exploration, typography, and color schemes. Implemented user interaction using Vue.js.</p>

                    <h2>ADDITIONAL INFORMATION</h2>
                    <hr/>
                    <p><strong>Skills:</strong> Proficient in JavaScript, Vue.js, and Java; Proficient in object-oriented programming and developing systems with graphical interfaces.</p>
                    <p><strong>Languages:</strong> Fluent in Portuguese and intermediate English.</p>

                </StyledCurriculum>

                <StyledResumeButton style={{ marginTop: (marginAnimation ? "40px" : "20px")}} onClick={inverterState}>{activeResume ? "View Full CV" : "View Resume"}</StyledResumeButton>
            </div>
        </StyledMainContent>
    )
}
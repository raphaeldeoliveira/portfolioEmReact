import React from "react"
import { StyledCarrouselPanel, DotsTable } from "./styles"
import Menu from "./Menu"
import CarrouselImages from "./CarrouselImages"
import PropTypes from "prop-types"

export default function CarrouselPanel(props) {

    const [currentDot, setCurrentDot] = React.useState(0)
    const [deslocamento, setDeslocamento] = React.useState(0)

    function activeDot(id) {
        return (id === currentDot) ? "dot-active" : ""
    }

    function dots() {
        if (props.numDots === 6) {
            return (
                <DotsTable>
                    <span className={`dot ${activeDot(0)}`}></span>
                    <span className={`dot ${activeDot(1)}`}></span>
                    <span className={`dot ${activeDot(2)}`}></span>
                    <span className={`dot ${activeDot(3)}`}></span>
                    <span className={`dot ${activeDot(4)}`}></span>
                    <span className={`dot ${activeDot(5)}`}></span>
                </DotsTable>
            )
        }
        else if (props.numDots === 5) {
            return (
                <DotsTable>
                    <span className={`dot ${activeDot(0)}`}></span>
                    <span className={`dot ${activeDot(1)}`}></span>
                    <span className={`dot ${activeDot(2)}`}></span>
                    <span className={`dot ${activeDot(3)}`}></span>
                    <span className={`dot ${activeDot(4)}`}></span>
                </DotsTable>
            )
        }
        else {
            return (
                <DotsTable>
                    <span className={`dot ${activeDot(0)}`}></span>
                    <span className={`dot ${activeDot(1)}`}></span>
                    <span className={`dot ${activeDot(2)}`}></span>
                    <span className={`dot ${activeDot(3)}`}></span>
                </DotsTable>
            )
        }
    }

    function changeImageLeft() {
        
        if (currentDot === 0) {
            setCurrentDot((props.numDots - 1))
            setDeslocamento(((props.numDots - 1) * -51.6))
        }
        else {
            setCurrentDot((prevDot) => prevDot - 1)
            setDeslocamento((prevDeslocamento) => prevDeslocamento + 51.6)
        }
    }

    function changeImageRight() {
        
        if (currentDot === (props.numDots - 1)) {
            setCurrentDot(0)
            setDeslocamento(0)
        }
        else {
            setCurrentDot((prevDot) => prevDot + 1)
            setDeslocamento((prevDeslocamento) => prevDeslocamento - 51.6)
        }
    }

    return (
        <StyledCarrouselPanel id={props.id}>
            <p className="project-content-p">{props.description}</p>
            <div className="flex">
                <Menu 
                    numDots= {props.numDots}
                    functionality= {props.functionality}
                    profitability= {props.profitability}
                    apprenticeship= {props.apprenticeship}

                    titleOptionMenu1={props.titleOptionMenu1}
                    titleOptionMenu2={props.titleOptionMenu2}
                    titleOptionMenu3={props.titleOptionMenu3}
                />
                <div>
                    <CarrouselImages 
                        deslocamento = {deslocamento}
                        numDots= {props.numDots}
                    />
                    <div className="dots">
                        <span onClick={changeImageLeft} className="left-change-image">&lt;</span>
                        {dots()}
                        <span onClick={changeImageRight} className="right-change-image">&gt;</span>
                    </div>
                </div>
            </div>
        </StyledCarrouselPanel>
    )

}

CarrouselPanel.propTypes = {
    numDots: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    functionality: PropTypes.string.isRequired,
    profitability: PropTypes.string.isRequired,
    apprenticeship: PropTypes.string.isRequired,
    titleOptionMenu1: PropTypes.string.isRequired,
    titleOptionMenu2: PropTypes.string.isRequired,
    titleOptionMenu3: PropTypes.string.isRequired
}
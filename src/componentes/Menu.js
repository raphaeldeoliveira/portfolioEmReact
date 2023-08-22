import React from "react"
import { StyledMenu } from "./styles"
import PropTypes from "prop-types"

export default function Menu(props) {

    const [showMenu, setShowMenu] = React.useState(false)
    const [textMenu, setTextMenu] = React.useState(props.functionality)
    const [titleMenu, setTitleMenu] = React.useState("Functionality")

    function menuOption() {
        if (props.numDots === 6) {
            return (
                <div style={{
                        display: (showMenu ? "block" : "none")
                    }} className="options">
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.functionality);
                        setTitleMenu("Functionality");
                        }} className="card-option option-top">Functionality</div>
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.profitability);
                        setTitleMenu("Profitability");
                        }} className="card-option option-middle">Profitability</div>
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.apprenticeship);
                        setTitleMenu("Apprenticeship");
                        }} className="card-option option-bottom">Apprenticeship</div>
                </div>
            )
        }
        else {
            return (
                <div style={{
                        display: (showMenu ? "block" : "none")
                    }} className="options">
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.functionality);
                        setTitleMenu("Functionality");
                        }} className="card-option option-top">Functionality</div>
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.apprenticeship);
                        setTitleMenu("Apprenticeship");
                        }} className="card-option option-bottom">Apprenticeship</div>
                </div>
            )
        }
    }

    function showMenuOption() {
        setShowMenu((prevShow) => !prevShow)
    }

    return (
        <StyledMenu>
            <div 
                style={{
                    display: (showMenu ? "none" : "block")
                }}
                className={
                `main ${(props.numDots === 6) ? "bg-gradiente-blue" : (props.numDots === 5) ? "bg-gradiente-pink" : "bg-gradiente-orange"}`
            }>
                <div onClick={showMenuOption} className="switch-menu-text"><span>{titleMenu} ▼</span></div>
                <p>{textMenu}</p>
            </div>
            {menuOption()}
        </StyledMenu>
    )
}

Menu.PropTypes = {
    numDots: PropTypes.number.isRequired,
    functionality: PropTypes.string.isRequired,
    profitability: PropTypes.string.isRequired,
    apprenticeship: PropTypes.string.isRequired
}
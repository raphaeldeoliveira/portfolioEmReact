import React from "react"
import { StyledMenu } from "./styles"
import PropTypes from "prop-types"

export default function Menu(props) {

    const [showMenu, setShowMenu] = React.useState(false)
    const [textMenu, setTextMenu] = React.useState(props.functionality)
    const [titleMenu, setTitleMenu] = React.useState(props.titleOptionMenu1)

    React.useEffect(() => {
        if (titleMenu === "Functionality" || titleMenu === "Funcionamento") {
            setTitleMenu(props.titleOptionMenu1);
            setTextMenu(props.functionality);
        } else if (titleMenu === "Apprenticeship" || titleMenu === "Aprendizado") {
            setTitleMenu(props.titleOptionMenu3);
            setTextMenu(props.apprenticeship);
        }
        else {
            setTitleMenu(props.titleOptionMenu2);
            setTextMenu(props.profitability);
        }
        
    }, [props.functionality]);

    function menuOption() {
        if (props.numDots === 6) {
            return (
                <div style={{
                        display: (showMenu ? "block" : "none")
                    }} className="options margin-mobile2">
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.functionality);
                        setTitleMenu(props.titleOptionMenu1);
                        }} className="card-option option-top">{props.titleOptionMenu1}</div>
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.profitability);
                        setTitleMenu(props.titleOptionMenu2);
                        }} className="card-option option-middle">{props.titleOptionMenu2}</div>
                    <div onClick={() => { 
                        showMenuOption(); 
                        setTextMenu(props.apprenticeship);
                        setTitleMenu(props.titleOptionMenu3);
                        }} className="card-option option-bottom">{props.titleOptionMenu3}</div>
                </div>
            )
        }
        else {
            return (
                <div style={{
                        display: (showMenu ? "block" : "none")
                    }} className="options margin-mobile">
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

Menu.propTypes = {
    numDots: PropTypes.number.isRequired,
    functionality: PropTypes.string.isRequired,
    profitability: PropTypes.string.isRequired,
    apprenticeship: PropTypes.string.isRequired,
    titleOptionMenu1: PropTypes.string.isRequired,
    titleOptionMenu2: PropTypes.string.isRequired,
    titleOptionMenu3: PropTypes.string.isRequired
}
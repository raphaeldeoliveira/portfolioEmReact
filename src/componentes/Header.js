import React from "react"
import { StyledHeader , DivSeccaoDireitaHeader , ToggleLanguage } from './styles'
import Button from "./Button"
import '../styles.scss'
import PropTypes from "prop-types"

export default function Header(props) {

    const [nomeSobrenome, setNomeSobrenome] = React.useState(true);

    const resizer = () => {
        setNomeSobrenome(window.innerWidth <= 780 ? false : true)
    }

    React.useEffect(() => {
        resizer()
        window.addEventListener("resize", resizer)

        return function() {
            window.removeEventListener("resize", resizer)
        }
    }, [])

    const [toogle, setToogle] = React.useState(false)

    function mudarToogle() {
        setToogle(prevToogle => !prevToogle)
    }

    return (
        <StyledHeader>
            <div className="nome-e-sobrenome">
                <span>{`R${nomeSobrenome ? "APHAEL" : ""}`}</span>
                <span className="sobrenome">{`C${nomeSobrenome ? "ARVALHO" : ""}`}</span>
            </div>
            <DivSeccaoDireitaHeader>
                <Button 
                    buttonText={props.button1text}
                    scrollTo={props.scrollTo}
                    scrollName="cardProjects"
                />
                <Button 
                    buttonText={props.button2text}
                    scrollTo={props.scrollTo}
                    scrollName="socialMedias"
                />
                <ToggleLanguage>
                    <span className={`en-toogle
                        ${toogle ? "idioma-off-text" : "idioma-on-text"}
                    `}>EN</span>
                    <div className={`toogle ${toogle ? "idioma-on-bg" : "idioma-off-bg"}`}>
                        <div 
                        onClick={() => {props.mudarIdioma(); mudarToogle()}} 
                        className={`bolinha 
                            ${toogle ? "posicao-bolinha-direita" : "posicao-bolinha-esquerda"}
                        `}>
                        </div>
                    </div>
                    <span className={`br-toogle 
                        ${toogle ? "idioma-on-text" : "idioma-off-text"}
                    `}>BR</span>
                </ToggleLanguage>
            </DivSeccaoDireitaHeader>
        </StyledHeader>
    )
}

Header.propTypes = {
    button1text: PropTypes.string.isRequired,
    button2text: PropTypes.string.isRequired,
    scrollTo: PropTypes.func.isRequired,
    mudarIdioma: PropTypes.func.isRequired
}
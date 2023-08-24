import React from "react"
import { StyledFooter } from "./styles"
import SocialMidiaButton from "./SocialMidiaButton"

import logoZap from "../images/social-midias/whatsapp-sf.png"
import logoMail from "../images/social-midias/email-sf.png"
import logoGithub from "../images/social-midias/github-sf.png"
import logoLinkedin from "../images/social-midias/linkedin-sf.png"

import PropTypes from "prop-types"

export default function Footer(props) {

    const [showDialogMsg, setShowDialogMsg] = React.useState(false)

    function showDialogMessage() {
        
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = "rafaolive3003@gmail.com";
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        
        setTimeout(() => {
            setShowDialogMsg((prevShow) => !prevShow)
        }, 1000);
        setShowDialogMsg((prevShow) => !prevShow)
    }

    return (
        <StyledFooter id="socialMedias">
            <div>
                <div className="flex">
                    <h3 className="nome-footer">RAPHAEL</h3>
                    <h3 className="sobrenome-footer">CARVALHO</h3>
                </div>
                <div className="barra"></div>
            </div>
            <div className="flex">
                <button onClick={showDialogMessage} className="button-email">
                    <span 
                        className="dialog-box"
                        style={{ display: showDialogMsg ? "inline" : "none" }}
                    >{props.messageClickMailButton}</span>
                    <img 
                        className="image-logo-mail" 
                        src={logoMail}
                        style={{ display: showDialogMsg ? "none" : "inline" }}
                    />
                </button>
                <SocialMidiaButton 
                    link="https://www.linkedin.com/in/raphael-de-oliveira-carvalho-a6b133253/"
                    image={logoLinkedin}
                />
                <SocialMidiaButton 
                    link="https://wa.me/5547984470822"
                    image={logoZap}
                />
                <SocialMidiaButton 
                    link="https://github.com/raphaeldeoliveira"
                    image={logoGithub}
                />
            </div>
        </StyledFooter>
    )
}

Footer.propTypes = {
    messageClickMailButton: PropTypes.string.isRequired
}
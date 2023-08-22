import React from "react"
import { StyledFooter } from "./styles"
import SocialMidiaButton from "./SocialMidiaButton"

import logoZap from "../images/social-midias/whatsapp-sf.png"
import logoMail from "../images/social-midias/email-sf.png"
import logoGithub from "../images/social-midias/github-sf.png"
import logoLinkedin from "../images/social-midias/linkedin-sf.png"

export default function Footer() {

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
                <button className="botton-email">
                    <span></span>
                    <img className="image-logo-mail" src={logoMail}/>
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
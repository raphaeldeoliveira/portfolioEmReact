import React from "react"
import { FaSass } from "react-icons/fa"
import {BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql, BiLogoReact } from "react-icons/bi"
import {DiJavascript1} from "react-icons/di"

export default function Icons() {


    return (
        <div className="teste-sas">

            <BiLogoJava className="icon-java" size={100} />
            <BiLogoSpringBoot className="icon-spring" size={100} />
            <BiLogoPostgresql className="icon-postgres" size={100} />

            <DiJavascript1 className="icon-js" size={100} />
            <BiLogoReact className="icon-react" size={100}/>
            <FaSass className="icon-sass" size={100}/>

        </div>
    )
}
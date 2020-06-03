import React from "react"
import Header from "../components/header";
import Repos from "../components/repos"
import CodigoFacilito from '../components/codigofacilito'
import EducationNav from '../components/education-nav'
export default function Home() {
    return <div>
        <Header/>
        <EducationNav/>
        <Repos/>
        <CodigoFacilito/>
    </div>
}

import React from 'react'

import "./Rotacion.css"
import { useHistory } from "react-router-dom";

import tablet from "../../../../../images/fase3-img/modelo/tablet.svg"

const Rotacion = () => {
    let history = useHistory();
    return (
        <div className="animated fadeIn">
        <a onClick={()=>{history.goBack()}}>
            <i  className="fas fa-chevron-left goBack-fase" aria-hidden="true"></i>
        </a>
            <div className="img-modelo">
                <figure >
                    <img src={tablet} alt="" className="w-100 heartbeat"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Rotación de tablets con contenido DIT</p>
                <p className="p-mobile-blue">Equipamos a nuestros aliados comunitarios con tablets para usar durante las visitas domiciliarias que realizan, estas tablets brindan contenido en diversos formatos como videos prácticos dirigidos al aprendizaje de conductas parentales positivas.</p>
                <p className="p-mobile-blue">Un aplicativo especializado permite personalizar la experiencia y hacer seguimiento a cada niño. Así, las familias pueden replicar las actividades que aprenden con sus hijas e hijos y fortalecer
                    su desarrollo de forma integral.</p>
            </div>
        </div>
    )
}

export default Rotacion

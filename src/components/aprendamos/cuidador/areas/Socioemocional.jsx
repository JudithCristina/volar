import React from "react";
import "./areas.css";

import { useHistory } from "react-router-dom";
import iconoSocioemocionalWhite from "./../../../../images/areas-img/icon_socioemocional.png";
import iconoTipSocioemocional from "./../../../../images/areas-img/icono_tip_socioemocional.svg";

import arrTips from "../../../../data";

export const Socioemocional = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {
  let history = useHistory();

  const mandarNumberTipOficial = (numberTip) => {
    localStorage.setItem("localNumberTip", numberTip);
  };

  let arraySocioemocional = arrTips;

  arraySocioemocional.sort(function(a, b) {
    if (a.n_tip > b.n_tip) {
      return 1;
    }
    if (a.n_tip < b.n_tip) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return (
    <div>
      <a
        onClick={() => {
          history.goBack();
        }}
      >
        <i
          className="fas fa-chevron-left arrowGoback goBack-area"
          aria-hidden="true"
        ></i>
      </a>
      {firebaseUser !== null ? (
        <div>
          <div className="box-title-socioemocional show-desktop">
            <img
              src={iconoSocioemocionalWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area  tracking-in-expand-fwd-top">
              Socioemocional
            </h1>
          </div>
          <div className="list-videos-tips">
            <div className="row">
              {arraySocioemocional
                .filter(
                  (item) =>
                    item.seccion === "Socioemocional" &&
                    item.edad == localStorage.getItem("edadChildLogueadoActive")
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                  >
                    <a
                      className="link"
                      href={`/aprendamos/cuidador/${localStorage.getItem(
                        "idChildLogueadoActive"
                      )}/socioemocional/tips`}
                      onClick={() => mandarNumberTipOficial(item.n_tip)}
                    >
                      <div className="box-section box-section-sociemocional">
                        <img
                          src={iconoTipSocioemocional}
                          className="icono-video-tip"
                          alt="icono de tip"
                        />
                        <div className="box-text-video-tip">
                          <h3 className="subtittle-video-tip">{item.titulo}</h3>
                          <h5 className="text-video-tip">
                            Tip N° {item.n_tip}
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <a
            onClick={() => {
              history.goBack();
            }}
          >
            <i
              className="fas fa-chevron-left arrowGoback goBack-area"
              aria-hidden="true"
            ></i>
          </a>
          <div className="box-title-socioemocional show-desktop">
            <img
              src={iconoSocioemocionalWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area">SOCIOEMOCIONAL</h1>
          </div>
          <div className="list-videos-tips">
            <div className="row">
              {arrTips
                .filter(
                  (item) =>
                    item.seccion === "Socioemocional" &&
                    item.edad ==
                      JSON.parse(localStorage.getItem("dateChild")).edad
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                  >
                    <a
                      className="link"
                      href="/aprendamos/cuidador/socioemocional/tips"
                      onClick={() => mandarNumberTipOficial(item.n_tip)}
                    >
                      <div className="box-section box-section-sociemocional">
                        <img
                          src={iconoTipSocioemocional}
                          className="icono-video-tip"
                          alt="icono de tip"
                        />
                        <div className="box-text-video-tip">
                          <h3 className="subtittle-video-tip">{item.titulo}</h3>
                          <h5 className="text-video-tip">
                            Tip N° {item.n_tip}
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

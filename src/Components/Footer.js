import React from 'react';
import fb from '../ico_rs/facebook1.png';
import ld from '../ico_rs/linkedinCor1.png';
import gh from '../ico_rs/github1.png';
import wp from '../ico_rs/whatsapp1.png';

function Footer() {
  return (
    <footer className="mastfoot mt-auto fixed-bottom d-flex justify-content-center">
      <div className="inner">
        <div
          className="btn-toolbar justify-content-center align-items-center"
          role="toolbar"
          aria-label="Toolbar com grupos de botões"
        >
          <h2>Conecte-se:</h2>
          <div className="conecte">
            <div className="btn-group zoom" role="group" aria-label="Primeiro grupo">
              <button
                type="button"
                className="btn btn-secondary"
              >
                <a
                  href="https://www.facebook.com/thiagocristhian"
                  target="_blank"
                  rel="noreferrer"
                  >
                  <img
                    src={ fb }
                    alt="Botão Facebook"
                    width="50em"
                    className="img-responsive"
                  />
                </a>
              </button>
            </div>
            <div className="btn-group zoom" role="group" aria-label="Segundo grupo">
              <button
                type="button"
                className="btn btn-secondary"
              >
                <a
                href="https://www.linkedin.com/in/thiago-c-ferreira/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ ld }
                  alt="Botão LinkedIn"
                  width="50em"
                  className="img-responsive"
                />
              </a>
              </button>
            </div>
            <div className="btn-group zoom" role="group" aria-label="Terceiro grupo">
              <button
                type="button"
                className="btn btn-secondary"
              >
                <a
                  href="https://github.com/thiagocristhianferreira"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={ gh }
                    alt="Botão GitHub"
                    width="50em"
                    className="img-responsive"
                  />
                </a>
              </button>
            </div>
            <div className="btn-group zoom" role="group" aria-label="Quarto grupo">
              <button
                type="button"
                className="btn btn-secondary"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=+5516992923943&text=Olá, vi seu número de Whatsapp no GitHub e queria trocar uma ideia."
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={ wp }
                    alt="Botão Whatsapp"
                    width="50em"
                    className="img-responsive"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      <h5 className="copyright">Copyright ©2021 All rights reserved</h5>
      </div>
    </footer>
  )
}

export default Footer;

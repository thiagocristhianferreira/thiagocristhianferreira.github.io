import React from 'react';

function Header() {
  return (
      <header className="masthead">
        <nav className="nav nav-masthead inner fixed-top" style={{marginTop: '1%'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <button type="button" className="btn btn-outline-success mr-3 ml-3"><a className="nav-link h3 active" href="/">Home</a></button>
            <button type="button" className="btn btn-outline-success mr-3 ml-3"><a className="nav-link h3 active" href="/sobre">Sobre</a></button>
            <button type="button" className="btn btn-outline-success mr-3 ml-3"><a className="nav-link h3 active" href="/habilidades">Habilidades</a></button>
            <button type="button" className="btn btn-outline-success mr-3 ml-3"><a className="nav-link h3 active" href="/projetos">Projetos</a></button>
          </div>
        </nav>
      </header>
  )
}


export default Header;

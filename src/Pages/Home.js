import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div
      style={{width: '90%', marginTop: '15%'}}
    >
      <Header />
      <main role="main" className="inner cover">
      <div className="media">
        <img
          className="mr-3"
          src="https://scontent.ffrc6-1.fna.fbcdn.net/v/t1.6435-9/130303019_10221644239967311_9172931745453326011_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFSpQxtaunYiRnV5DiJAd4ovAlzsNXK1nS8CXOw1crWdLqlkdfctej7PEWldVmOqNs&_nc_ohc=dGOZAoN8y4sAX9TzpNU&_nc_oc=AQnINvDlHou5gt6o9uH_CBcLsxWHecKFcc6HmcQcMpMBoxKvfwQssVjFte9QwjQa6dWDH21ZdLgU8VCr66U3Innd&_nc_ht=scontent.ffrc6-1.fna&oh=7fe31a9ef9d31c849f003f7769565cda&oe=609759A4"
          alt="Foto do Thiago"
          width="20%"
          style={{borderRadius: '100%'}}
        />
        <div
          className="media-body"
          style={{display: 'inline-block', textAlign: 'left'}}
        >
          <h3 className="mt-0">Olá, Eu sou</h3>
          <h1 className="mt-0">Thiago Cristhian Ferreira</h1>
          <h4 className="mt-0">Desenvolvedor Front-End Júnior</h4>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-around">
        <button
          type="button"
          className="btn btn-lg btn-outline-success"
        >
          Meus Projetos
        </button>
        <button
          type="button"
          className="btn btn-lg btn-outline-success"
        >
          Minhas Habilidades
        </button>
      </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;

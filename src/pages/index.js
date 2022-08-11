import { useEffect, useState } from 'react';
import './index.css';

import Logo from '../img/logo.svg';
import Foto from '../img/foto-apresentacao.svg';
import FotoUser from '../img/foto.jpg';

import empresas from '../componente/expUser/userExp';

import curriculo from '../files/curriculo.pdf';

import Cards from '../componente/cardUser/cardUser';

import axios from 'axios';

function Index() {
  let myInfo = "Bom o que estou procurando é uma oportunidade para que possa ingressar na área de desenvolvedor, "+
                "estes aqui do lado são alguns dos meus últimos contratos profissionais, e nelas apresento algumas informações é so clicar.";
  const [info, setInfo] = useState("");
  const [card, setCard] = useState();

   async function getCarInfo (){
    const formData = new FormData();
    formData.append('appQuery', 'validLogin');
    formData.append('typeSql', 'selectAllprojetos');
    await axios("https://andersonpadovani.online/crudSql/api.php", {
      method: 'POST',
      data: formData
    }).then(({data}) => {
      if(data.status && data.infoData !== []){
        setCard(data.infoData);
      }
    })
  }

  useEffect(() => {
    getCarInfo();
  },[])

  return (
    <div className="App">

      <div className='container'>
        
        <div className='menu'>

          <img src={Logo} alt='Logo marca do author'></img>

          <ul>
            <li key="1"><a href='/'>Home</a></li>
            <li key="2"><a href='#sobre'>Quem sou</a></li>
            <li key="3"><a href='#experiencias'>Experiência</a></li>
            <li key="4"><a href='#projetos'>Projetos</a></li>
          </ul>

        </div>
        
        <hr></hr>

        <div className='apresentacao'>
          
          <div className='card'>
            <img src={Foto} alt='Foto ilustratica programadores'></img>
            
            <p>Olá, me chamo <span>Anderson Ramos Padovani</span><br></br>e esta é minha página de portifólio profissional pessoal.</p>
          </div>
          
          <button><a href='#sobre'>More ↓</a></button>

        </div>

        <div id='sobre' className='quem-sou'>
          <img className='foto' src={FotoUser} alt='Foto Pessoal do author'></img>

          <div className='sobre'>
            <h1>SOBRE MIM</h1>

            <h3>Cascavel, Paraná</h3>

            <p> Olá, no momento estou trabalhando com montagem de veiculos, estou atualmente em transição
                de carreira dedicando-me ao meus estudos. Meu objetivo em um futuro breve é
                atuar como analista e desenvolvedor de sistemas, focando no back-end e sempre 
                olhando para o front-end, até que eu atinja meu objetivo de aprendizado
                que é ser um desenvolvedor full-stak. E para isto estou contando com uma oportunidade onde
                possa mostrar meu conhecimento e minha força de vontade e comprometimento com meus objetivos.
            </p>

            <div className='btn-ctn'>
              <div className='buttons'>
                <input className='button-sobre' id='download' type='submit' value='Curriculo' onClick={(e) => {
                  e.preventDefault();
                  window.open(curriculo);
                }}></input>
              </div>

              <div className='contato'>
                <a href='https://www.linkedin.com/in/anderson-padovani-047266180/' target={"_blank"} rel="noreferrer" ><img src={require('../img/linkedin.png')} alt="linkedin"></img></a>
                <a href='https://github.com/AndersonPadovani' target={"_blank"} rel="noreferrer" ><img src={require('../img/github.png')} alt="github"></img></a>
                <a href='https://www.instagram.com/anderson_r_padovani/' target={"_blank"} rel="noreferrer" ><img src={require('../img/instagram.png')} alt="instagram"></img></a>
                <a href='https://www.facebook.com/AndersonR.Padovani' target={"_blank"} rel="noreferrer" ><img src={require('../img/facebook.png')} alt="facebook"></img></a>
                <a href='(45) 9 9953-0893' target={"_blank"} ><img src={require('../img/whatsapp.png')} alt="whatsapp"></img></a>
              </div>
            </div>
          </div>

        </div>

        <div id='experiencias' className='experiencias'>
          <h2>Experiencias Profissionais</h2>

          <div className='exps'>
            <div className='empresas'>
              <ul>
                {
                   Object.keys(empresas).map(work => <button onClick={() => setInfo(work)}><li key={Math.random() * (9, 100).toString()} >{work}</li></button> )
                }
              </ul>
            </div>

            <div className='infoCargo'>
              <p>{info ? empresas[info] : myInfo}</p>
            </div>
          </div>

        </div>

        <div id='projetos' className='projetos'>
          { 
            card 
            ? Object.keys(card).map((k, i) => {
                return <Cards title={card[k]['title']} image={require('../img/'+card[k]['img'])} info={card[k]['info']} url={card[k]['url']} ver={card[k]['visible']} />
                })
            : <p>Desculpe, não emcontrei nenhum projeto em nosso banco de dados.</p>
          }
                                 
        </div>

        <footer className='footer'>

        </footer>

      </div>

    </div>
  );
}

export default Index;

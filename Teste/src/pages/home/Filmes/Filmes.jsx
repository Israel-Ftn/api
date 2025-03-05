import { useEffect, useState } from 'react';
import './Filmes.css';


function Favoritos(){
  const pathImg = "https://image.tmdb.org/t/p/w500";
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])

  return(
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
               <img src={`${pathImg}${filmes.poster_path}`} alt="" />
              <div>
              
               
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;
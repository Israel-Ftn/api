import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./Home.css";
function Home() {
  const pathImg = "https://image.tmdb.org/t/p/w500";
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    async function carregandoFilme() {
      const Response = await api.get("movie/now_playing", {
        params: {
          api_key: "0fb20ef1e6334ea50fd5e8d6a47dd211",
          language: "pt-BR",
          page: 1,
        },
      });
      console.log(Response.data.results);
      setFilme(Response.data.results);
    }
    carregandoFilme();
  }, []);

 
  
  return (
    <div className="filmes">
      <div className="lista">
        {filme.map((filmes) => {
          return (
            <article key={filmes.id}>
              <div className="container">
                <strong className="filme">
                  <img src={`${pathImg}${filmes.poster_path}`} alt="" />
                </strong>
                <div className="description">
                  <p className="sobre">{filmes.overview}</p>
                  <div className="classes">
                  <p className="vote_average">
                    Avaliação: {filmes.vote_average}/10
                  </p>
                  <a className="trailer" href={`https://youtube.com/results?search_query=${filmes.title}trailer`}>Trailer</a>
                </div>
              
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

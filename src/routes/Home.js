import React, { useState, useEffect } from 'react';
import axios from "axios";
import Movies from "../components/Movies";
import "./Home.css";

function Home() {
  const [data, setData] = useState({
    isLoading: true,
    movies: []
  });

  const didMount = React.useRef(false);

  var getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year");
    setData({ isLoading: false, movies });
  }

  useEffect(() => {
    getMovies();

    return () => {
      didMount.current = true;
    };
  }, []);

  return (
    <section className="container">
      {data.isLoading ? (
        <div className="loader">
            <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {data.movies.map(movie => (
            <Movies
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;

import React, { Fragment, useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [movie, setMovie] = useState(true)

  const gettingInputValueHandler = (e) => {

    e.preventDefault();

    setQuery(e.target.value);

    if (e.target.value === '') {
      setResults([]);
      setMovie(true)
    }
    else {
      setMovie(false)
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP__TMD_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((response) => response.json())
        .then((result) => setResults(result.results));
    }

  };

  return (
    <Fragment>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search for a movie"
                value={query}
                onChange={gettingInputValueHandler}
              />
            </div>
            <div>
              {results.map(result => (
                <ResultCard key={result.id} movie={result} />
              ))}
            </div>
            {movie &&
              <div style={{ marginTop: '10rem', textAlign: 'center', fontSize: '2rem', textTransform: 'capitalize', fontWeight: 'bold' }}>Search for your prefered movie</div>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Add;

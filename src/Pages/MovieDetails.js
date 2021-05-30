import React, { useState, useEffect } from "react";

//Styled components
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//Importing he movie details
import { MovieState } from "../movieState";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Movie>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageSecond>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageSecond>
        </Movie>
      )}
    </>
  );
};

//Award component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
//Styled thing
const Movie = styled.div`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  display: flex;
  min-height: 80vh;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;
const StyledAward = styled.div`
  padding: 2rem;
  .line {
    height: 0.5rem;
    width: 100%;
    background: #23d997;
    margin: 1rem 0;
  }
  h3 {
    font-size: 1.4rem;
  }
  p {
    padding: 1.2rem 0;
  }
`;
const ImageSecond = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
export default MovieDetails;

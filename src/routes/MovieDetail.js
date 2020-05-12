import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Movies from "../components/Movies";

function MovieDetail(props){

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (props.location.state === undefined) {
      setRedirect(true);
    }
  }, [props.location.state]);

  if (redirect){
    return  <Redirect to="/" />;
  } else {
    // Since the below rendering happens first before it gets props.location,
    // we need to return null for the first time, and then when it gets props,
    // return the contents
    if (props.location.state){
      return (
        <Movies
          key={props.location.state.title}
          year={props.location.state.year}
          title={props.location.state.title}
          summary={props.location.state.summary}
          poster={props.location.state.poster}
          genres={props.location.state.genres}
        />
      )
    } else {
      return null;
    }
  }
}

export default MovieDetail;

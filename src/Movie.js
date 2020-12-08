function Movie(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>Run time:</h3>
            <p>{props.hours} hours {props.minutes} minutes</p>
        </div>
    );
}

export default Movie;
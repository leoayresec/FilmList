function setTrending(movies) {
    const action = {
        type: 'SET_TRENDING',
        payload: movies
    }
    return action
}

function setWatched(movies) {
    const action = {
        type: 'SET_WATCHED',
        payload: movies
    }
    return action
}

function setBoxOffice(movies) {
    const action = {
        type: 'SET_BOXOFFICE',
        payload: movies
    }
    return action
}

function setAnticipated(movies) {
    const action = {
        type: 'SET_ANTICIPATED',
        payload: movies
    }
    return action
}

function setIsLoading(movies) {
    const action = {
        type: 'IS_LOADING',
        payload: movies
    }
    return action
}

function setMovies(movies, type) {
    switch (type) {

        case 'trending':
            return setTrending(movies);
        case 'watched':
            return setWatched(movies);
        case 'boxoffice':
            return setBoxOffice(movies);
        case 'anticipated':
            return setAnticipated(movies);


        default:
            break;
    }
}
export { setMovies, setIsLoading }
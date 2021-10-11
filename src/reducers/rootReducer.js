const initState = {
    posts: [
        {id: 1, title: 'Mr Nice Guy', body: 'Jachkie Chan was fantastic in this movie'},
        {id: 2, title: 'The Terminator', body: 'Arnold Schwarzeneger was great in this movie'},
        {id: 3, title: 'Ogbori Elemosho', body: 'Lere Paimo was great in this movie'},
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const defaultState = {
    arrMems: [],

    arrProjects: []
}

const reducer = (state = defaultState, action) => {
    if (action.type === 'LOAD_MEM') return { ...state, arrMems: action.arrMems };
    if (action.type === 'LOAD_PRO') return { ...state, arrProjects: action.arrMems }
    return state
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
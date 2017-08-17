import getAllMemAPI from '../api/getAllMemAPI';
import getAllProAPI from '../api/getAllProAPI';

export function getAllMem() {
    return dispatch => {
        getAllMemAPI()
        .then(Members => dispatch({ type: 'LOAD_MEM', arrMems: Members }))
        .catch((err) => {
             console.log(err);
        });
    };
}

export function getAllPro() {
    return dispatch => {
        getAllProAPI()
        .then(Projects => dispatch({ type: 'LOAD_PRO', arrProjects: Projects }))
        .catch((err) => {
             console.log(err);
        });
    };
}
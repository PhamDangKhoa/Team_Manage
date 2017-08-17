import axios from 'axios';

const getAllMemAPI = () => axios.get('http://localhost:4000/member')
.then(res => res.data);

export default getAllMemAPI;

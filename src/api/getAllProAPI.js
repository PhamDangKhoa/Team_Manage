import axios from 'axios';

const getAllProAPI = () => axios.get('http://localhost:4000/project')
.then(res => res.data);

export default getAllProAPI;

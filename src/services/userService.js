import axios from "./customAxios";

const userApi = {
    login: (data) => {
        return axios.post('/login', data);
    },

    getAllUsers: (data) => {
        return axios.get('/users', { params: data });
    }
}

export default userApi;
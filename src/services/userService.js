import axios from "./customAxios";

const userApi = {

    login: (data) => {
        return axios.post('/login', data);
    },

    getAllUsers: (data) => {
        return axios.get('/users', { params: data });
    },

    saveUser: (data) => {
        return axios.post('/user', data);
    },

    deleteUser: (email) => {
        return axios.delete(`/user/${email}`);
    }

}

export default userApi;
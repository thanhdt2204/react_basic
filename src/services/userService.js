import axios from "./customAxios";

const userApi = {
    login: (data) => {
        return axios.post('/login', data);
    },

    getAllUsers: (token) => {
        return axios.get('/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}

export default userApi;
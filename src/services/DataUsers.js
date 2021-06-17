import http from "./http-common";

class DataUsersService {
    
    getAllUsers(){
        return http.get(`/api/users?page=2`);
    }

    getUserById(id){
        return http.get(`/api/users/${id}`);
    }

    createUser(data){
        return http.post(`/api/users`,data);
    }

    updateUser(id, data){
        return http.put(`/api/users/${id}`, data);
    }

    deleteUser(id){
        return http.delete(`/api/users/${id}`);
    }
    

}

export default new DataUsersService();
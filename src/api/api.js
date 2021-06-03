import * as axios from "axios";

export let getUsers = (currentPage = 1, pageSize = 15) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => { //цепочка promise для отделения лишней информации с запроса и передача внутрь нужной
        return response.data;
    });
}
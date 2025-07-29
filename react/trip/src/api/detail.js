import axios  from "axios";

export const getDetail =async (id) =>{
    return axios.get(`/detail/${id}`)
} 
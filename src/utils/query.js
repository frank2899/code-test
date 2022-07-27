import axios from 'axios';

export default {
    getAllList : async () => {
        let res = await axios.get(`http://localhost:3005/api/list`);
        return res.data || [];
    },
    addList : async (title, author) => {
        let res = await axios.post(`http://localhost:3005/api/list/`, { title, author })
        return res.data;
    },
    deleteList : async (id) => {
        let res = await axios.delete(`http://localhost:3005/api/list/${id}`);
        return res.data || [];   
    }
}
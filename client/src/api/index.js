import axios from "axios";

const url = "http://localhost:5000/list";

export const fetchItems = () => axios.get(url);
export const addItem = (item) => axios.post(url, item);
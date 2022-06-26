import { updateList } from "../reducers/list";
import { fetchItems, addItem, deleteItem } from "../api/index";

const url = "http://localhost:5000/list";

export const fetchList = () => async (dispatch) => {
  try {
    const { data } = await fetchItems();
    dispatch(updateList(data));
  } catch (error) {
    console.log(error.message);
  }
}

export const asyncAddItem = (item) => async (dispatch) => {
  try {
    await addItem(item);
  } catch (error) {
    console.log(error.message);
  }
}

export const actDeleteItem = (id) => async (dispatch) => {
  try {
    await deleteItem(id);
  } catch (error) {
    console.log(error.message);
  }
}
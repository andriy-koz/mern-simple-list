import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchList, asyncAddItem, actDeleteItem } from "./actions/list";
import { updateList } from "./reducers/list";

function App() {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateList(list));
  }, [list]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(asyncAddItem({ value: inputValue }))
    dispatch(fetchList());
  }

  const handleRemove = async (id) => {
    await dispatch(actDeleteItem(id));
    dispatch(fetchList());
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button>Agregar</button>
    </form>
    <ul>
      {list.map(item => <li key={item._id}>{item.value}<button onClick={() => handleRemove(item._id)}>X</button></li>)}
    </ul>
  </>
};

export default App

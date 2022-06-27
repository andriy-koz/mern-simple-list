import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchList, asyncAddItem, actDeleteItem } from "./actions/list";
import { updateList } from "./reducers/list";

const btnStyles = "bg-gray-900/50 text-white py-1 px-3 rounded-md";


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
    setInputValue("");
  }

  const handleRemove = async (id) => {
    await dispatch(actDeleteItem(id));
    dispatch(fetchList());
  }

  return <div className="max-w-sm bg-red-500/75 mx-auto p-4 rounded-md">
    <form onSubmit={handleSubmit} className="flex justify-between">
      <input className="w-3/4 py-1 px-3 border-none outline-none bg-white/75" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button className={btnStyles}>Agregar</button>
    </form>
    <ul className="space-y-1 mt-3 p-2 text-white font-bold bg-red-900/50 rounded-sm">
      {list.map(item => <li className="flex justify-between" key={item._id}>{item.value}<button className={`${btnStyles} font-normal`} onClick={() => handleRemove(item._id)}>X</button></li>)}
    </ul>
  </div>
};

export default App

import ListItem from "../models/listItem.js";

export const getItems = async (req, res) => {
  try {
    const list = await ListItem.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const addItem = async (req, res) => {
  const item = req.body;

  const newItem = new ListItem(item);

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    await ListItem.deleteOne({ _id: id });
    res.status(200).json(ListItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
import ListItem from "../models/listItem.js";

export const getItems = async (req, res) => {
  try {
    const list = await ListItem.find();
    console.log(list);
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
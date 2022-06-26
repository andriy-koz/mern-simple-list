import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  value: String,
  id: String
});

const ListItem = mongoose.model("ListItem", itemSchema);

export default ListItem;
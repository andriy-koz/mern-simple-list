import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  value: String
});

const ListItem = mongoose.model("ListItem", itemSchema);

export default ListItem;
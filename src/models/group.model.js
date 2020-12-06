const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupModel = {
  group_name: {
    type: String,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "member",
    },
  ],
};

const groupSchema = new Schema(groupModel, {
  collection: "group",
});

const Group = mongoose.model("group", groupSchema);
module.exports = Group;

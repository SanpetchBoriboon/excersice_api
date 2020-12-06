const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberModel = {
  group_id: {
    type: Schema.Types.ObjectId,
    ref: "group",
  },
  member_name: {
    type: String,
  },
  score: {
    type: Number,
  },
};

const memberSchema = new Schema(memberModel, { collection: "member" });

const Member = mongoose.model("member", memberSchema);
module.exports = Member;

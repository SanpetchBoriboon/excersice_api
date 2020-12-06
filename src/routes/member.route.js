const router = require("express").Router();
const http = require("http-status");
const GroupModel = require("../models/group.model");
const MemberModel = require("../models/member.model");

const { memberUtil } = require("../utils");

const { mapDataMember } = memberUtil;

router.get("/get_all_member_group", async (req, res, next) => {
  try {
    const data = await GroupModel.find({})
      .sort({ date: -1 })
      .populate("members");
    if (!data) {
      return res.status(http.NOT_FOUND).send([]);
    }
    const members = mapDataMember(data);
    const payload = {
      group_member: members,
    };
    res.status(http.OK).send(payload);
  } catch (error) {
    res.status(http.BAD_REQUEST).send(error);
  }
});

router.get("/:group_id/get_member_group", async (req, res, next) => {
  const { group_id } = req.params;
  try {
    const data = await GroupModel.findById(group_id)
      .sort({
        date: -1,
      })
      .populate("members");
    if (!data) {
      return res.status(http.NOT_FOUND).send([]);
    }
    const members = mapDataMember([data]);
    const payload = {
      group_member: members,
    };
    res.status(http.OK).send(payload);
  } catch (error) {
    res.status(http.BAD_REQUEST).send(error);
  }
});

router.post("/:group_id/group", async (req, res, next) => {
  const { group_id } = req.params;
  try {
    const newMember = new MemberModel(req.body);
    const groupModel = await GroupModel.findById(group_id);
    newMember.group_id = groupModel;
    await newMember.save();
    groupModel.members.push(newMember);
    await groupModel.save();
    res.status(http.CREATED).send({ message: "Create member success!!" });
  } catch (error) {
    res.status(http.BAD_REQUEST).send({ error });
  }
});

module.exports = router;

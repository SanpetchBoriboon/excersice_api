const router = require("express").Router();
const http = require("http-status");
const groupModel = require("../models/group.model");
const { groupUtil } = require("../utils");

router.get("/", async (req, res, next) => {
  try {
    const data = await groupModel.find({}).sort({ date: -1 });
    if (!data) {
      return res.status(http.NOT_FOUND).send([]);
    }
    const payload = groupUtil.mapDataGrop(data);
    res.status(http.OK).send(payload);
  } catch (error) {
    res.status(http.BAD_REQUEST).send(error);
  }
});

router.post("/", async (req, res, next) => {
  const { group_name } = req.body;
  try {
    const hasGroup = await groupModel.findOne({ group_name });
    if (hasGroup) {
      console.log(hasGroup);
      return res.status(http.OK).send({ message: "Group name is exist" });
    }
    const newGroupModel = new groupModel({ group_name });
    await newGroupModel.save();
    res.status(http.CREATED).send({ message: "Create group name success!!" });
  } catch (error) {
    res.status(http.BAD_REQUEST).send({ error });
  }
});

module.exports = router;

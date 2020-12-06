function mapGrop(data) {
  const result = data.map((group) => {
    return {
      group_id: group._id,
      group_name: group.group_name,
    };
  });
  return result;
}

module.exports = { mapGrop };

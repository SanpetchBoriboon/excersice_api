function mapDataMember(data) {
  const result = data.map((groupMember) => {
    const member_mapping = groupMember.members.map((member) => {
      return {
        member_name: member.member_name,
        score: member.score,
        grade: groupGrade(member.score),
      };
    });

    return {
      group_name: groupMember.group_name,
      members: member_mapping,
      average_score: findAvgScore(groupMember.members),
      max_score: findMaxMinScore(groupMember.members).max_score,
      min_score: findMaxMinScore(groupMember.members).min_score,
    };
  });

  return result;
}

function groupGrade(score) {
  let result = "";
  if (score >= 80) {
    result = "A";
  } else if (score >= 70) {
    result = "B";
  } else if (score >= 60) {
    result = "C";
  } else {
    result = "F";
  }
  return result;
}

function findAvgScore(groupMember) {
  if (groupMember.length === 0) {
    return "N/A";
  }
  let totalScore = 0;
  let totalMember = groupMember.length;
  groupMember.forEach((member) => {
    totalScore = totalScore + member.score;
  });
  const result = totalScore / totalMember;
  return Number(Number.parseFloat(result).toFixed(2));
}

function findMaxMinScore(groupMember) {
  if (groupMember.length === 0) {
    return {
      max_score: "N/A",
      min_score: "N/A",
    };
  }
  const result = groupMember.sort(function (max, min) {
    return min.score - max.score;
  });

  return {
    max_score: result[0].score,
    min_score: result[result.length - 1].score,
  };
}

module.exports = { mapDataMember, groupGrade, findAvgScore, findMaxMinScore };

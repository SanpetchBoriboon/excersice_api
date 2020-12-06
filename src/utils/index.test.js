const { groupGrade, findAvgScore, findMaxMinScore } = require("./index");

describe("groupGrade", () => {
  it("score more than or equal 80 should return grade A", () => {
    expect(groupGrade(80)).toBe("A");
  });
  it("score more than or equal 70 should return grade B", () => {
    expect(groupGrade(70)).toBe("B");
  });
  it("score more than or equal 60 should return grade C", () => {
    expect(groupGrade(60)).toBe("C");
  });
  it("score less than 60 should return grade F", () => {
    expect(groupGrade(59)).toBe("F");
  });
});

describe("findAvgScore", () => {
  it("find avg score for group member 3 member and no fixed", () => {
    const groupMember = [{ score: 10 }, { score: 10 }, { score: 10 }];
    expect(findAvgScore(groupMember)).toBe(10.0);
  });

  it("find avg score for group member 4 member and has fixed", () => {
    const groupMember = [
      { score: 90 },
      { score: 85 },
      { score: 80 },
      { score: 70 },
    ];
    expect(findAvgScore(groupMember)).toBe(81.25);
  });

  it("find avg score for group member but not member", () => {
    const groupMember = [];
    expect(findAvgScore(groupMember)).toBe("N/A");
  });
});

describe("Max Min Score", () => {
  it("max score is 90 and min score is 70", () => {
    const groupMember = [
      { score: 80 },
      { score: 85 },
      { score: 90 },
      { score: 70 },
    ];

    expect(findMaxMinScore(groupMember)).toEqual({
      max_score: 90,
      min_score: 70,
    });
  });

  it("max score is 85", () => {
    const groupMember = [
      { score: 0 },
      { score: 85 },
      { score: 0 },
      { score: 70 },
    ];

    expect(findMaxMinScore(groupMember)).toEqual({
      max_score: 85,
      min_score: 0,
    });
  });

  it("should return N/A", () => {
    const groupMember = [];
    expect(findMaxMinScore(groupMember)).toEqual({
      max_score: "N/A",
      min_score: "N/A",
    });
  });
});

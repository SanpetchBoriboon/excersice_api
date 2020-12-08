const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const app = require("../../../app");
describe("testing-member-routes", () => {
  it("GET /get_all_member_group - success", async () => {
    const { body, status } = await request(app).get(
      "/api/member/get_all_member_group"
    );

    const expected = {
      group_member: [
        {
          group_name: "G1",
          members: [
            { member_name: "G1-1", score: 90, grade: "A" },
            { member_name: "G1-2", score: 85, grade: "A" },
            { member_name: "G1-3", score: 80, grade: "A" },
            { member_name: "G1-4", score: 70, grade: "B" },
          ],
          average_score: 81.25,
          max_score: 90,
          min_score: 70,
        },
        {
          group_name: "G2",
          members: [
            { member_name: "G2-1", score: 95, grade: "A" },
            { member_name: "G2-2", score: 70, grade: "B" },
            { member_name: "G2-3", score: 70, grade: "B" },
            { member_name: "G2-4", score: 70, grade: "B" },
            { member_name: "G2-5", score: 60, grade: "C" },
          ],
          average_score: 73,
          max_score: 95,
          min_score: 60,
        },
        {
          group_name: "G3",
          members: [{ member_name: "G3-1", score: 65, grade: "C" }],
          average_score: 65,
          max_score: 65,
          min_score: 65,
        },
        {
          group_name: "G4",
          members: [],
          average_score: "N/A",
          max_score: "N/A",
          min_score: "N/A",
        },
      ],
    };

    expect(status).toBe(200);
    expect(body).toEqual(expected);
  });

  it("GET /get_member_group - success", async () => {
    const { body, status } = await request(app).get(
      "/api/member/5fcb34e1ffac10063d4adad2/get_member_group"
    );
    const expected = {
      group_member: [
        {
          group_name: "G1",
          members: [
            { member_name: "G1-1", score: 90, grade: "A" },
            { member_name: "G1-2", score: 85, grade: "A" },
            { member_name: "G1-3", score: 80, grade: "A" },
            { member_name: "G1-4", score: 70, grade: "B" },
          ],
          average_score: 81.25,
          max_score: 90,
          min_score: 70,
        },
      ],
    };

    expect(status).toBe(200);
    expect(body).toEqual(expected);
  });
});

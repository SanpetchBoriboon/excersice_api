const { mapDataGrop } = require("./group.util");

describe("mapDataGrop", () => {
  it("should map data of group", () => {
    const mock_data = [
      {
        members: [
          "5fcb3506ffac10063d4adad6",
          "5fcb3511ffac10063d4adad8",
          "5fcb351cffac10063d4adad9",
          "5fcb3524ffac10063d4adada",
        ],
        _id: "5fcb34e1ffac10063d4adad2",
        group_name: "G1",
        __v: 4,
      },
      {
        members: [
          "5fcb3538ffac10063d4adadb",
          "5fcb353dffac10063d4adadd",
          "5fcb3540ffac10063d4adade",
          "5fcb3543ffac10063d4adadf",
          "5fcb354effac10063d4adae0",
        ],
        _id: "5fcb34e4ffac10063d4adad3",
        group_name: "G2",
        __v: 5,
      },
      {
        members: ["5fcb3561ffac10063d4adae1"],
        _id: "5fcb34e7ffac10063d4adad4",
        group_name: "G3",
        __v: 1,
      },
      {
        members: [],
        _id: "5fcb34e9ffac10063d4adad5",
        group_name: "G4",
        __v: 0,
      },
    ];

    const expected_data = [
      { group_id: "5fcb34e1ffac10063d4adad2", group_name: "G1" },
      { group_id: "5fcb34e4ffac10063d4adad3", group_name: "G2" },
      { group_id: "5fcb34e7ffac10063d4adad4", group_name: "G3" },
      { group_id: "5fcb34e9ffac10063d4adad5", group_name: "G4" },
    ];

    const actual_data = mapDataGrop(mock_data);

    expect(actual_data).toEqual(expected_data);
  });
});

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
    ];

    const expected_data = [
      { group_id: "5fcb34e1ffac10063d4adad2", group_name: "G1" },
    ];

    const actual_data = mapDataGrop(mock_data);

    expect(actual_data).toEqual(expected_data);
  });
});

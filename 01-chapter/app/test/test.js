function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}

describe("[Jest test sample] ", () => {
  test("primitive type test sample", () => {
    expect(1).toBe(1);
  });

  test("object type test sample", () => {
    expect(getUser(1)).toEqual({
      id: 1,
      email: `user1@test.com`,
    });
  });
});

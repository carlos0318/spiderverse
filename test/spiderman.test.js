describe("Unit Tests for Spiderman class", () => {
  test('1) Create an spiderman object', () => {
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");

    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(31);
    expect(andrewGarfield.studio).toBe("Sony");
  });
})

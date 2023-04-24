const googleSearch = require("./script");

dbMock = ["dog.com", "cheespuff.com", "disney.com", "dogpictures.com"];

describe("googleSearch", () => {
  it("this is a  silly test ", () => {
    expect("hello").toBe("hello");
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock));
  });

  it("work with undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more then 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});

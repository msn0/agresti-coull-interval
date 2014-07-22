describe("agresti", function () {
  it("should return two values - left and right", function () {
    expect(agresti(1,2).left).toBeDefined();
    expect(agresti(1,2).right).toBeDefined();
  });
  it("left should be less than right", function () {
    expect(agresti(1,2).left < agresti(2,3).left).toBeTruthy();
  });
  it("should return (0,0) for up=0, total=0", function () {
    var a = agresti(0, 0);
    expect(a.left).toEqual(0);
    expect(a.right).toEqual(0);
  });
  it("should return higher value for more up's", function () {
    expect(agresti(1, 10).left < agresti(2, 10).left).toBeTruthy();
    expect(agresti(1, 10).right < agresti(2, 10).right).toBeTruthy();
  });
});
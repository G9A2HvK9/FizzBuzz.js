describe("rangeArray", function() {
  var rangeArray = []
  for (var i = 1; i <= 100; i++ ){
    rangeArray.push(i)
  }

  it("Should contain the numbers 1, 25, 50, 75 and 100", function() {
    expect(rangeArray).toContain(1 && 25 && 50 && 75 && 100)
  })

  it("Should contain some further random integers between 1 and 100", function() {
    expect(rangeArray).toContain(7 && 12 && 28 && 35 && 42 && 56 && 63 && 72 && 81 && 99)
  })

  it("Should not contain edge-cases 0 and 101", function() {
    expect(rangeArray).not.toContain(0 || 101)
  })
})

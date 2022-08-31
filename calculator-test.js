
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years: 20,
    rate: 3
  }
});
expect(calculateMonthlyPayment(values)).toEqual('277.30')


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 49947,
    years: 20,
    rate: 3
  }
});
expect(calculateMonthlyPayment(values)).toEqual('277.00')


/// etc

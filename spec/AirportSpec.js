describe("Airport", function(){
  var airport;
  beforeEach(function(){
  airport = new Airport();
  });

  describe('initialize', function(){
    it('checks default capacity is set', function(){
      expect(airport.capacity).toEqual("DEFAULT_CAPACITY");
    });
  });
});

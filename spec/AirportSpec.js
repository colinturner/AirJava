describe("Airport", function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
    console.log(airport);
  });

  describe('initialize', function(){
    it('checks default capacity is set', function(){
      expect(airport.capacity()).toEqual(DEFAULT_CAPACITY);
    });

    it('checks default capacity can be overridden', function() {
      airport = new Airport(80)
      expect(airport.capacity()).toEqual(80)
    });
  });

});

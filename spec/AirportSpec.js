describe("Airport", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
  });

  describe('initialize', function(){
    it('checks default capacity is set', function(){
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });

    it('checks default capacity can be overridden', function() {
      airport = new Airport(80)
      expect(airport.capacity).toEqual(80)
    });
  });
  
  describe('land', function(){
    beforeEach(function(){
      plane = new Plane();
    });

    it('instructs the plane to land', function(){
      airport.land(plane)
      expect(airport.land).toHaveBeenCalled();
    });
  });
});

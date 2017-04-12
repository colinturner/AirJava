'use strict';

function Airport(){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}
Airport.prototype.planes = function(){
  return this._hangar;
 };

Airport.prototype.clearForLanding = function(plane){
  if(this.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar = [];
};

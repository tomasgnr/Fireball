//Returns a number whose value is limited to the given range.
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

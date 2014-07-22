/* exported agresti */

var agresti = function (positiveScore, total) {

  "use strict";

  if (total === 0) {
    return {
      left: 0,
      right: 0
    };
  }

  // z is 1-alpha/2 percentile of a standard
  // normal distribution for error alpha=5%
  var z = 1.96;

  // implement the algorithm
  // (http://goo.gl/6fwGqN)
  var nTilde = total + z * z;
  var pTilde = (positiveScore + z * z / 2) / nTilde;
  var a = z * Math.sqrt(pTilde * (1 - pTilde) / nTilde);

  return {
    left: pTilde + a,
    right: pTilde - a
  };
};
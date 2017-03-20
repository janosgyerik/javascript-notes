// Every object is linked to a prototype object from which it can inherit properties.
// All objects created from object literals are linked to `Object.prototype`,
// an object that comes standard with JavaScript.
//
// When you make a new object, you can select the objet that should be its prototype.
// The mechanism that JavaScript providers to do this is messy and complex,
// but it can be significantly simplified.
//
// This `create` method creates a new object that uses an old obejct as its prototype.
//
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

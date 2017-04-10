Objects
=======

Retrieval
---------

The `||` operator can be used to fill in default values:

    var status = flight.status || "default";

Attempting to retrieve values from `undefined` will throw a `TypeError` exception.
This can be guarded against with the `&&` operator:

    flight.equipment && flight.equipment.model
    
Reference
---------

Objects are passed around by reference, they are never copied.

Prototype
---------

Every object is linked to a prototype object from which it can inherit properties.
All objects created from object literals are linked to `Object.prototype`,
an object that comes standard with JavaScript.

When you make a new object, you can select the objet that should be its prototype.
The mechanism that JavaScript providers to do this is messy and complex,
but it can be significantly simplified.

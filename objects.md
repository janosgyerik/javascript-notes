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
but it can be significantly simplified. (See [utils/functions.js](utils/functions.js).)

The prototype link has no effect on updating.
When we make changes to an object, its prototype is not touched.

The prototype link is used only in retrieval.
If we try to retrieve a property that doesn't exist in the object,
JavaScript tries to retrieve it from the prototype.
If the value doesn't exist in the prototype chain, `undefined` is returned.
This is called *delegation*.

The prototype relationship is dynamic. If we add a new property to a prototype,
that property becomes visible to all objects that inherit from it.

Reflection
----------

The `typeof` operator can be helpful in determining the type of a property.

Some care must be taken because any property on the prototype chain can produce a value,
including inherited properties.
The `hasOwnProperty` method does not look at the prototype chain.

Enumeration
-----------

The `for in` statement can loop over all of the property names in an object.
However, that includes functions as well, and properties inherited from the prototype chain.
It's common to filter the property names using the `hasOwnProperty` method.
The ordering of the properties is undefined.

Delete
------

The `delete` operator can be used to remove a property from an object, if it has one.
It will not touch any of the objects in the prototype chain.
Removing a property from the object may allow a property from the prototype chain to shine through.

Global abatement
----------------

One way to minimize the use of global variables is to create a single global variable for your application:

    var MYAPP = {};
    


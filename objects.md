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

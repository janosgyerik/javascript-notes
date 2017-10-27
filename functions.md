Functions
=========

Function objects
----------------

Functions in JavaScript are objects.
Objects are collections of name/value pairs having a hidden link to a prototype object.
Objects produced from object literals are linked to `Object.prototype`.
Function objects are linked to `Function.prototype`,
which is itself linked to `Object.prototype`.
Every function is also created with two additional hidden properties:

- the function's context
- the code that implements the function's behavior

Every function object is also created with a `prototype` property.
Its value is an object with a `constructor` property whose value is the function.
This is distinct from the hidden link to `Function.prototype`.
The meaning of this convoluted construction will be revealed in the next chapter.

Since functions are objects,
they can be used like any other value.
Functions can be stored in variables, objects, and arrays.
Functons can be passed as arguments to functions,
and functions can be returned from functions.
Also, since functions are objects, functions can have methods.

The thing that is special about functions is that they can be invoked.

Function literal
----------------

Function objects are created with function literals:

    var add = function (a, b) {
      return a + b;
    }

An optional name may be given after the `function` keyword.
A name can be used by debuggers and development tools to identify the function.

A function literal can appear anywhere that an expression can appear.
Functions can be defined inside of other functions.
An inner function of course has access to its parameters and variables.
An inner function also enjoys access to the parameters and variables of the functions it is nested within.
The function object created by a function literal contains a link to that outer context.
This is called *closure*.
This is the source of enormouse expressive power.

Invocation
----------

In addition to the declared parameters,
every function receives two additional parameters: `this` and `arguments`.
The `this` parameter is very important in object oriented programming,
and its value is determined by the *invocation pattern*.
There are four patterns of invocation in JavaScript:

1. method invocation pattern
2. function invocation pattern
3. constructor invocation pattern
4. apply invocation pattern

The patterns differ in how the bonus parameter `this` is initialized.

There is no runtime error when the number of arguments and the number of parameters do not match.
If there are too many argument values,
the extra argument values will be ignored.
If there are too few argument values,
the `undefined` value will be substituted for the missing values.
There is no type checking on argument values.

### The method invocation pattern

When a function is stored as a property of an object, we call it a *method*.
When a method is invoked, `this` is bound to that object.
If an invocation expression contains a refinement (that is, a `.` dot expression or [*subscript*] expression),
it is invoked as a method.

The binding of `this` to the object happens at invocation time.
This very late binding makes functions that use `this` highly reusable.
Methods that get their object context from `this` are called *public methods*.

### The function invocation pattern

When a function is not the property of an object, then it is invoked as a function.
When a function is invoked with this pattern, `this` is bound to the global object.
This was a mistake in the design of the language.
Had the language been designed correctly,
when the inner function is invoked,
`this` would be still bound to the `this` variable of the outer function.
A consequence of this error is that a method cannot employ an inner function to help it do its work
because the inner function does not share the method's access to the object as its `this` is bound to the wrong value.
Fortunately, there is an easy workaround.
If the method defines a variable and assigns it the value of `this`,
the inner function will have access to `this` through that variable.
By convention, the name of that variable is `that`.

    myObject.double = function() {
      var that = this;  // workaround
      var helper = function() {
        that.value = add(that.value, that.value);
      };

      helper();  // invoke helper as a function
    };

    // invoke double as a method
    myObject.double();

    console.log(myObject.value);
    
### The constructor invocation pattern

JavaScript is a *prototypal* inheritance language.
That means that objects can inherit properties directly from other objects.
The language is class-free.

Prototypal inheritance is powerfully expressive,
but is not widely understood.
JavaScript itself is not confident in its prototypal nature,
so it offers an object-making syntax that is reminiscent of the classical languages.
However, few classical programmers found prototypal inheritance to be acceptable,
and classically inspired syntax obscures the language's true prototypal nature.
It is the worst of both worlds.

If a function is invoked with the `new` prefix,
then a new object will be created with a hidden link to the value of the function's `prototype` member,
and `this` will be bound to that new object.

The `new` prefix also changes the behavior of the `return` statement.

Functions that are intended to be used with the `new` prefix are called *constructors*.
By convention, they are kept in variables with a capitalized name.
If a constructor is called without the `new` prefix,
very bad things can happen without a compile-time or runtime warning,
so the capitalization convention is really important.

Use of this style of constructor functions is not recommended.
We will see better alternatives in the next chapter.

### The apply invocation pattern

TODO

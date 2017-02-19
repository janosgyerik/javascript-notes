Grammar
=======

Names
-----

Reserved words, though most are not actually used.
It is not permitted to use a reserved word to name variables, parameters,
as the name of an object property in an object literal or following a dot in a refinement.

- `abstract`
- `boolean`, `break`, `byte`
- `case`, `catch`, `char`, `class`, `const`, `continue`
- `debugger`, `default`, `delete`, `do`, `double`
- `else`, `enum`, `export`, `extends`
- `false`, `final`, `finally`, `float`, `for`, `function`
- `goto`
- `if`, `implements`, `import`, `in`, `instanceof`, `int`, `interface`
- `long`
- `native`, `new`, `null`
- `package`, `private`, `protected`, `public`
- `return`
- `short`, `static`, `super`, `switch`, `synchronized`
- `this`, `throw`, `throws`, `transient`, `true`, `try`, `typeof`
- `var`, `volatile`, `void`
- `while`, `with`

Some words that are not reserved but should have been:

- `undefined`
- `NaN`
- `Infinity`

Numbers
-------

The single number type is equivalent to Java's `double`, 64-bit floating point.

`NaN` is the result of an operation that cannot produce a normal result.
`NaN` is not equal to any value, not even to itself.
Use the `isNaN` function to detect it.

Numbers have methods. The `Math` object contains methods that work with numbers, such as `Math.floor`.

Strings
-------

All characters in JavaScript are 16 bits wide.

The `\u` convention allows for specifying character code points numerically, for example:

    "A" === "\u0041"
    
Strings have a `length` property, are immutable, and have methods.

Statements
----------

The `switch`, `while`, `for`, and `do` statements are allowed to have
an optional `label` prefix that interacts with the `break` statement.

*falsy* values:

- `false`
- `null`
- `undefined`
- The empty string
- The number 0
- The number `NaN`


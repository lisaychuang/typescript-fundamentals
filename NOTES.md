2017/9/14 

# TYPESCRIPT Training notes

## Primitive Types
- Have no methods
- Immutable value
- 6 primitive types
    - `null`
    - `undefined`
    - `boolean`
    - `number`
    - `string`
    - `symbol`
- Everything else extends from `Object`

## Autoboxing
Whenever we want to change primitive types (e.g. split a string), it is auto-boxed and becomes an `Object` - so we can invoke methods

## Three types of variables
1. `var`: hoisted to top of function, function-scoped not block-scoped

2. `let`: NOT hoisted, block-scoped
3. `const`: NOT hoisted, block-scoped, mnmust be initialized at the time of declaration. **NO  reassignment of value** 

Best practice: for mutable values (e.g. `array`), use with `Object.freeze`, which returns a copy of the object that's locked in place.

NOTE: Read up on [Immutable JS](https://facebook.github.io/immutable-js/)







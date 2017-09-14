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

## Why add Tpes?
- JS does unintuitive things to convert primitive types
- Move runtime errors upstream to compile errors
- Types are self-documenting!
- Modern JS runtimes (e.g. Chrome [V8 interpreter](https://developers.google.com/v8/), [GlimmerJS](https://glimmerjs.com/)) are already written in Typed Languages

## Implicit Typing
- TypeScript compiler guesses data `types` just through assignment
- Once you assign a value to a variable, you cannot change the type

## Explicit Typing
- Type annotation at variable declaration:

Example:
```
let techerAge: number = 34;
```

- Type casting: explicitly converting a data type from one to another using the `as` keyword

Example:
```
let input = document.querySelection('input#name') as HTMLInputElement;
```

- Function can also be typed, both arguments & return tyoes







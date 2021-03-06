# pvpoke-node

Trying to port pvpoke to a node module so that you can use the logic from your
own programs

The original code is very well separated in terms of logic and presentation,
the main challenge is separating that logic out from some very interdependant
classes, reducing redundancy, dependency on jQuery etc

Apart from the obvious advantage of being usable outside of the browser, this
also more easily allows things like testing and refactoring, profiling for
performance etc

## installing

This is in early prototyping stage, it is not published to `npm` yet

## building

If not already installed: `npm install typescript -g`

Then `npm run build`

There is some sample code in the sandbox folder, eg a program which compares
the calculated default ivs in the original pvpoke pokedex data to the ivs
generated by logic:

`node ./dist/sandbox/compare-default-ivs`

This currently fails to match, the generated ivs are slightly different - not
sure if error in my porting, error in the JSON data or error in the function I
ported over

## strategy

Use TypeScript - catches a lot of errors at development time, plus users get
full intellisense etc in their editor. The transpiled javascript is exported for
the node module, and it's easy to package for the browser too. Additionally,
refactoring is a lot easier and more robust, because you can deliberately break
your code by refactoring types etc and the compiler will tell you what you need
to fix

Don't use classes - JavaScript classes, prototypes, `this` etc are a pain to
work with, and they don't add anything useful except familiarity for people from
a traditional OO background, you can organise and scope things more simply with
function closures and modules. You can ensure that your data is the shape you
want it to be using TypeScript types.

Just use simple typed objects and arrays (eg JSON serializable) for data, and
then have functions for working with the data

Don't put anything in the core data that doesn't need to be there - the Pokedex
doesn't need to contain default ivs for instance, we have a function to get
those - if we want to precompute them for performance, use the function and
save the output to a cache separate to the dex

## testing

This uses `ts-jest`, run with `npm test`

## license

MIT License

Copyright (c) 2019 pvpoke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

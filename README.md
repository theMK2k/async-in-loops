# Async in Loops

This small project shows that using a for loop is different than using a forEach when it comes to sequencially calling and "awaiting" an async function.

## The Setup

We have an async function which resolves after 1 second and logs out a given text.

We want to loop over 5 elements and call the async function in a sequencial way so that we get:

- 10 rows of logged text
- sequential, i.e. each logged text stays for 1 second before the next is logged

## Test 1: for

Run the test by typing `yarn for`.

This test utilizes a for loop and shows that execution is in sequence and awaits each call.

## Test 2: forEach

Run the test by typing `yarn forEach`.

This test utilizes forEach and shows that execution is breaking sequence and doesn't await each call.

## Test 3: reduce

Run the test by typing `yarn reduce`.

This test utilizes reduce and shows sequential execution of a list of chained promises.

## Test 4: forAwait

Run the test by typing `yarn forAwait`.

This test utilizes forAwait and shows that sequential execution of a list of mixed (synchronous and/or asynchronous) iterators.
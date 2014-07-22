Agresti-Coull Interval
=====================

Simple implementation of [Agresti-Coull interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval).

Basic usage
-----------

```js
agresti(upVotes, total);

agresti(6, 10); // → Object{left: 0.8328921537359184, right: 0.3115998125107582}


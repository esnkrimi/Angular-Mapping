# Angular-Mapping
Api Mapping via exhaustMap , concatMap and mergeMap

In this project we compare impelementation of API mapping via exhaustMap , concatMap and mergeMap.

we have three button that whenever pressed api call will have runned.

with mergemap api calls run in unordered .

concatMap button will send api request in ordered that we set.

If we press exhaustMap for many times, exhaustMap will wait for first calling and dont run synchronous.

It is fit for <b>Like button</b> in real project.

If user press like 100 times fastly,our system run first call and after callback we can disable button or make it inactive.




# Angular-Mapping

Output will be:

    concatMap
    mergeMap
    switchMap
    exhaustMap
    
    merge DOID = 3
    concat DOID = 1
    merge DOID = 2
    merge DOID = 4
    merge DOID = 1
    switch DOID = 4
    concat DOID = 2
    exhaustMap DOID = 1
    concat DOID = 3
    concat DOID = 4




Api Mapping via exhaustMap , concatMap and mergeMap

In this project we compare impelementation of API mapping via exhaustMap , concatMap and mergeMap.

we have three button that whenever pressed api call will have runned.

with mergemap api calls run in unordered .

concatMap button will send api request in ordered that we set.

If we press exhaustMap for many times, exhaustMap will wait for first calling and dont run synchronous.

It is fit for <b>Like button</b> in real project.

If user press like 100 times fastly,our system run first call and after callback we can disable button or make it inactive.




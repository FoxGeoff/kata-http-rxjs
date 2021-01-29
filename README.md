# Project: KataHttpRxjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Project ref: <https://app.pluralsight.com/guides/using-http-with-rxjs-observables>

### Introduction

Our web application responds asynchronously. This means that we can request many things at a time to our web application. Requests are met, in our web application, on a first come first served basis; after many requests, it provides a response to each request in its own contained thread.

### RxJS

Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.

These utility functions can be used for:

    Converting existing code for async operations into observables.
    Iterating through the values in a stream.
    Mapping values to different types.
    Filtering streams.
    Composing multiple streams.

### RxJS Operators

Operators are the function that is built and creates new observables. Different operators are present in RxJS observable like map(), filter(), Concat(), and merge().
Use of Operators in RxJS:

    It has configuration options.
    It returns a function that takes a source observable. When returned to the function, the operators observe the data observables, deduce the value, and transform them.
    The operator is able to create new observables of the transformed values.

### Error Handling

To handle exceptions on subscriptions, ```catcherror()``` function is used. “catcherror()” function handles any damage to our Angular application whenever a response to a request fails.

### Setting Up Http Client

The first step is to import the HttpClientModule in src/app/app.module.ts.

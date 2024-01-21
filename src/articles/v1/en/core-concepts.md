# Core Concepts

Architecture, modules, dependencies, and more.

## Introduction

Zodyac is designed to be as modular as possible. It provides a set of tools to help you make your application flexibile and easy to support. These are the core concepts of Zodyac:

- `Clean Architecture`
  Zodyac implements [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). It means that the core of your application is independent from the framework and the database.

- `Modules`
  All the logic for features, routes, workers and services are split and encapsulated in modules.

- `Dependency Injection`
  Modules are independent from each other, but they can communicate in a predefined way. Modules are designed to be testable and reusable.

## Architecture

[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) – also known as Hexagonal Architecture or Onion Architecture – is a software design pattern that separates the core of your application from the framework and the database. This allows you to easily change those without having to rewrite the business logic. On practice, it means that your application is split into layers, and each layer has a specific responsibility:

- `Routers`
  Router control input gateway of your application. It is responsible for the communication between the framework and the application.

- `Services (Domain)`
  Services are the core of your application, they contain your business logic as a interaction bewtween models.

- `Models`
  Models are the logical representation of your data. They handle the business rules of your application.

- `Entities`
  Entity controls how your data is stored. It is a facade for a database, a file, or anything else.

- `Views`
  Views control the output gateway of your application. It is responsible for how the data is presented in response.

- `Utilities`
  Utilities are helper functions and modules that can be used anywhere in your application.

## Dependency Injection

Dependency Injection is a technique where one object supplies the dependencies of another object. It is a way to decouple the objects so that no business code has to be changed simply because an object it depends on needs to be changed to a different one.

> [!NOTE]
> You can learn more about how to use it in [Providers](/docs/providers) section.

## Modules

Modules are the building blocks of your application with their own lifecycle and input-output interface. Every module must have single responsibility which allows you to maintain your code easily.

> [!NOTE]
> Learn more about [Lifecycle](/docs/lifecycle).

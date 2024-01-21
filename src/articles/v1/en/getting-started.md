# Getting started

Learn how to install Zodyac and create your first project.

## Introduction

In this article you will learn about the basic concepts of Zodyac, how to install necessary dependencies and how to use them to build your application.

### Before you begin

Zodyac uses several tools and concepts to make your development more convenient:

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [Typescript](https://www.typescriptlang.org/) - JavaScript superset
- [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) – Object-oriented programming
- [Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) – Software design pattern
- [Zod](https://zod.dev/) – TypeScript-first schema declaration and validation library

### Prerequisites
- [Node.js](https://nodejs.org/en/) >= 18.0.0
- [NPM](https://www.npmjs.com/) >= 7.0.0

## Installation

To jump right into developing a new project, you can use Zodyac CLI. It will create a new project for you and install all the necessary dependencies.

### Step 1: Install Zodyac CLI

Install Zodyac CLI globally using npm:

```bash
npm install -g @zodyac/cli
```

### Step 2: Create a new project

Create a new project using Zodyac CLI:

```bash
zy init
```

CLI will ask if you want to add an Express router to this project. If you choose to use one, CLI will install it for you and configure it automatically.

> [!NOTE]
> You can find more options in the [CLI documentation](/docs/cli).

## Application
Application is the main module of your project which represents the root of your dependency tree and the entry point of your server. Application also has a lifecycle (see below). The generic type of your application is the type of your `Environment schema`, so it should be included as a `Zod` object in configuration:

```typescript
import { App } from '@zodyac/core';
import { zEnv } from 'env.z';

export const app = new App({
  env: zEnv,
  providers: [],
});
```

## Modules

Module is the main building block of Zodyac. It is a class that can be added to the application and can have dependencies on other modules. Modules can be used to organize your code into logical units and to separate concerns. You can start by entering the following command in your terminal:

```bash
zy generate module first
```

This command will create a blank module in the `src/modules` directory with the following content:

```typescript
import { Module } from '@zodyac/core';
import { zEnv } from 'env.z';

export class FirstModule extends Module<typeof zEnv> {}
```

### Lifecycle hooks

These are the hooks to manage your module's behaviour in application runtime:

- `onInit` - called when the module is being added to dependency tree. You can use it to set up the module.
- `onReady` - called when all the other sync modules have been initialized. It can be used to request initial data from other modules.
- `onStart` – called when the parent Application is starting.
- `onDestroy` – called when the parent Application is being destroyed. You can do cleanup here.

```typescript
import { Module } from '@zodyac/core';
import { zEnv } from 'env.z';

export class FirstModule extends Module<typeof zEnv> {
  onInit = () => {
    // do something when module is initialized
  }

  onReady = () => {
    // do something when module is ready
  }

  onStart = () => {
    // do something when module is started
  }

  onDestroy = () => {
    // do something when module is destroyed
  }
}
```

> [!NOTE]
> Learn more about [Module lifecycle](/docs/lifecycle).

## Dependencies

Zodyac organizes your code into modules and manages their dependencies. You can add dependencies to your module by adding `@Provide` decorator to the constructor. This decorator can accept a single module, an array of modules or a list of providers:

```typescript
import { Module, Provide } from '@zodyac/core';
import { zEnv } from 'env.z';

@Provide(SecondModule)
export class FirstModule extends Module<typeof zEnv> {}
```

> [!NOTE]
> Learn more about [Providers](/docs/providers).

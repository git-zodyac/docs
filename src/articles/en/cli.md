# Zodyac CLI

Zodyac CLI helps you to create and manage your Zodyac projects.

> [!NOTE]
> This article is a deep-dive into Zodyac CLI. If you are new to Zodyac, you better start with [Getting started](/docs/getting-started) section.

## Installation

First, install `@zodyac/cli` globally using npm:

```bash
npm install -g @zodyac/cli
```

## Usage

List of available commands:

```bash
zy --help
```

### Create a new project

To create a new Zodyac project, run:

```bash
zy init
```

This will create a new project in the current directory, add [Eslint](https://eslint.org/), initialize [Git](https://github.com), add [Dockerfile](https://docker.com) and install all the necessary dependencies.

Options:
- `--project, -p <name>` - Project name. If not provided, it will be asked.
- `--router, -r` - Use [Express.js](https://expressjs.com) router for your project.

Skips:
- `--skip-eslint` - (optional) Skip installing and configuring [Eslint](https://eslint.org/).
- `--skip-git` - (optional) Skip initializing [Git repository](https://github.com) and creating `.gitignore`.
- `--skip-docker` - (optional) Skip adding [Dockerfile](https://docker.com) and `.dockerignore`.

By default, it will generate these files:
- \+ `package.json`
- \+ `tsconfig.json`
- \+ `.eslintrc.js`
- \+ `.gitignore`
- \+ `.dockerignore`
- \+ `Dockerfile`
- \+ `src/main.ts`
- \+ `src/env.z.ts`
- \+ `src/app.module.ts`

And if you choose to use [Express.js](https://expressjs.com) router, it will also generate:
- \+ `src/app.router.ts`
- M `src/app.module.ts`

> [!TIP]
> You can add [Express.js](https://expressjs.com) router whenever you want by running `zy add express`.
> Learn more about [API Engines](/docs/api-engines).

### Serving

To serve your project, run:

```bash
zy serve
```

This will start your project in development mode.

### Building

To build your project, run:

```bash
zy build
```

By default, it will build your project in `dist` directory.

### Watching

To watch your project, run:

```bash
zy watch
```

This will watch your project and check it for errors on every change.

### Generating a module

To generate a new module, run:

```bash
zy generate module <name>
```

This will generate a new module in `src/modules/<name>` directory.

Options:
- `--provide, -p` - Path to a module that will provide dependencies for the new module. Defaults to `root`, which stands for `App`.

These files will be generated:
- \+ `src/modules/<name>/<name>.module.ts`
- M `src/app.module.ts` (if `--provide` is set to `root`, otherwise `src/modules/<name>/<name>.module.ts`)

### Generating a router

If you are using [Express.js](https://expressjs.com) router, you can generate a new router by running:

```bash
zy generate router <name>
```

This will generate a new router in `src/routers/<name>` directory.

Options:
- `--nest, -n` - Path to a router that will nest the new router. Defaults to `root`, which stands for `app.router`.

These files will be generated:
- \+ `src/routers/<name>/<name>.router.ts`
- M `src/app.router.ts` (if `--nest` is set to `root`, otherwise `src/routers/<name>/<name>.router.ts`)

> [!NOTE]
> You can learn more about Routers from [API Engines](/docs/api-engines) section.

### Generating a service

> [!CAUTION]
> At this moment, Zodyac does not support generating services.

### Generating a model

> [!CAUTION]
> At this moment, Zodyac does not support generating models.

### Generating CRUD

> [!CAUTION]
> At this moment, Zodyac does not support generating CRUD.

### Generating a guard

> [!CAUTION]
> At this moment, Zodyac does not support generating guards.


### Generating a view

> [!CAUTION]
> At this moment, Zodyac does not support generating views.

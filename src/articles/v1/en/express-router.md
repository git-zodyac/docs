# Routers

Router is the core element in REST API. It exposes endpoints of your application to your frontend. Zodyac provides a set of tools to help you create and manage your routers, [RESTful](https://aws.amazon.com/what-is/restful-api) way.

## Routers for Models

Zodyac expects you to create a separate set of **Routes** for each **Model** in your application, and export it as a `<name>_routes` variable.

```ts
import { TaskService } from "services/task/task.service";
import { Routes } from "@zodyac/express-core";

const service = new TaskService();
export const task_routes = Routes([
  {
    path: "/",
    method: "put",
    handler: service.create,
  },
  {
    path: "/:id",
    method: "get",
    handler: service.read,
  },
  {
    path: "/:id",
    method: "post",
    handler: service.update,
  },
  {
    path: "/:id",
    method: "delete",
    handler: service.delete,
  },
]);
```

This is an example of a **Router** for a **Task** model. It has 4 routes:

- `PUT /` – Create a new task
- `GET /:id` – Get a task by ID
- `POST /:id` – Update a task by ID
- `DELETE /:id` – Delete a task by ID

That perform CRUD operations on a **Task** model. That makes a lot of sense for scalability and maintainability of your application.

## Handlers

Handlers are functions that are called when a **Request** is made to the route. In **Express**, a handler is a function that takes 2 arguments: `req`, `res` and `next`, (**Request**, **Response** and **Next Handler** respectfully).

In the example above, we are using a `TaskService` to handle the business logic of our application, but you can use any **Express-compatible** function:

```ts
import { Request, Response } from "express";
import { Routes } from "@zodyac/express-core";

export const create = (req: Request, res: Response) => {
  // ...
  return res.status(200).json({ message: "Task created" });
};

export const task_routes = Routes([
  {
    path: "/",
    method: "put",
    handler: create,
  },
]);
```

Or you can even use an array of handlers:

```ts
import { Request, Response } from "express";
import { Routes } from "@zodyac/express-core";

export const preCreate = (req: Request, res: Response, next: NextFunction) => {
  // ...
  next();
};

export const create = (req: Request, res: Response) => {
  // ...
  return res.status(200).json({ message: "Task created" });
};

export const task_routes = Routes([
  {
    path: "/",
    method: "put",
    handler: [preCreate, create],
  },
]);
```

> [!TIP]
> Zodyac shines when you use it with **Services**.
<!-- Learn more about it in [Services](/docs/express-services) section. -->

## Nested routers

You can nest routers by passing an array of sub-routes to the route:

```ts
import { TaskService } from "services/task/task.service";
import { assignee_routes } from "./assignee/assignee.router";
import { Routes } from "@zodyac/express-core";

export const task_routes = Routes([
  {
    path: "/",
    method: "put",
    handler: service.create,
  },
  // ...
  {
    path: "/:id/assignee",
    method: "get",
    routes: assignee_routes,
  },
]);
```

Or using a `Router` class instance:

```ts
import { TaskService } from "services/task/task.service";
import { AssigneeRouter } from "./assignee/assignee.router";

const assignee_router = new AssigneeRouter();

export const task_routes = Routes([
  {
    path: "/",
    method: "put",
    handler: service.create,
  },
  // ...
  {
    path: "/:id/assignee",
    method: "get",
    module: assignee_router,
  },
]);
```

## Using Guards

Guards are functions that are called before the handler. They are used to check if the request is valid and if the user has permission to access the resource.

```ts
import { Routes } from "@zodyac/express-core";
import { AuthGuard } from "guards/auth.guard";

export const task_routes = Routes([
  {
    path: "/",
    method: "put",
    handler: service.create,
    guards: [AuthGuard],
  },
]);
```

> [!NOTE]
> Learn more about [Express Guards](/docs/express-guards).

## Router class

You can also create a class that extends `Router` and use it as an Express Module:

```ts
import { Router, Routes } from "@zodyac/express-core";

export class TaskRouter extends Router {
  constructor(private readonly routes: Routes) {
    super(routes);

    // You can use this.router to add headers, middlewares, etc.
    this.router.use((req, res, next) => {
      // ...
      next();
    });
  }

  doSomething() {
    // Some other logic you want to use in your router
  }
}

export const task_router = new TaskRouter([
  {
    path: "/",
    method: "put",
    handler: service.create,
  },
  // ...
]);
```

`this.router` is an instance of `express.Router`.
Under the hood, when you declare a route with `routes`, it creates a new instance of `Router` class with provided routes. Then it uses `this.router.use` to add it's internal `this.router` to the Express app.

When using a `module` field, it uses `this.router.use` to add the module's `this.router` to the Express app.

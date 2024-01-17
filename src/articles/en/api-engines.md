# API Engines

Add [Express.js](https://expressjs.com/) to your project to create a REST API.

> [!NOTE]
> Right now [Express.js](https://expressjs.com/) is the only supported engine. [Fastify](https://fastify.dev/) and [Koa](https://koajs.com/) engines are planned to be added soon.

## Installation

In your project directory, run:

```bash
zy add express
```

This will install the `@zodyac/express-core` package and add an initial setup:
- `src/app.router.ts` - Primary router for your application.
- M `src/app.module.ts` - ExpressModule will be added to the `providers` automatically.


## Usage

Before reading this article, please make sure you've read [Core concepts](/docs/core-concepts) section.

### Routers

Routers are sets of routes that are used to define REST APi endpoints of your application. It is responsible for the communication between the frontend and backend.

To create a router, you have several options:

- Creating a `Router` class instance and pass an array of routes to it's constructor.

- Creating an array of routes using `Routes` helper function.


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

#### Handlers

Handlers are functions that are called when a request is made to the route. They are responsible for the business logic of your application.

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

#### Nested routers

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

> [!NOTE]
> Learn more about Routers in [Routers](/docs/routers) section.

### Services

__Services__ are the core of your application, they contain your business logic as a interaction between models.

In Zodyac, __Services__ are ment to be described by a __Definition__ file, which describes expected **Request** and **Response** as `Zod` shapes. __Definition__ describes **each field** of `Service` and provides `Zod schema` for `Request` validation: `body`, `params` and `query`, while it's `response` parameter shapes the expected **Response** body.

In our example, we use these __Model__ Zod-schemas:

> `models/task.model.ts`:
```ts
import { z } from "zod";

export const zTask = z.object({
  id: z.string().uuid(),
  title: z.string(),
  deadline: z.date(),
  status: z.boolean().default(false),
  createdAt: z.date(),
});
export type ITask = z.infer<typeof zTask>;

export const zTaskId = zTask.pick({ id: true });
export const zTaskCreate = zTask.pick({
  title: true,
  deadline: true,
});

export const zTaskUpdate = zTask.pick({
  title: true,
  deadline: true,
  status: true,
});
```

> `task.definition.ts`:
```ts
import { z } from "zod";
import {
  zTaskCreate,
  zTask,
  zTaskId,
  zTaskUpdate,
} from "models/task.model";

export const TaskDef = {
  create: {
    body: zTaskCreate,
    response: zTask,
  },
  read: {
    params: zTaskId,
    response: zTask,
  },
  update: {
    params: zTaskId,
    body: zTaskUpdate,
    response: zTask,
  },
  delete: {
    params: zTaskId,
    response: z.null(),
  },
};
```

So, to create a __Service__ based on this definition, we need to include this __Definition__ file as a generic type of `Service` class:

> `task.service.ts`:
```ts
import { Service, Check } from "@zodyac/express-core";
import { TaskDef } from "./task.definition";
import { TaskView } from "views/task.view";

export class TaskService implements Service<typeof TaskDef> {
  private readonly _view = new TaskView();

  readonly create = Check(TaskDef.create, (req, res) => {
    const data = req.body;

    return this._view.create(res, output_task);
  });

  readonly read = Check(TaskDef.read, (req, res) => {
    const data = req.params;

    return this._view.read(res, some_task);
  });

  readonly update = Check(TaskDef.update, (req, res) => {
    const data = req.params;
    const body = req.body;

    return this._view.update(res, some_updated_task);
  });

  readonly delete = Check(TaskDef.delete, (req, res) => {
    const data = req.params;
    return this._view.delete(res);
  });
}
```

Service endpoints must **ALWAYS** return **Response**. This will make sure that no logic is executed after the client got a **Response**.

> [!TIP]
> If you need to execute some logic after returning a response, you can use async functions without `await` keyword, but make sure you do not send **Response** twice.

The `_view` field carries the instance of a **View** which encapsulates all the **Response** logic and shape, see below:

### Views

__Views__ control the shape of your API response. It is responsible for how the data is presented to your frontend.

To create a __View__, create a class that extends `View`. It accepts your __Definition__ as a generic type:

> `views/tast.view.ts`:
```ts
import { TaskDef } from "services/task.definition";
import { ViewModule, View, AnyView } from "@zodyac/express-core";
import { ITask } from "models/task.model";

export class TaskView implements ViewModule<typeof TaskDef> {
  readonly create = View(TaskDef.create, (res, task: ITask) => {
    return res.status(200).json(task);
  });

  readonly read = View(TaskDef.read, (res, task: ITask) => {
    return res.status(200).json(task);
  });

  readonly update = View(TaskDef.update, (res, task: ITask) => {
    return res.status(200).json(task);
  });

  readonly delete = View(TaskDef.delete, (res) => {
    return res.status(200).send(null);
  });

  readonly notfound = AnyView((req, res) => res.status(200).send("list"));
}
```

Like in a __Service__, __View__ has to include every field from __Definition__ and match the response shape, defined in it.

If you want to add an unregistered **Response** shape, you can use `AnyView`. It will recognize your **Response** as `any` type.

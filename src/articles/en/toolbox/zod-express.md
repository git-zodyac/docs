# Zod Express.js validator

Request validation with [Zod](https://zod.dev) for [Express.js](https://expressjs.com), which supports `body`, `query` and `parameters`.

## Installation

Install the package with npm:

```bash
npm install @zodyac/zod-express
```

## Usage

First, define your request `body` schema:

```typescript
import { z } from 'zod';

const zBody = z.object({
  // ... your zod schema
});
```

Create an endpoint using `CheckBody` function:

```typescript
import { z } from 'zod';
import { CheckBody } from '@zodyac/zod-express';

const zBody = z.object({
  // ... your zod schema
});

const my_endpoint = CheckBody(zBody, (req, res) => {
  const body = req.body;
  // ... the rest of your code
});
```

### Validating request parameters:

You can also parse your request parameters using `CheckParams`:

```typescript
import { z } from 'zod';
import { CheckParams } from '@zodyac/zod-express';

const zParams = z.object({
  // ... string params
});

const my_endpoint = CheckParams(zParams, (req, res) => {
  const params = req.params;
  // ... the rest of your code
});
```

### Validating request query:

Parse your request query using `CheckQuery`:

```typescript
import { z } from 'zod';
import { CheckQuery } from '@zodyac/zod-express';

const zQuery = z.object({
  // ... query schema
});

const my_endpoint = CheckQuery(zQuery, (req, res) => {
  const query = req.query;
  // ... the rest of your code
});
```

As you can see, `req.body`, `req.params` and `req.query` are inferring types from your `zod schema`.

### Validating all at once:

You can validate all request data at once using `Check`:
  
```typescript
import { z } from 'zod';
import { Check } from '@zodyac/zod-express';

const zBody = z.object({
  // ... your zod schema
});

const zParams = z.object({
  // ... your zod schema
});

const zQuery = z.object({
  // ... your zod schema
});

const my_endpoint = Check({
  body: zBody,
  params: zParams,
  query: zQuery
}, (req, res) => {
  const body = req.body;
  const params = req.params;
  const query = req.query;
  // ... the rest of your code
});
```

> [!CAUTION]
> Please remember that Express `params` and `query` parameters are always strings. If you want to parse them to other types, you have to do it manually or use `z.coerce`.

## Error handling

If validation fails, `Check`, `CheckBody`, `CheckParams` and `CheckQuery` will automatically send 406 response with error message. If you want to handle errors yourself, you can use `ValidationOptions`:

```typescript
import { ze, Check } from '@zodyac/zod-express';

const my_error_handler: ze.ValidationOptions = {
  errorCode: 400, // default is 406 (Not Acceptable)
  errorHandler: (req, res, error) => { // error is zod Error
    const error_message = error.errors[0].message;
    // ... your error handling code
  }
};

const my_endpoint = Check({
  body: zBody,
  params: zParams,
  query: zQuery
}, (req, res) => {
  const body = req.body;
  const params = req.params;
  const query = req.query;
  // ... the rest of your code
}, my_error_handler);
```

## Middleware

If you prefer to validate your requests aside from your endpoints logic, you can use `zem.Body`, `zem.Params`, `zem.Query` or `zem.Check` middleware:

```typescript
import { zem } from '@zodyac/express';
import { Request, Response } from 'express';

const my_endpoint = (req: Request, res: Response) => {
  const body = req.body;
  const params = req.params;
  const query = req.query;
  // ... the rest of your code
};

app.post('/my_endpoint', zem.Body(zBody), my_endpoint);
app.get('/my_endpoint/:id', zem.Params(zParams), my_endpoint);
app.get('/my_endpoint', zem.Query(zQuery), my_endpoint);

app.put('/my_endpoint', zem.Check({
  body: zBody,
  params: zParams,
  query: zQuery
}), my_endpoint);
```

> [!CAUTION]
> Please notice that in this case your `req.body`, `req.params` and `req.query` will be of type `any`. If you want to use types, you have to specify them manually using `z.infer` or use `CheckBody`, `CheckParams`, `CheckQuery` or `Check`.

## Decorators (experimental)

You can also use decorators to validate your requests. Just add `@ValidateBody`, `@ValidateParams`, `@ValidateQuery` or `@Validate` to your endpoint method:

```typescript
import { z } from 'zod';
import { CheckBody } from '@zodyac/zod-express';
import { Request, Response } from 'express';

const zBody = z.object({
  // ... your zod schema
});

export class Example {

  @ValidateBody(zBody)
  public static my_endpoint(req: Request, res: Response) {
    const body = req.body as z.infer<typeof zBody>;
    // ... the rest of your code
  }

}
```

> [!CAUTION]
> Due to the limitations of TypeScript decorators, you have to specify the type of `req.body` using `z.infer`.

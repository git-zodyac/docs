# Zod to Mongoose

Helps you convert [zod](https://zod.dev) schemas to [mongoose](https://mongoosejs.com/) models and schemas.

## Installation

Install the package with npm:

```bash
npm install @zodyac/zod-mongoose
```

## Usage

First, create your `zod` schema:

```typescript
import { z } from 'zod';
import { zId } from '@zodyac/mongoose';

const zUser = z.object({
  name: z.string().min(3).max(255),
  age: z.number().min(18).max(100),
  active: z.boolean().default(false),
  access: z.enum(['admin', 'user']).default('user'),
  companyId: zId.describe('ObjectId:Company'),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.enum(['CA', 'NY', 'TX']),
  }),
  tags: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});
```

Then, convert it to `mongoose` schema and connect `model`:

```typescript
import { zId, zodSchema } from '@zodyac/mongoose';
import { model } from 'mongoose';
import { z } from 'zod';

const zUser = z.object({
  name: z.string().min(3).max(255),
  age: z.number().min(18).max(100),
  active: z.boolean().default(false),
  access: z.enum(['admin', 'user']).default('user'),
  companyId: zId.describe('ObjectId:Company'),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.enum(['CA', 'NY', 'TX']),
  }),
  tags: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const schema = zodSchema(zUser);
const userModel = model('User', schema);
```

That's it! Now you can use your mongoose model as usual:

```typescript
import { zId, zodSchema } from '@zodyac/mongoose';
import { model } from 'mongoose';
import { z } from 'zod';

const zUser = z.object({
  name: z.string().min(3).max(255),
  age: z.number().min(18).max(100),
  active: z.boolean().default(false),
  access: z.enum(['admin', 'user']).default('user'),
  companyId: zId.describe('ObjectId:Company'),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.enum(['CA', 'NY', 'TX']),
  }),
  tags: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const schema = zodSchema(zUser);
const userModel = model('User', schema);

userModel.find({ name: 'John' });
```

## Raw schema

If you want to get raw object from zod schema to modify it, you can use `zodSchemaRaw` function:

```typescript
import { zodSchemaRaw } from '@zodyac/mongoose';
import { model, Schema } from 'mongoose';
import { z } from 'zod';

const zUser = z.object({
  name: z.string().min(3).max(255),
  age: z.number().min(18).max(100),
  active: z.boolean().default(false),
  access: z.enum(['admin', 'user']).default('user'),
  companyId: zId.describe('ObjectId:Company'),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.enum(['CA', 'NY', 'TX']),
  }),
  tags: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});


const schema = zodSchemaRaw(zUser);
schema.age.validate = (v: number) => v > 18;

const model = model('User', new Schema(schema));
```

## Checking schema

To make sure nothing is missing, you can use `Schema.obj`:

```typescript
const schema = zodSchemaRaw(zUser);

// schema is mongoose schema
console.log(schema.obj);
```

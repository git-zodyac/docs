# Zod environment validator

This package allows you to validate your environment variables using Zod.

## Installation

Install the package using npm:

```bash
npm install @zodyac/zod-env
```

## Usage

Define your environment schema:

```typescript
import { z } from 'zod';

const env_schema = z.object({
  // ... your zod schema
});
```

> [!TIP]
> Don't forget to use `z.coerce` on types other than `String`!

Parse your environment using `parse()`:

```typescript
import { parse } from '@zodyac/env';
import { z } from 'zod';

const env_schema = z.object({
  // ... your zod schema
});

const env = parse(env_schema);
```

Now your env infers types from Zod schema.

> [!TIP]
> You can also use `z.default()` to provide a fallback.


## Configuration

By default, `parse` tries to parse `.env` file first, but if none was found, it tries `process.env`. You can ignore `process.env` fallback by adding:

```typescript
const env = parse(env_schema, {
  ignoreProcessEnv: true,
});
```

Or you can specify it's path using `path` parameter:

```typescript
const env = parse(env_schema, {
  path: 'path/to/env.file',
  // (optional) ignoreProcessEnv: true,
});
```

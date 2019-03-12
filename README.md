### Redis Dynamic Module for Nest.js

**Note: this is a global module.**

### Installation

NPM

```shell
npm install --save nest-module-redis
```

Yarn

```shell
yarn add nest-module-redis
```

### Usage

```typescript
// app.module.ts
import { RedisModule } from 'nest-module-redis';
import { Module } from '@nestjs/common'

@Module({
    RedisModule.forRoot(options)
})
export class AppModule {}
```

```typescript
// cat.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { RedisClient, REDIS_CLIENT } from 'nest-module-redis';

@Injectable()
export class CatService {
    constructor(
    	@Inject(forwardRef(() => REDIS_CLIENT))
         private readonly redisClient: RedisClient,
    ) {}
    
    async get() {
        const result = await this.redisClient.get('key');
        return result;
    }
}
```

options: [ioredis options](https://github.com/luin/ioredis/blob/master/API.md#new_Redis_new)

redisClient: [A ioredis instance](https://github.com/luin/ioredis/blob/master/API.md#Redis)


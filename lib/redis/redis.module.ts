import { Module, DynamicModule, Global } from '@nestjs/common';
import { createRedisClientProvider } from './redis.provider';
import { RedisOptions } from 'ioredis';

@Global()
@Module({})
export class RedisModule {
  static forRoot(options: RedisOptions): DynamicModule {
    const RedisClientProvider = createRedisClientProvider(options);
    return {
      module: RedisModule,
      providers: [RedisClientProvider],
      exports: [RedisClientProvider],
    };
  }
}

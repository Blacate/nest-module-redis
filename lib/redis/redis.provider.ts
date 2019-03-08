import { REDIS_CLIENT } from './redis.constants';
import * as Redis from 'ioredis';

export const createRedisClientProvider = (options: Redis.RedisOptions) => ({
  provide: REDIS_CLIENT,
  useFactory: async () => {
    const client =  new Redis(options);
    return client;
  },
});

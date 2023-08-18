
import redis from 'ioredis';
import 'dotenv/config';

const redisCon = new redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379') // Default port is 6379 if not provided
});

export default redisCon;
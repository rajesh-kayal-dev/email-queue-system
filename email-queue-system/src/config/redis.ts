import Redis from "ioredis";

export const connection = {
  host: "127.0.0.1",
  port: 6379,

  family: 4,
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
};
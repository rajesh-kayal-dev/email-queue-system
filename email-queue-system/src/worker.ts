import { Worker } from "bullmq";
import { connection } from "./config/redis.js";

console.log("👷 Worker started...");

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("📩 Processing job:", job.name);
    console.log("📦 Data:", job.data);

    // simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("✅ Email sent to:", job.data.to);
  },
  {
    connection,
  }
);
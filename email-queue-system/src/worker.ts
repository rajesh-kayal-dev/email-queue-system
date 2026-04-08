import { Worker } from "bullmq";
import { connection } from "./config/redis.js";

console.log("👷 Worker started...");

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("📩 Processing job:", job.name);
    console.log("📦 Data:", job.data);

    // 🔥 simulate random failure
    if (Math.random() < 0.7) {
      console.log("❌ Simulated failure");
      throw new Error("Email failed!");
    }

    console.log("✅ Email sent to:", job.data.to);
  },
  {
    connection,
  }
);
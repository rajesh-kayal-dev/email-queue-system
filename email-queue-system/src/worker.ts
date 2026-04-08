import { Worker } from "bullmq";
import { connection } from "./config/redis.js";
import { sendEmail } from "./services/email.service.js";

console.log("👷 Worker started...");

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("📩 Processing job:", job.name);
    console.log("📦 Data:", job.data);

    // 🔥 real email sending
    await sendEmail(
      job.data.to,
      job.data.subject,
      job.data.body
    );

    console.log("✅ Email sent to:", job.data.to);
  },
  {
    connection,
  }
);

// events
worker.on("completed", (job) => {
  console.log(`🎉 Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`💥 Job ${job?.id} failed:`, err.message);
});
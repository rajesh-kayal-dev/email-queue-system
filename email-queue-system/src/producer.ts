import { emailQueue } from "./queue/email.queue.js";

async function main() {
  console.log("🚀 Starting producer...");

  const job = await emailQueue.add(
    "send-email",
    {
      to: "rajeshkayal8001@gmail.com",
      subject: "Welcome 🚀",
      body: "Hello from queue system",
    },
    {
      attempts: 3, // retry 3 times
      backoff: {
        type: "exponential",
        delay: 2000, // 2 sec
      },
    }
  );

  console.log("✅ Job added:", job.id);

  process.exit(0);
}

main();
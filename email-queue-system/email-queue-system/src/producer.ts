import { emailQueue } from "./queue/email.queue.js";

async function main() {
  console.log("🚀 Starting producer...");

  const job = await emailQueue.add("send-email", {
    to: "user@test.com",
    subject: "Welcome 🚀",
    body: "Hello from queue system",
  });

  console.log("✅ Job added:", job.id);

  process.exit(0);
}

main();
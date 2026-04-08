import { emailQueue } from "./queue/email.queue.js";

async function main() {
  console.log("🚀 Starting producer...");

const targetTime = new Date("2026-04-10T10:00:00").getTime();
const delay = targetTime - Date.now();

  const job = await emailQueue.add(
  "send-email",
  {
    to: "rajeshkayal8001@gmail.com",
    subject: "Advanced Job 🚀",
    body: "Delayed + Priority",
  },
  {
    delay: 5000,
    priority: 1,
    attempts: 3,
  }
);

  console.log("✅ Job added:", job.id);

  process.exit(0);
}

main();
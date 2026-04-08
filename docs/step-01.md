# Step 1: Project Setup and Queue Thinking

## Goal

Set up the project and understand the basic producer and worker relationship without Redis or BullMQ yet.

## What we built in this step

- a TypeScript project
- a simple in-memory queue
- a producer function that adds email jobs
- a worker function that processes queued jobs

## Why this step matters

If you understand this simple version first, BullMQ will feel like a professional queue implementation of the same idea rather than a completely new concept.

## Terminal Commands

Install dependencies:

```powershell
npm install -D typescript ts-node-dev @types/node
```

Run the demo:

```powershell
npm run build
npm run demo:queue
```

Build the TypeScript project:

```powershell
npm run build
```

## What to observe in the output

- the producer adds jobs to the queue
- the queue stores jobs in order
- the worker processes one job at a time
- when no jobs are left, the worker reports that the queue is empty

## Key mental model

Even in this simple example, the responsibilities are separate:

- producer decides that work should happen
- queue stores pending work
- worker performs the work

That separation is the foundation of real queue systems.

## Suggested Git Commit

`chore: initialize Node.js and TypeScript project`

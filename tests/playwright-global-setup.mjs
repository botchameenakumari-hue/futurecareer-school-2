import { spawn, execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const host = '127.0.0.1';
const port = 4321;

async function isReady() {
  try {
    const response = await fetch(`http://${host}:${port}/`);
    return response.ok || response.status < 500;
  } catch {
    return false;
  }
}

async function waitForServer(timeoutMs = 120_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await isReady()) return;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Preview server did not become ready on ${host}:${port}.`);
}

export default async function globalSetup() {
  const child = spawn(process.execPath, ['node_modules/astro/astro.js', 'preview', '--host', host, '--port', String(port)], {
    cwd: process.cwd(),
    stdio: 'ignore',
    windowsHide: true,
  });
  await waitForServer();

  return async () => {
    if (!child.pid) return;
    try {
      await execFileAsync('taskkill', ['/PID', String(child.pid), '/T', '/F'], { windowsHide: true });
    } catch {
      // The server may already have exited; teardown should remain idempotent.
    }
  };
}

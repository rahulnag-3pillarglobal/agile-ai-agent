#!/usr/bin/env node
import { install } from "../install.js";

const command = process.argv[2];

if (command === "install") {
  install();
} else {
  console.log("Usage:");
  console.log("  agile-ai-agent install");
}
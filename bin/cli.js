#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

try {
  require('../dist/extension.js');
} catch (error) {
  console.error('include dist fail: ', error);
}

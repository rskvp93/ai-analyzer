#!/usr/bin/env node

// This script runs BEFORE the package is installed
console.log('\n📦 AI Analyzer Pre-Installation Check');
console.log('====================================');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));

if (majorVersion < 18) {
    console.error(`❌ Node.js version ${nodeVersion} is not supported.`);
    console.error('   Please upgrade to Node.js 18 or higher.');
    process.exit(1);
}

console.log(`✅ Node.js ${nodeVersion} detected`);
console.log(`✅ Platform: ${process.platform} ${process.arch}`);
console.log(`✅ Installing to: ${process.cwd()}`);
console.log('====================================\n');
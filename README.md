# GiGi_Lyrics - ⚠️ LEGACY PROJECT

**Status: Legacy/Archived**  
**Last Updated: 2021-2022**  
**Status: Not Maintained - For Reference Only**

## ⚠️ Legacy Notice

This project is **legacy code** from 2021-2022 and is **not actively maintained**. It uses outdated dependencies that are incompatible with modern Node.js versions and tooling.

## Known Issues

### 1. OpenSSL Compatibility
- **Issue**: Node.js 17+ uses OpenSSL 3.0 which breaks older Metro bundler
- **Fix Applied**: Added `NODE_OPTIONS=--openssl-legacy-provider` to scripts
- **Status**: Partial fix - other issues remain

### 2. Outdated Dependencies
- **React Native**: 0.64.3 (current: 0.76+)
- **Expo**: ~43.0.2 (current: 52+)
- **React**: 17.0.1 (current: 18+)
- **Status**: Too outdated to easily upgrade

### 3. Missing/Broken Dependencies
- **Issue**: `metro-cache-key` module missing/broken
- **Issue**: Dependencies incompatible with Node.js 25+
- **Status**: Requires complete dependency overhaul

### 4. Build System Issues
- Metro bundler incompatible with Node.js 17+
- React Native CLI issues
- Expo CLI deprecated for this SDK version

## What Was Fixed

- ✅ Added OpenSSL legacy provider flags to npm scripts
- ✅ Created `.nvmrc` and `.node-version` files (recommends Node.js 16)
- ⚠️ Project still non-functional due to other dependency issues

## Recommendations

1. **Archive**: Keep for reference only
2. **Modernize**: Would require complete rewrite with:
   - Upgrade to Expo SDK 50+
   - Upgrade React Native to latest
   - Update all dependencies
   - Fix breaking changes
3. **Alternative**: Start fresh with modern Expo/React Native setup

## Original Project

A React Native + Expo app for learning languages through lyrics, built with Django backend.

## License

ISC


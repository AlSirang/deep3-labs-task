# Deep3 Labs DeFi App

This is a web application built with React, TypeScript, Vite, and a shadcn/ui design system. It features wallet connection, staking, and live blockchain stats such as block number and chain name.

---

## Getting Started

### 1. **Install Dependencies**

```bash
npm install
```

### 2. **Environment Variables**

Copy `.env.example` to `.env` and add your `projectId`. You can get the `projectId` from [WalletConnect](https://cloud.reown.com/sign-in).

---

### 3. **Run the Development Server**

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### 4. **Build for Production**

```bash
npm run build
```

---

## Project Configuration

### **Tech Stack**

- **React** + **TypeScript** (SPA)
- **Vite** (blazing fast dev/build)
- **Tailwind CSS** (utility-first styling)
- **shadcn/ui** (premium component library)
- **WAGMI** (wallet connection, Ethereum hooks)
- **viem** (ETH utils, contract interaction)
- **react-hot-toast** (notifications)

## Features

- Connect wallet (MetaMask, WalletConnect, etc.)
- Convert ETH to WETH with validation and 18-decimal precision
- Modern, responsive, and accessible UI
- Clean, modular, and documented codebase

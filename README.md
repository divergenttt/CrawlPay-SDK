# CrawlPay SDK

Monetize your website for AI crawlers via **x402** payments on **Arc Testnet**. When AI bots (GPTBot, ClaudeBot, PerplexityBot, etc.) request your content, they receive HTTP `402 Payment Required` and must pay **$0.001 USDC** to your wallet.

## Install

```bash
npm install github:divergenttt/CrawlPay-SDK
```

## Quick start (Next.js)

Add to `middleware.ts`:

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { crawlpay } from "@crawlpay/sdk";

const paywall = crawlpay({ wallet: "0xYourWalletAddress" });

export function middleware(request: NextRequest) {
  return paywall(request) ?? NextResponse.next();
}
```

## Configuration

| Option   | Required | Default        | Description                    |
| -------- | -------- | -------------- | ------------------------------ |
| `wallet` | Yes      | —              | Your Arc wallet address        |
| `price`  | No       | `"0.001"`      | Price in USDC                  |
| `network`| No       | `"arc-testnet"`| Payment network                |

## Supported AI bots

| Bot               | Provider    |
| ----------------- | ----------- |
| GPTBot            | OpenAI      |
| ChatGPT-User      | OpenAI      |
| ClaudeBot         | Anthropic   |
| anthropic-ai      | Anthropic   |
| GoogleOther       | Google      |
| Google-Extended   | Google      |
| PerplexityBot     | Perplexity  |
| CCBot             | Common Crawl|
| Bytespider        | ByteDance   |
| FacebookBot       | Meta        |
| Applebot-Extended | Apple       |

## Dashboard

Track payments and configure your site at:

**[crawl-pay.vercel.app/dashboard](https://crawl-pay.vercel.app/dashboard)**

## License

MIT

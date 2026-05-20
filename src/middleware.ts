import { getBotName, isAIBot } from "./detector";

export interface CrawlPayConfig {
  wallet: string;
  price?: string;
  network?: string;
}

const DEFAULT_PRICE = "0.001";
const DEFAULT_NETWORK = "arcTestnet";

function hasPaymentSignature(request: Request): boolean {
  // Headers.get() matches names case-insensitively (payment-signature / PAYMENT-SIGNATURE)
  return request.headers.get("payment-signature") !== null;
}

export function crawlpay(config: CrawlPayConfig) {
  const price = config.price ?? DEFAULT_PRICE;
  const network = config.network ?? DEFAULT_NETWORK;

  return (request: Request): Response | null => {
    const userAgent = request.headers.get("user-agent") ?? "";

    if (!isAIBot(userAgent)) {
      return null;
    }

    if (hasPaymentSignature(request)) {
      return null;
    }

    const bot = getBotName(userAgent) ?? "Unknown Bot";

    const body = {
      error: "payment_required",
      message:
        "This content requires payment via x402 protocol. Pay $0.001 USDC to access.",
      bot,
      wallet: config.wallet,
      price,
      network,
    };

    return new Response(JSON.stringify(body), {
      status: 402,
      headers: {
        "Content-Type": "application/json",
        "X-Payment-Required": `amount=${price};currency=USDC;network=${network}`,
        "X-Payment-Wallet": config.wallet,
        "X-Payment-Network": network,
        "X-CrawlPay": "1.0",
      },
    });
  };
}

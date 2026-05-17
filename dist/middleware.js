"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crawlpay = crawlpay;
const detector_1 = require("./detector");
const DEFAULT_PRICE = "0.001";
const DEFAULT_NETWORK = "arc-testnet";
function crawlpay(config) {
    const price = config.price ?? DEFAULT_PRICE;
    const network = config.network ?? DEFAULT_NETWORK;
    return (request) => {
        const userAgent = request.headers.get("user-agent") ?? "";
        if (!(0, detector_1.isAIBot)(userAgent)) {
            return null;
        }
        const bot = (0, detector_1.getBotName)(userAgent);
        const body = {
            error: "payment_required",
            message: "This content requires payment via x402 protocol. Pay $0.001 USDC to access.",
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

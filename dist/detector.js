"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI_BOTS = void 0;
exports.isAIBot = isAIBot;
exports.getBotName = getBotName;
const AI_BOTS = [
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "anthropic-ai",
    "GoogleOther",
    "Google-Extended",
    "PerplexityBot",
    "CCBot",
    "Bytespider",
    "FacebookBot",
    "Applebot-Extended",
];
exports.AI_BOTS = AI_BOTS;
function isAIBot(userAgent) {
    return getBotName(userAgent) !== null;
}
function getBotName(userAgent) {
    if (!userAgent)
        return null;
    for (const bot of AI_BOTS) {
        if (userAgent.includes(bot)) {
            return bot;
        }
    }
    return null;
}

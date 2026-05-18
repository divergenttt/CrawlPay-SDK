declare const AI_BOTS: readonly ["GPTBot", "ChatGPT-User", "ClaudeBot", "anthropic-ai", "GoogleOther", "Google-Extended", "PerplexityBot", "CCBot", "Bytespider", "FacebookBot", "Applebot-Extended"];
export type AIBotName = (typeof AI_BOTS)[number];
export declare function isAIBot(userAgent: string): boolean;
export declare function getBotName(userAgent: string): AIBotName | null;
export { AI_BOTS };

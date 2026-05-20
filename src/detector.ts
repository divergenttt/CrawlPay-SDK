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
] as const;

export type AIBotName = (typeof AI_BOTS)[number];

export function isAIBot(userAgent: string): boolean {
  return getBotName(userAgent) !== null;
}

export function getBotName(userAgent: string): AIBotName | null {
  if (!userAgent) return null;

  const lowerUA = userAgent.toLowerCase();

  for (const bot of AI_BOTS) {
    if (lowerUA.includes(bot.toLowerCase())) {
      return bot;
    }
  }

  return null;
}

export { AI_BOTS };

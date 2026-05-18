"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAIBot = exports.getBotName = exports.AI_BOTS = exports.crawlpay = void 0;
var middleware_1 = require("./middleware");
Object.defineProperty(exports, "crawlpay", { enumerable: true, get: function () { return middleware_1.crawlpay; } });
var detector_1 = require("./detector");
Object.defineProperty(exports, "AI_BOTS", { enumerable: true, get: function () { return detector_1.AI_BOTS; } });
Object.defineProperty(exports, "getBotName", { enumerable: true, get: function () { return detector_1.getBotName; } });
Object.defineProperty(exports, "isAIBot", { enumerable: true, get: function () { return detector_1.isAIBot; } });

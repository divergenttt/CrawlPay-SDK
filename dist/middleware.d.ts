export interface CrawlPayConfig {
    wallet: string;
    price?: string;
    network?: string;
}
export declare function crawlpay(config: CrawlPayConfig): (request: Request) => Response | null;

import { idbIsSupported, CustomDB, deleteDB } from "idb-managed";
export enum LogType {
    LOG = "log",
    INFO = "info",
    ERROR = "error",
}

const tableName = "log_web_table";
const DEFAULT_LOG_DURATION = 7 * 24 * 3600 * 1000; // keeps 7 days logs locally
const LOG_DETAIL_REPORTNAME_INDEX = "logReportName";
const LOG_DETAIL_CREATETIME_INDEX = "logCreateTime";
interface LogItem {
    [LOG_DETAIL_REPORTNAME_INDEX]: string;
    [LOG_DETAIL_CREATETIME_INDEX]: number;
    logSize: number;
    logString: string;
}
class WebLog {
    appId: string = "";
    private db: any = null;
    static idbIsSupported = idbIsSupported();
    itemDuration: number = 7 * 24 * 1000 * 3600;
    constructor(appId: string = "TEST") {
        if (!WebLog.idbIsSupported) {
            console.warn("IndexedDB is not supported");
            return;
        }
        this.appId = `WEB${appId}`;
        this.db = new CustomDB({
            dbName: this.appId,
            dbVersion: 1,
            itemDuration: this.itemDuration,
            tables: {
                [tableName]: {
                    indexList: [
                        {
                            indexName: LOG_DETAIL_REPORTNAME_INDEX,
                            unique: false,
                        },
                        {
                            indexName: LOG_DETAIL_CREATETIME_INDEX,
                            unique: false,
                        },
                        {
                            indexName: "type",
                            unique: false,
                        },
                    ],
                    itemDuration: this.itemDuration,
                },
            },
        });
    }
    async getLogsByReportName(reportName: string): Promise<LogItem[]> {
        const logs = (await this.db.getItemsInRange({
            tableName: tableName,
            indexRange: {
                indexName: LOG_DETAIL_REPORTNAME_INDEX,
                onlyIndex: reportName,
            },
        })) as any[] as LogItem[];
        return logs;
    }
    public async log(message: string, type: LogType) {
        if (!this.db) {
            return;
        }
        await this.db.addItems([
            {
                tableName: tableName,
                item: {
                    logCreateTime: new Date(),
                    type: type,
                    logString: message,
                },
            },
        ]);
    }
    public async report(reportName:string) {
        const logItems = await this.getLogsByReportName(reportName);
        // TODO: upload logItems
    }
}
const log = new WebLog();
export default log;

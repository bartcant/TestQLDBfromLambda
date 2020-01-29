import { PooledQldbDriver, QldbSession } from "amazon-qldb-driver-nodejs";

const testServiceConfigOptions = {
    region: "us-east-1"
};

const qldbDriver: PooledQldbDriver = new PooledQldbDriver("testLedger", testServiceConfigOptions));
const qldbSession: QldbSession = await qldbDriver.getSession();

for (const table of await qldbSession.getTableNames()) {
    console.log(table);
}

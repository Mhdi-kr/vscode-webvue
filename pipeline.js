const cp = require("child_process");
const util = require("util");

const childOptions = {
    shell: "bash",
    stdio: "inherit",
};

const exec = util.promisify(cp.exec);

(async () => {
    await Promise.all([
        cp.exec("cd packages/client/ && yarn run build", childOptions),
        cp.exec("cd packages/extension/ && yarn run compile", childOptions),
    ]);
    cp.execSync("cd packages/extension/ && yarn run dev", childOptions);
})();

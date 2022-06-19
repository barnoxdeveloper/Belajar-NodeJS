import cluster from "cluster";
import process, { exit } from "process";
import os from "os";
import http from "http";

if (cluster.isPrimary) {
    // jalankan worker
    console.info(`primary : ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (worker) => {
        console.info(`Worker ${worker.id} is Exit`);
        cluster.fork();
    });
}

if (cluster.isWorker) {
    console.info(`Worker : ${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        process.exit();
    });

    server.listen(3000);
}

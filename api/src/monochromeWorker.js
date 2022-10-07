const gm = require('gm');
const { workerData, parentPort } = require('worker_threads');

gm(workerData.source)
    .monochrome()
    .write(workerData.destination, (error) => {
        if (error) {
            console.log('Failed to write monochrome image.')
            throw error;
        }

        parentPort.postMessage({ monochrome: true });
    })
    ;
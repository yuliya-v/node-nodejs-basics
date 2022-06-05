import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';
import { getPath } from '../utils.js';

export const performCalculations = async () => {
  const numOfCpus = os.cpus().length;
  const { __dirname } = getPath(import.meta.url);
  const pathToWorker = path.join(__dirname, 'worker.js');
  const startNum = 10;

  const workers = Array(numOfCpus)
    .fill('')
    .map((_, ind) => ind + startNum)
    .map((val) => {
      return new Promise((res, rej) => {
        const worker = new Worker(pathToWorker, { workerData: val });
        worker.on('message', res);
        worker.on('error', rej);
      })
    })

  Promise.allSettled(workers)
    .then((data) => data
      .map((obj) => ({
        status: obj.status === 'fulfilled' ? 'resolved' : 'error',
        data: obj.status === 'fulfilled' ? obj.value : null
      }))
    )
    .then((data) => console.log(data))
};

performCalculations();

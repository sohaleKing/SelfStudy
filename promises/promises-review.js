// web worker callback syntax

webWorker.doWork((result) => {
    processResult(result)
})

// promise syntax

webWorker.doWork.then((result) => {
    processResult(result)
})

// symplify same as above

webWorker.doWork.then(processResult)

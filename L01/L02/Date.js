const startTime = Date.now();

function someHeeavyTask() {
    let result = 0;
}
const endTime = Date.now();
const duration = endTime - startTime;
console.log(`Execution time: ${duration} milliseconds`);
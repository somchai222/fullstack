function promiseTimeout(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, ms)
    }

    )
}

async function LongRunningOperattio() {
    return 42;
}

async function run() {
    console.log("Start")
    await promiseTimeout(2000);

    const response = await LongRunningOperattio();
    console.log(response)
    console.log("Stop")
}
console.log("Before Run");
run()
console.log("After Run")
function samplePromise() {
    return Promise.resolve("Andre");
}

const name = await samplePromise();
console.info(name);

import util from "util";

const name = "Andre";
console.info(`Hello ${name}`);
console.info(util.format("Hello %s", name));

const Person = {
    firstName: "satu",
    lastName: "dua",
};

console.info(`Person ${JSON.stringify(Person)}`);
console.info(util.format("Person %j", Person));

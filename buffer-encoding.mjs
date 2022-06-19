const buffer = Buffer.from("Andre Elm", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QW5kcmUgRWxt", "base64");

console.info(bufferBase64.toString("utf8"));

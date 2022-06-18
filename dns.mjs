import dns from "dns/promises";

const address = await dns.lookup("www.tunasmitra.co.id");

console.info(address.address);
console.info(address.family);

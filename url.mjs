import { URL } from "url";

const tms = new URL("https://www.tunasmitra.co.id/products?product=lakban");

tms.host = "www.tunas.co.id";
tms.searchParams.append("status", "ACTIVE");

console.info(tms.toString());
console.info(tms.href);
console.info(tms.protocol);
console.info(tms.host);
console.info(tms.pathname);
console.info(tms.searchParams);

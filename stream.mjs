import fs, { ReadStream } from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("satu\n");
writer.write("dua\n");
writer.write("tiga\n");
writer.end();

const read = fs.createReadStream("target.log");
read.addListener("data", (data) => {
    console.info(data.toString());
});

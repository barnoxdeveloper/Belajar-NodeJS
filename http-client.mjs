import https from "https";

const endpoint = "https://hookb.in/qBjz1D2Nb9TEqJGEyQlX";

const request = https.request(
    endpoint,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
    },
    (response) => {
        response.addListener("data", (data) => {
            console.info(`Recive data :${data.toString()}`);
        });
    }
);

const body = JSON.stringify({
    firstName: "satu",
    lastName: "dua",
});

request.write(body);
request.end();

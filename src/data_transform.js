const fs = require("fs");

const rawdata = fs.readFileSync("./src/data.json");
const data = JSON.parse(rawdata);

data.snaps.forEach((value, index) => {
  console.log(value);

  value.id = index + 1;
  value.timestamp = Date.now() - index * 1234567;
});

console.log(data);

fs.writeFileSync("./src/data.json", JSON.stringify(data));

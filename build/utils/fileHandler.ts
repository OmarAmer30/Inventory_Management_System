import fs from "fs/promises";

async function readData(file: string) {
  try {
    const data = await fs.readFile(file, "utf8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to parse JSON from file: ${file}`);
  }
}

async function writeData(file: string, parsedData: any[]) {
  const data = JSON.stringify(parsedData, null, 4);
  try {
    await fs.writeFile(file, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

exports.read = readData;
exports.write = writeData;

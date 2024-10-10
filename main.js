
// Part 2: Expanding Functionality
const csv = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

function parseCSV(csvString) {
    const rows = csvString.split("\n");
    return rows.map(row => row.split(","));
}

const resultArray = parseCSV(csv);
console.log(resultArray);


// Part 3: Tranforming Data
function transformData(csvArray) {
    const headers = csvArray[0].map(header => header.toLowerCase());
    return csvArray.slice(1).map(row => {
        let obj = {};
        row.forEach((value, index) => {
            obj[headers[index]] = value;
        });
        return obj;
    });
}

const objectArray = transformData(resultArray);
console.log(objectArray);


// Part 4: Sorting and Manipulating Data

objectArray.pop(); // Removing the last element
objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); 
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }); // Added to the end

// Calculating average age
const averageAge = objectArray.reduce((sum, obj) => sum + parseInt(obj.age), 0) / objectArray.length;
console.log(`Average Age: ${averageAge}`);



// Part 5: Full Circle
function toCSV(objArray) {
    const headers = Object.keys(objArray[0]).join(",");
    const rows = objArray.map(obj => Object.values(obj).join(","));
    return [headers, ...rows].join("\n");
}

const csvOutput = toCSV(objectArray);
console.log(csvOutput);
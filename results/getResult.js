const axios = require('axios');
const XLSX = require('xlsx');
const fs = require('fs');

// Define the URL of the GET method
const url = 'https://example.com/api/data';

// Call the GET method
axios.get(url)
  .then(response => {
    // Extract the data from the response
    const data = response.data;

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Add a new worksheet to the workbook
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    // Write the workbook to a file
    const filename = 'data.xlsx';
    XLSX.writeFile(workbook, filename);

    console.log(`Data written to ${filename}`);
  })
  .catch(error => {
    console.error(error);
  });
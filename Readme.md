CSV to JSON Converter

This script is designed to convert CSV (Comma Separated Values) files into JSON (JavaScript Object Notation) format. It is built using Node.js and utilizes the fs (File System) module for file operations.
Prerequisites

    Node.js installed on your machine (Download Node.js)

Installation

    Clone or download this repository to your local machine.

Usage

    Open your terminal or command prompt.
    Navigate to the directory where the script is located.
    Run the script with the following command:

    bash

    node csvToJson.js path/to/your/csv/file.csv

    Replace path/to/your/csv/file.csv with the actual path to your CSV file.

Script Explanation

    The script reads the content of the CSV file specified in the command-line argument.
    It parses the CSV data and converts it into a JSON array of objects, using the CSV headers as keys.
    The resulting JSON data is written to a new JSON file with the same name as the CSV file but with the .json extension.

Example

Suppose you have a CSV file named data.csv containing:

csv

Name,Age,Location
John,30,New York
Jane,25,Los Angeles

Running the script:


node csvToJson.js data.csv

Will generate a data.json file with the following content:

json

[
  {
    "Name": "John",
    "Age": "30",
    "Location": "New York"
  },
  {
    "Name": "Jane",
    "Age": "25",
    "Location": "Los Angeles"
  }
]

Notes

    Ensure that the CSV file path is correctly provided as an argument when running the script.
    The script assumes that the CSV file uses commas (,) as the delimiter and that the first row contains headers.

Feel free to modify and enhance the script according to your specific requirements. If you encounter any issues or have suggestions, please create an issue or submit a pull request.

const fs = require('fs');


function csvToJson(filePath) {
    const inputFileName = filePath.split('\\').pop()
    const outputFileName = inputFileName.replace('csv', 'json')
    // Lire le contenu du fichier CSV
    const csv = fs.readFileSync(filePath, 'utf-8');
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    // Convertir le résultat en format JSON
    const jsonData = JSON.stringify(result, null, 2); // 2 espaces pour l'indentation

    // Écrire le JSON dans un fichier avec une nouvelle ligne après chaque objet
    const outputFilePath = filePath.replace(inputFileName, outputFileName);
    fs.writeFileSync(outputFilePath, jsonData.replace(/\},/g, '},\n'), 'utf-8');

    console.log(`Conversion réussie. Résultat enregistré dans ${outputFilePath}`);
}

// Appel de la fonction csvToJson
const filePath = process.argv[2];
csvToJson(filePath);
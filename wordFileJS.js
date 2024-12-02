
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите название страницы: ', str => {
    readline.question('Введите описание: ', text => { 
        const fs = require('fs');

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="t.css">
    <title>${str}</title>
</head>
<body>
    <div>
        <h1>${str}</h1> 
        <h2>Описание: ${text}</h2> 
    </div>
    <script src="script.js"></script>
</body>
</html>`
        const pathToFile = str + '.html';
        fs.writeFileSync(pathToFile, html, {});
        console.log('Вы создали : '+ pathToFile); 
        readline.close();
    });
});
                            
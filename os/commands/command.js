module.exports = () => {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function prompt() {
        rl.question('', (answer) => {
            console.log("Bad command or file name\n");
            prompt();
        });

        process.stdout.write(cwd + ">");
        TTY.enableEditing();
        TTY.preventErasing();
    }

    prompt();
}
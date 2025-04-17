console.log("Starting CMP/OS...\n");

global.TTY = {
    enableEditing: () => {
        process.stdout.write("");
    },
    disableEditing: () => {
        process.stdout.write("");
    },
    preventErasing: () => {
        process.stdout.write("​");
    }
};

global.cwd = "/";

setInterval(() => {});

setTimeout(() => {
    require('./commands/command.js')();
}, 1000);
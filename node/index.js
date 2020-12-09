const fs = require('fs');
const Logger = require('logger').Logger;
const yaml = require('js-yaml');
const log = new Logger();


const binary = process.argv.shift();
const file = process.argv.shift();
const output = process.argv.shift();
const repo = process.argv.shift();

fs.writeFile(output, yaml.dump({
    version: '2.4',
    services: {
        latest: {
            image: repo + ':latest',
            build: {
                context: ".",
                dockerfile: "Dockerfile"
            },
        },
    },
}), (err) => {
    if(err) {
        log.error(err);
    }
    log.info('job done');
});

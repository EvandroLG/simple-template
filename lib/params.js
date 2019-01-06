module.exports = (argv) => {
    const args = argv.slice(2);
    const size = args.length;
    const keys = ['-d', '-c', '-t'];
    let params = {};

    for (let i=0; i < size; i=i+2) {
        const key = args[i];

        if (keys.includes(key)) {
            const value = args[i+1];
            params[key] = value;
        }
    }

    return params;
};
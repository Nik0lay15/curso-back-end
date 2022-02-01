const readInfo = ()=>{
    return {
        args:process.argv,
        os:process.platform,
        version:process.version,
        memoria:process.memoryUsage().rss / 1000000,
        path:process.execPath,
        pid:process.pid,
        root:process.argv[1]
    }
};

export default readInfo;
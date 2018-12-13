
## How to use
```
npm i @cp1001/await-sleep;
```

```
const sleep = require('@cp1001/await-sleep');

(async () => {
    console.time("Slept for");
    await sleep(1000);
    console.timeEnd("Slept for");
})();
```

```out
Slept for: 1005.843ms
```
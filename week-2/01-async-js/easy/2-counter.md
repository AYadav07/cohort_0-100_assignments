## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

```
let counter = 0;

function countFunction() {
  console.log(counter);
  counter++;
  setTimeout(countFunction, 1000);
}

setTimeout(countFunction, 1000);
```

(Hint: setTimeout)

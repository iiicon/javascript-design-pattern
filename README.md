# javascript-design-pattern

javascript-design-pattern

## singleton pattern

把一堆代码放入一个逻辑单元，可通过一个单一的变量来访问
最大的好处是封装代码，减少全局变量

```js
var singleton = (function () {
  var instance;
  function createInstance() {
    // code here
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
        return instance;
      }
      return instance;
    },
  };
})();
```

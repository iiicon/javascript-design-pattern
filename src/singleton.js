/**
 * 单例模式
 *
 * 把一堆代码放入一个逻辑单元，可通过一个单一的变量来访问
 * 最大的好处是封装代码，减少全局变量
 */

var btn = document.querySelector("#btn");
btn.onclick = function () {
  render();
};
function render() {
  console.log("render");
}

// 用单例模式，把一坨代码整合到一个对象里，作为它的属性和方法。只保留一个全局变量，通过预留的入口启动
var app = {
  btn: document.querySelector("#btn"),
  init() {
    this.bind();
  },
  bind: () => {
    this.btn.onclick = () => {
      this.render();
    };
  },
  render() {
    console.log("render");
  },
};

// 使用闭包，来隐藏部分不需要暴露的变量，只暴露出 init 方法。这种特殊的单例模式也叫模块模式（module pattern）
var app = (function () {
  var btn = document.querySelector("#btn");
  function bind() {
    btn.onclick = function () {
      render();
    };
  }
  function render() {
    console.log("render");
  }
  return {
    init: function () {
      bind();
    },
  };
})();
app.init();

// 改进，不立即创建实例，等需要的时候再创建
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
const instance1 = singleton.createInstance();
const instance2 = singleton.createInstance();
console.log(instance1 === instance2);

// 完整代码
var singleton = (function () {
  var instance;
  function createInstance() {
    var btn = document.querySelector("#btn");
    function bind() {
      btn.onclick = function () {
        render();
      };
    }
    function render() {
      console.log("render");
    }
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

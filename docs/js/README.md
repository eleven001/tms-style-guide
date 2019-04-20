# ES 规范

:::tip 阅前提示

本文为代码风格指南下<code>JS</code>部分，阐述了 JS 开发过程中团队规范细节，旨在规避错误代码，保证代码风格统一，降低团队协作成本，提升应用性能。

🚫 代表禁止规则，🤔 代表约定规则，🤩 代表推荐规则

:::

## 调试

- 🐞 **console**

  🚫 禁止在生产环境下使用 console

  ```javascript{1-2,4-5}
  // 🔴 NODE_ENV === "production"
  console.log(this);

  // ✅ NODE_ENV === "development"
  console.log(this);
  ```

* 🐞 **debug**

  🚫 禁止在生产环境下使用 debug

  ```javascript{1-2,4-5}
  // 🔴 NODE_ENV === "production"
  debugger;

  // ✅ NODE_ENV === "development"
  debugger;
  ```

## ES6

- ✨ **no-duplicate-imports**

  🚫 禁止重复导入

  ```javascript{1-4,6-8}
  // 🔴 重复导入
  import { a } from 'mainModule';
  import { b } from 'subModule';
  import { c } from 'mainModule';

  // ✅ 非重复导入
  import { a,c } from 'mainModule';
  import { b } from 'subModule';
  ```
- ✨ **no-var**

  🤩 使用 let 和 const 关键字在块级作用域下声明变量

  ```javascript{1-3,5-7}
  // 🔴 var 声明
  var a = "demo";
  var b = {};

  // ✅ let 及 const 声明
  let a = "demo";
  const b = {};
  ```
- ✨ **constructor-super**

  🤔 派生类中的构造函数必须调用 super()

  ```javascript{1-9,11-20}
  class A {
    constructor() {}
  }

  class A extends B {
    constructor() {
      // 🔴 不调用super()
    }
  }

  class A {
    constructor() {}
  }

  class A extends B {
    constructor() {
      // ✅ 调用super()
      super();
    }
  }
  ```
- ✨ **object-shorthand**

  🤩 对象中字面量必须采用简写

  ```javascript{1-5,7-11}
  // 🔴 非简写
  {
    a:a,
    c:function() {}
  }

  // ✅ 简写
  {
    a,
    c() {}
  }
  ```
- ✨ **prefer-destructuring**

  🤩 优先使用数组和对象解构

  ```javascript{1-3,5-7}
  // 🔴 非解构
  let b = object.a;
  let c = array[0];

  // ✅ 解构
  let { b } = object;
  const [ c ] = array;
  ```
- ✨ **prefer-arrow-function**

  🤩 优先使用箭头函数

  ```javascript{1-8,10-17}
  // 🔴 非箭头函数
  const a = function(){
    ...
  }

  array.forEach(function(item){
    ...
  })

  // ✅ 箭头函数
  const a = ()=>{
    ...
  }

  array.forEach(item =>{
    ...
  })
  ```
- ✨ **prefer-spread**

  🤩 优先使用扩展运算符

  ```javascript{1-7,10-16}
  // 🔴 非扩展运算符
  Math.max.apply(Math, array);

  function foo(a,b,c,d) {
    console.log(Array.prototype.slice.call(arguments, 1));
  }
  foo(1,2,3,4)


  // ✅ 扩展运算符
  Math.max(...array);

  const foo = (a,...args)=>{
    console.log(args)
  }
  foo(1,2,3,4)
  
  ```
- ✨ **prefer-template-string**

  🤩 优先使用模板字符串而非字符串连接

  ```javascript{1-2,4-5}
  // 🔴 字符串连接
  var b = "hello" + a + "!"

  // ✅ 模板字符串
  const b = `hello ${a}!`
  ```

## 语法

- 💄 **no-restricted-names**

  🚫 不可用关键字或严格模式下的关键字进行命名

  ```javascript{1-5,7-11}
  // 🔴 关键字命名
  var Object = {}
  
  'use strict'
  var Package = "demo"

  // ✅ 非关键字命名
  const newObj = {}
  
  'use strict'
  var pkg = "demo"
  ```
- 💄 **no-allow-function**

  🚫 禁止使用 alert、eval 及 with

  ```javascript{1-3,5-7}
  // 🔴 使用 alert
  alert(1)
  ...

  // ✅ 注释并删除 alert
  // alert(1)
  ...
  ```
- 💄 **no-unused-vars**

  🚫 禁止未使用过的变量

  ```javascript{1-3,5-8}
  // 🔴 a 未曾使用
  var a = 1
  ...

  // ✅ a,b 都在使用
  const a = 1
  let b = a
  ...
  ```
- 💄 **variable-naming**

  🤔 变量、函数名及文件名统一采用小驼峰式命名法，常量统一采用宏命名

  ```javascript{1-3,5-7}
  // 🔴 字符串连接
  var page_num = 1
  var behaviorStatus = "off"

  // ✅ 模板字符串
  let pageNum = 1
  const BEHAVIOR_STATUS = "off"
  ```

- 💄 **multiline-comment-style**

  🤔 函数多参数注释声明使用特定风格

  ```javascript{1-8,10-20}
  // 🔴 函数参数多行注释声明

  // 删除列表数据时获取页码数
  // list                     页面列表数据
  // currentPage              当前页码数
  function getPageNum( list,currentPage ){
    ...
  }
  
  // ✅ 函数参数多行注释声明

  /**
  * @func                     getPageNum
  * @des                      删除列表数据时获取页码数
  * @param     { Array }      list 
  * @param     { Number }     currentPage 
  */
  function getPageNum( list,currentPage ){
    ...
  }
  ```

<style>
div[class*="language-"] {
  background-color: #021527;
}
div[class*="language-"] .highlight-lines .highlighted{
  background-color: #022a4b;
  display: block;
  padding-right: 1em;
  padding-left: 1.25em;
  border-left: .25em solid #3eaf7c;
}
</style>

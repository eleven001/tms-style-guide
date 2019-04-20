# Less 规范

:::tip 阅前提示

本文为代码风格指南下<code>Less</code>部分，阐述了 Less 开发过程中团队规范细节，旨在规避错误代码，保证代码风格统一，降低团队协作成本，提升应用性能。

🚫 代表禁止规则，🤔 代表约定规则，🤩 代表推荐规则

:::

## 基础库

Less基础库目录结构如下：

::: vue
`style`_(**Less Base文件夹**)_
│   
├── `theme`_(**Less Theme**)_
│   │
│   ├── `color`_(**颜色变量配置**)_
│   │
│   ├── `typography`_(**字体变量配置**)_
│   │
│   ├── `variable`_(**常用变量配置**)_
│   │
│   ├── `normalize`_(**全局样式格式化配置**)_
│   │
│   └── index.less _(**Less Theme出口**)_
│   
│   
├── `utilities`_(**Less Mixins**)_
│   │
│   ├── `mixins`_(**Mixins文件夹**)_
│   │    │
│   │    ├── `layout`_(**布局**)_
│   │    │
│   │    ├── `size`_(**大小**)_
│   │    │
│   │    ├── `shape`_(**形状**)_
│   │    │
│   │    ├── `color`_(**色彩**)_
│   │    │
│   │    └── `text`_(**文字**)_
│   │
│   └── index.less _(**Less Mixins出口**)_
│ 
└── `animation`_(**动效库**)_
:::  

配置全局 Less 时，可遵循上述结构进行添加。

## 命名

- 🌼 **variable**

  🤔 Less 变量命名，采用短横线风格

  ```less{1-2,4-5}
  // 🔴 不推荐的命名方式
  @petColorInfo: #3b8cff;

  // ✅ 推荐的命名方式
  @pet-color-info: #3b8cff;
  ```
- 🌼 **mixin**

  🤔 Less 混入函数命名，采用短横线风格

  ```less{1-4,6-9}
  // 🔴 不推荐的命名方式
  .petColor(@color: #ffffff){
    color: @color;
  }

  // ✅ 推荐的命名方式
  .pet-color(@color: #ffffff){
    color: @color;
  }
  ```

## 风格

- 💄 **mixin-style**

  🤔 Less 混入函数必须进行调用

  ```less{1-8,10-17}
  // 🔴 不推荐的使用方式
  .pet-display(@type:none){
    display: @type;
  }

  .demo{
    .pet-display; 
  }

  // ✅ 推荐的使用方式
  .pet-display(@type:none){
    display: @type;
  }

  .demo{
    .pet-display(); 
  }
  ```

- 💄 **extend-style**

  🤔 Less 扩展函数统一在内部调用

  ```less{1-8,10-18}
  // 🔴 不推荐的使用方式
  .base-flex{
    display: flex;
  }

  .demo:extend(.base-flex) {
    ...
  }

  // ✅ 推荐的使用方式
  .base-flex{
    display: flex;
  }

  .demo {
    &:extend(.base-flex);
    ...
  }
  ```

- 💄 **comment-style**

  🤔 Less 多行注释使用特定风格，混入函数必须提供注释

  ```less{1-10,12-25}
  // 🔴 不推荐的注释风格

  //显示元素
  .visible(@display) when (@display=show){
    visibility: visible;
  }
  //隐藏元素
  .visible(@display) when (@display=hide){
    visibility: hidden;
  }

  // ✅ 推荐的注释风格

  //@name             元素是否显示
  //@func             visible
  //@param            @display（show,hide）

  //显示元素
  .visible(@display) when (@display=show){
    visibility: visible;
  }
  //隐藏元素
  .visible(@display) when (@display=hide){
    visibility: hidden;
  }
  ```

- 💄 **order-in-less**

  🤩 Less 声明块推荐按照变量声明、混入声明、嵌套声明、嵌套规则的顺序循序渐进

  ```less{1-25,27-51}
  // 🔴 声明块顺序紊乱

  @keyframes spinner-fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (min-width: 768px) {
    ...
  }

  .demo{
    ...
  }

  .text-sc(@size: 14px, @color: #606266){
    font-size: @size;
    color: @color;
  }

  @pet-color-info: #3b8cff;
  
  // ✅ 声明块循序渐进

  @pet-color-info: #3b8cff;

  .text-sc(@size: 14px, @color: #606266){
    font-size: @size;
    color: @color;
  }

  .demo{
    ...
  }

  @keyframes spinner-fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (min-width: 768px) {
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
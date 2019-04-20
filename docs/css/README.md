# CSS 规范

:::tip 阅前提示

本文为代码风格指南下<code>CSS</code>部分，阐述了 CSS 开发过程中团队规范细节，旨在规避错误代码，保证代码风格统一，降低团队协作成本，提升应用性能。

🚫 代表禁止规则，🤔 代表约定规则，🤩 代表推荐规则

:::

## 命名

- 🌼 **ID 选择器**

  🤩 ID 选择器命名建议与 Vue 中 Ref 保持一致，采用小驼峰式风格

  ⚠️ 不建议使用 ID ，尽可能使用 Class

  ```css{1-4,6-9}
  /* 🔴 不推荐的命名方式 */
  #demo-module{
    ...
  }

  /* ✅ 推荐的命名方式 */
  #demoModule{
    ...
  }
  ```


- 🌼 **Class 选择器**
 
  🤔 Class 选择器命名采用 BEM 风格

  ```css{1-10,12-31}
  /* 🔴 不推荐的命名方式 */
  .header{
    ...
  }
  .headerButton{
    ...
  }
  .headerButtonActive{
    ...
  }

  /* ✅ 推荐的命名方式 */

  /* BEM 格式 */
  .[block-prefix]-[block-name]__[element-name]--[modifier-name] {
    ...
  }

  /* BEM 案例 */
  .header__button{
    ...
  }
  .header--active{
    ...
  }
  .header__button--active{
    ...
  }
  .main-header__button--active{
    ...
  }
  ```
- 🌼 **自定义属性**
  
  🤩 自定义属性(--custom-property)命名采用短横线风格

  ```css{1-4,6-9}
  /* 🔴 不推荐的命名方式 */
  :root {
    --bgColor: 3d7e9a;
  }

  /* ✅ 推荐的命名方式 */
  :root {
    --bg-color: 3d7e9a;
  }
  ```

## 颜色

- 🍭 **no-color-named**

  🚫 禁止用颜色英文单词直接命名颜色

  ```css{1-4,6-9}
  /* 🔴 颜色英文单词直接命名颜色 */
  .demo{
    color: white;
  }

  /* ✅ 推荐的命名方式 */
  .demo{
    color: #ffffff;
  }
  ```
- 🍭 **color-hex-style**

  🤔 16 进制颜色采用扩写，并且字母小写

  ```css{1-7,9-12}
  /* 🔴 颜色英文单词直接命名颜色 */
  .demo{
    color: #FFFFFF;
  }
  .demo{
    color: #fff;
  }

  /* ✅ 推荐的命名方式 */
  .demo{
    color: #ffffff;
  }
  ```
- 🍭 **color-no-invalid-hex**

  🚫 禁止无效的 16 进制颜色

  ```css{1-4,6-9}
  /* 🔴 无效的 16 进制颜色 */
  .demo{
    color: #00;
  }

  /* ✅ 有效的 16 进制颜色 */
  .demo{
    color: #000000;
  }
  ```

## 函数

- 🛠️ **function-calc-no-invalid**

  🚫 禁止在 calc 函数中使用无效表达式

  ```css{1-6,8-12}
  /* 🔴 无效 calc 表达式 */
  .demo{
    margin-left: calc(100% - + 80px);
    height: calc();
    width: calc(100px / 0);
  }

  /* ✅ 有效 calc 表达式 */
  .demo{
    width: calc(100vw - 200px);
    height: calc(var(--base-height) + 10px);
  }
  ```

- 🛠️ **function-linear-gradient-no-nonstandard-direction**

  🚫 禁止在 linear-gradient() 中调用不符合标准语法的无效方向值

  ```css{1-4,6-9}
  /* 🔴 无效方向值 */
  .demo{
    background: linear-gradient(bottom, #ffffff, #000000);
  }

  /* ✅ 有效方向值 */
  .demo{
    background: linear-gradient(to bottom, #ffffff, #000000);
  }
  ```


## 单位

- 🧩 **unit-blacklist**

  🚫 禁止使用 <code>em</code> 、<code>dpi</code> 及 <code>pt</code> 作为单位

  ```css{1-6,8-14}
  /* 🔴 禁止单位 */
  .demo {
    font-size: 0.8em;
    width: 10pt;
    height: 10dpi;
  }

  /* ✅ 推荐单位 */
  .demo {
    font-size: 14px;
    margin-left: 5rem;
    width: 10vw;
    height: 100%;
  }
  ```

- 🧩 **length-zero-no-unit**

  🚫 禁止零长度的单位

  ```css{1-5,7-11}
  /* 🔴 零长度有单位 */
  .demo {
    top: 0rem;
    left: 0px;
  }

  /* ✅ 零长度无单位 */
  .demo {
    top: 0;
    left: 0;
  }
  ```
- 🧩 **number-leading-zero**

  🤩 小于 1 的小数有一个前导零

  ```css{1-4,6-9}
  /* 🔴 无前导零 */
  .demo {
    transform: translate(2px, .4px);
  }

  /* ✅ 有前导零 */
  .demo {
    transform: translate(2px, 0.4px);
  }
  ```

- 🧩 **number-no-trailing-zeros**

  🤩 避免多数量的尾随零

  ```css{1-4,6-9}
  /* 🔴 零长度有单位 */
  .demo {
    width: 20.5000vw;
  }

  /* ✅ 零长度无单位 */
  .demo {
    width: 20.5vw;
  }
  ```

## 前缀

- 📎 **prefix**

  🚫 禁止添加浏览器前缀

  ⚠️ PostCSS 内置插件 autoprefixer 会统一处理前缀

  ```css{1-19,21-39}
  /* 🔴 添加浏览器前缀 */
  @media (-webkit-min-device-pixel-ratio: 1) {
    ...
  }

  input::-webkit-input-placeholder {
    color: #ffffff;
  }

  .demo {
    display: -webkit-flex;
    -webkit-transform: scale(1);
  }

  @-webkit-keyframes {
    100% { 
      left: 0; 
    } 
  }

  /* ✅ 无浏览器前缀 */
  @media (min-device-pixel-ratio: 1) {
    ...
  }

  input::placeholder {
    color: #ffffff;
  }

  .demo {
    display: flex;
    transform: scale(1);
  }

  @keyframes {
    100% { 
      left: 0; 
    } 
  }
  ```

## 语法

- 💄 **no-duplicate-at-import-rules**

  🚫 禁止在样式表中使用重复的 @import 规则

  ```css{1-4,6-8}
  /* 🔴 重复 @import */
  @import "common.css";
  @import "reset.css";
  @import "common.css";

  /* ✅ 无重复 @import */
  @import "common.css";
  @import "reset.css";
  ```
- 💄 **declaration-block-no-shorthand-property-overrides**

  🚫 禁止在样式表中使用简写属性覆盖相关的扩写属性

  ```css{1-5,7-11}
  /* 🔴 简写属性覆盖扩写属性 */
  .demo {
    margin-top: 10px;
    margin: 20px;
  }

  /* ✅ 扩写属性覆盖简写属性 */
  .demo {
    margin: 20px;
    margin-top: 10px;
  }
  ```
- 💄 **declaration-block-no-duplicate-properties**

  🚫 禁止声明块的重复属性

  ⚠️ 考虑到兼容问题，连续的重复属性可忽略

  ```css{1-6,8-13}
  /* 🔴 不连续的重复属性 */
  .demo {
    color: #000000;
    display: flex;
    color: #ffffff;
  }

  /* ✅ 连续的重复属性 */
  .demo {
    color: #000000;
    color: #ffffff;
    display: flex;
  }
  ```
- 💄 **declaration-block-single-line-max-declarations**

  🚫 限制一个单行声明块中声明的数量

  ```css{1-4,6-10}
  /* 🔴 单行多声明 */
  .demo {
    margin: 20px;color: #ffffff;
  }

  /* ✅ 单行单声明 */
  .demo {
    margin: 20px;
    color: #ffffff;
  }
  ```
- 💄 **block-no-empty**

  🚫 禁止空块

  ```css{1-4,6-9}
  /* 🔴 空块无声明 */
  .demo {
    
  }

  /* ✅ 非空块 */
  .demo {
    color: #ffffff;
  }
  ```
- 💄 **comment-style**

  🚫 禁止 CSS 中使用空注释及双斜杠注释

  ```css{1-5,7-10}
  /* 🔴 错误注释 */
  .demo {
    /* */
    // margin: 20px;
  }

  /* ✅ 正确注释 */
  .demo {
    /* color: #ffffff; */
  }
  ```
- 💄 **properties-order**

  🤩 CSS 属性声明推荐按照尺寸、字体、外观、布局的顺序循序渐进

  ```css{1-15,17-31}
  /* 🔴 属性声明顺序紊乱 */
  .demo {
    height: 64px;
    font-size: 20px;
    width: 200px;
    animation: spinner-fade-out 1s linear infinite;
    text-align: center;
    color: #ffffff;
    line-height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #304156;
    z-index: 999;
  }

  /* ✅ 属性声明循序渐进 */
  .demo {
    width: 200px;
    height: 64px;
    font-size: 20px;
    text-align: center;
    line-height: 64px;
    color: #ffffff;
    background: #304156;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: spinner-fade-out 1s linear infinite;
    z-index: 999;
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


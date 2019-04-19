# Vue 规范

:::tip 阅前提示

本文为代码风格指南下<code>Vue</code>部分，阐述了 Vue 开发过程中团队规范细节，旨在规避错误代码，保证代码风格统一，降低团队协作成本，提升应用性能。

🚫 代表禁止规则，🤔 代表约定规则，🤩 代表推荐规则

:::

## 模板

- 🔖 **no-use-v-if-with-v-for**

  🚫 禁止在同一元素上使用 v-if 和 v-for 

  ```vue{1-5,7-10}
  <!-- 🔴 v-if 和 v-for 使用在同一元素 -->
  <li 
    v-if="isShow" 
    v-for="item in lists">
  </li>

  <!-- ✅ v-if 和 v-for 分开使用 -->
  <ul v-if="isShow">
    <li v-for="item in lists"></li>
  </ul>
  ```
- 🔖 **require-v-for-key**

  🤔 使用 v-for 时必须添加 key

  ```vue{1-2,4-8}
  <!-- 🔴 v-for 缺失 key -->
  <div v-for="good in goods"/>

  <!-- ✅ v-for 添加 key -->
  <div
    v-for="good in goods"
    :key="good.id"
  />
  ```
- 🔖 **no-unused-vars**

  🚫 不允许存在未使用的变量在 v-for 下

  ```vue{1-4,6-9}
  <!-- 🔴 v-for 中未使用变量 -->
  <ul v-for="i in 10">
    <li>hello</li>
  </ul>

  <!-- ✅ v-for 中使用变量 -->
  <ul v-for="i in 10">
    <li>{{ i }}</li>
  </ul>
  ```
- 🔖 **no-use-duplicate-variable**

  🚫 不允许在 v-for 下使用重复变量迭代

  ```vue{1-4,6-9}
  <!-- 🔴 使用重复变量迭代 -->
  <div v-for="item in 10">
    <div v-for="item in 20"></div>
  </div>

  <!-- ✅ 不使用重复变量迭代 -->
  <div v-for="i in 10">
    <div v-for="j in 20"></div>
  </div>
  ```
- 🔖 **no-duplicate-attributes**

  🚫 不允许在模板标签上使用重复的属性

  ```vue{1-4,6-7}
  <!-- 🔴 使用重复的属性 -->
  <base-component :title="demo" title="example" />
  <base-component title="demo" :title="example" />
  <base-component title="demo" title="example" />

  <!-- ✅ 不使用重复的属性 -->
  <base-component :title="demo" />
  ```

## 脚本

- 🛠️ **no-unused-components**

  🚫 禁止引入未使用的组件

  ```vue{1-12,14-25}
  <!-- 🔴 引入的组件未使用 -->
  <template>
    ...
  </template>
  <script>
    import BaseButton from 'components/BaseButton.vue'
    export default {
      components: {
        BaseButton
      }
    }
  </script>

  <!-- ✅ 引入的组件在使用 -->
  <template>
    <base-button />
  </template>
  <script>
    import BaseButton from 'components/BaseButton.vue'
    export default {
      components: {
        BaseButton
      }
    }
  </script>
  ```

- 🛠️ **return-in-computed-property**

  🤔 computed 中必须有 return 

  ```vue{1-12,14-27}
  <!-- 🔴 缺失 return -->
  <script>
    export default {
      computed: {
        value () {
          if(this.status){
            return this.size
          } 
        }
      }
    }
  </script>

  <!-- ✅ 包含 return -->
  <script>
    export default {
      computed: {
        value () {
          if(this.status){
            return this.size
          }else{
            return 0
          }
        }
      }
    }
  </script>
  ```

- 🛠️ **require-valid-default-prop**

  🤔 props 中 type 必须与 default 类型匹配

  ```vue{1-11,13-23}
  <!-- 🔴 type 与 default 类型不匹配 -->
  <script>
    export default {
      props: {
        propC: {
          type: Boolean,
          default: "true"
        }
      }
    }
  </script>

  <!-- ✅ type 与 default 类型匹配 -->
  <script>
    export default {
      props: {
        propC: {
          type: Boolean,
          default: true
        }
      }
    }
  </script>
  ```

## 风格

- 💄 **v-bind-style**

  🤔 强制 v-bind 采用缩写形式

  ```vue{1-2,4-5}
  <!-- 🔴 v-bind 不采用缩写形式 -->
  <div v-bind:status="off" />

  <!-- ✅ v-bind 采用缩写形式 -->
  <div :status="off" />
  ```

- 💄 **v-on-style**

  🤔 强制 v-on 采用缩写形式

  ```vue{1-2,4-5}
  <!-- 🔴 v-on 不采用缩写形式 -->
  <div v-on:click="handlerClick" />

  <!-- ✅ v-on 采用缩写形式 -->
  <div @click="handlerClick" />
  ```
- 💄 **no-max-attributes-per-line**

  🤩 组件具有多个属性时不写在同一行  

  ```vue{1-2,4-9}
  <!-- 🔴 多个属性时在同一行 -->
  <base-component :title="demo" :content="666" />

  <!-- ✅ 多个属性时不在同一行 -->
  <base-component :title="demo" />
  <base-component 
    :title="demo" 
    :content="666"
  />
  ```
- 💄 **no-spaces-around-equal-signs-in-attribute**

  🤔 组件属性与赋值等号间不存在空格  

  ```vue{1-2,4-5}
  <!-- 🔴 属性与赋值等号间存在空格 -->
  <base-component :title = "demo" />

  <!-- ✅ 属性与赋值等号间不存在空格  -->
  <base-component :title="demo" />
  ```
- 💄 **component-naming**

  🤔 脚本中组件命名及 SFC 命名统一采用大驼峰风格，模板中组件命名统一采用短横线风格

  ```vue{1-15,17-31}
  <!-- 🔴 组件命名错误 -->
  <template>
    <baseButton />
    <Picker />
  </template>
  <script>
    import baseButton from 'components/baseButton.vue'
    import Picker from 'components/picker.vue'
    export default {
      components: {
        baseButton,
        Picker
      }
    }
  </script>

  <!-- ✅ 组件命名正确  -->
  <template>
    <base-button />
    <base-picker />
  </template>
  <script>
    import BaseButton from 'components/BaseButton.vue'
    import BasePicker from 'components/Picker.vue'
    export default {
      components: {
        BaseButton,
        BasePicker
      }
    }
  </script>
  ```
- 💄 **prop-naming**

  🤔 props 命名采用小驼峰风格

  ```vue{1-20,22-42}
  <!-- 🔴 props 命名错误 -->
  <template>
    <base-button :BtnStyle="BtnStyle" />
  </template>
  <script>
    import BaseButton from 'components/BaseButton.vue'
    export default {
      props:{
        PropExample: Number
      },
      data(){
        return{
          BtnStyle: "round"
        }
      },
      components: {
        BaseButton
      }
    }
  </script>

  <!-- ✅ props 命名正确  -->
  <template>
    <base-button size="medium" :btnStyle="btnStyle" />
  </template>
  <script>
    import BaseButton from 'components/BaseButton.vue'
    export default {
      props:{
        propExample: Number,
        list: Array
      },
      data(){
        return{
          btnStyle: "round"
        }
      },
      components: {
        BaseButton
      }
    }
  </script>
  ```
- 🛠️ **order-in-components**

  🤩 脚本中的钩子函数应当遵循组件生命周期渐进和依赖注入靠前规则

  ```vue{1-36,38-73}
  <!-- 🔴 钩子函数顺序紊乱 -->
  <script>
    export default {
      name: "home",
      directives:{
        ...
      },
      methods:{
        ...
      },
      props: {
        ...
      },
      data(){
        ...
      },
      beforeDestroy(){
        ...
      },
      computed(){
        ...
      },
      mounted(){
        ...
      },
      watch:{
        ...
      },
      created(){
        ...
      },
      components:{
        ...
      }
    }
  </script>

  <!-- ✅ 钩子函数循序渐进  -->
  <script>
    export default {
      name: "home",
      components:{
        ...
      },
      directives:{
        ...
      },
      props: {
        ...
      },
      data(){
        ...
      },
      computed(){
        ...
      },
      watch:{
        ...
      },
      created(){
        ...
      },
      mounted(){
        ...
      },
      beforeDestroy(){
        ...
      },
      methods:{
        ...
      }
    }
  </script>
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
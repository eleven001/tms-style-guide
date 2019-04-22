# 阅前指南

随着前端项目体积的增长，新人的融入，代码风格越来越多变，这造成了团队协作上的效率显著下降，也提升了人员间的沟通成本。考虑到历史遗留成本及人员适应度，一份前端规范呼之欲出。

## 规范指引

前端规范主要由以下五份规范组合而成：

- [ES 规范](https://pets-web.github.io/tms-style-guide/js/)

- [Vue 规范](https://pets-web.github.io/tms-style-guide/js/vue.html)

- [CSS 规范](https://pets-web.github.io/tms-style-guide/css/)

- [Less 规范](https://pets-web.github.io/tms-style-guide/css/less.html)

- [Git 工作流](https://pets-web.github.io/tms-style-guide/git/)

## 规范说明

- ES 及 Vue 规范通过 [ESLint](https://eslint.org/) 在项目中落地生效

- CSS 及 Less 规范通过 [StyleLint](https://stylelint.io/) 在项目中落地生效

- Git Commit 规范通过 [Husky](https://github.com/typicode/husky) 在项目中落地生效

- 代码格式化通过 [Prettier](https://prettier.io/) 在项目中落地生效

## 工程化流程

![](./imgs/lint.svg)

## Lint 库

为了加速前端规范的落地，提供 ESLint 及 StyleLint 两个 npm 包，如下：

- [eslint-config-tmsfe](https://github.com/Pets-web/eslint-config-tms)

- [stylelint-config-tmsfe](https://github.com/Pets-web/stylelint-config-tms)

## 使用说明

1. 引入相应的 npm 包，命令如下：

```bash
# git hook
npm i husky lint-staged -D
# eslint
npm i eslint eslint-config-tmsfe -D
# stylelint
npm i stylelint stylelint-config-tmsfe -D
```

2. 配置 <code>package.json</code> 中的 <code>script</code>

```json
"scripts": {
  "eslint": "./node_modules/eslint/bin/eslint.js",
  "stylelint":"./node_modules/stylelint/bin/stylelint.js"
}
```

3. 项目根目录下新建 <code>.eslintrc.js</code> 及 <code>.eslintignore</code> 两个文件，配置如下：

```javascript
//.eslintrc.js
module.exports = {
  extends: ["eslint-config-tmsfe"]
};
```

```bash
# .eslintignore
dist
node_modules
static
```

4. 项目根目录下新建 <code>.stylelintrc.js</code> 及 <code>.stylelintignore</code> 两个文件，配置如下：

```javascript
//.stylelintrc.js
module.exports = {
  extends: ["stylelint-config-tmsfe"]
};
```

```bash
# .stylelintignore
dist
node_modules
static
```

5. 项目根目录下新建 <code>.prettierrc</code> 文件，配置如下：

```javascript
// .prettierrc
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": false,
  "jsxBracketSameLine": true
}
```

6. 项目根目录下新建 <code>git-hooks</code> 文件夹，并在其下面新建 <code>verify-commit-msg.js</code> 文件，配置如下：

```javascript
const chalk = require('chalk')
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()
const commitRE = /^(revert: )?(install|config|docs|perf|update|ui|test)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
    chalk.red(`  Proper commit message format is required for team commit specification.\n`) +
    `  ${chalk.red('Examples:')}\n `+
    `   ${chalk.green(`feat(v1.0): add new features`)}\n` +
    `    ${chalk.green(`fix: hotfix bug `)}\n\n` +
    chalk.red(`  See https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines for more details.\n`) 
  )
  process.exit(1)
}
```

7. 配置 <code>package.json</code> 中的 git hooks

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "node git-hooks/verify-commit-msg.js"
  }
},
"lint-staged": {
  "src/**/*.{js,vue}": [
    "prettier --write",
    "eslint --fix",
    "git add"
  ],
  "src/**/*.{css,scss,less,vue}": [
    "prettier --write",
    "stylelint --fix",
    "git add"
  ]
}
```

8. 开发中提交文件时，只需触发<code>git commit</code>命令，即可触发相应的 Lint


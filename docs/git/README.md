# Git 工作流

:::tip 阅前提示

本文为代码风格指南下<code>Git</code>部分，阐述了开发过程中团队 Git 工作流，旨在规范开发流程。

:::

## 分支

| 分支名    |       全名        |     说明     |           示例           |
| --------- | :---------------: | :----------: | :----------------------: |
| master    |      master       |    主分支    |          master          |
| dev 　    |    development    |  测试主分支  |           dev            |
| qa 　     | quality assurance |  测试副分支  |            qa            |
| pre 　    |    pre-release    |  预发布分支  |           pre            |
| feture 　 |      feture       | 版本需求分支 |          v2.0.0          |
| tmp 　    |     temporary     | 临时需求分支 |  tmp_0420_class_record   |
| hotfix 　 |      hotfix       | 紧急修复分支 | hotfix_0420_class_record |

## 版本号

版本号的命名可参阅：[语义化版本](https://semver.org/lang/zh-CN/)

示例命名： **v1.6.2**

版本格式：[前缀]主版本号.次版本号.修订号，版本号递增规则如下：

1. 主版本号：当你做了**不兼容的 API 修改**，比如重构、改版、升级。

2. 次版本号：当你做了**向下兼容的功能性新增**，比如持续性的功能性迭代。

3. 修订号：当你做了**向下兼容的问题修正**，比如临时版本、紧急修复版本。

## Git

Git 的常规操作可参阅：[A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

工作时的 Git 流程如下：

1. **克隆远程 master 仓库到本地**

```bash
cd example-dir
git clone https://github.com/example.git
```

2. **新建分支，并按版本号规范进行命名**

```bash
git checkout -b v1.6.0
```

3. **常规开发代码，并提交代码**

```bash
git add .
git commit -m "docs: update docs"
git push origin v1.6.0
```

需要注意的是，代码提交需遵循下述规范：

- 提交信息需要遵循 [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)，格式如下：

```java
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- 提交信息的 type 类型，如下表所示：

| 类型    |             说明             |
| ------- | :--------------------------: |
| install | 变更将影响系统构建及相关依赖 |
| config  |       变更持续集成配置       |
| docs    |           文档变更           |
| add     |           新增功能           |
| perf    |           性能提升           |
| update  | 优化代码、修复 bug、更新代码 |
| ui      |         UI 样式修复          |
| test    |           新增测试           |
| revert  |      回滚代码至上个版本      |

- 功能代码请勿一次性集中提交，切割成相关小功能点，分次提交为宜

4. **功能开发完成，提交到测试环境**

```bash
git checkout dev
git merge origin v1.6.0
# resolve conflict
git push origin dev
# build dev
```

5. **功能测试完成，预备发布至线上环境时，需要先拉取 master 验证冲突与否**

```bash
git checkout v1.6.0
git pull origin master
# resolve conflict
git push origin v1.6.0
```

## 上线

版本上线需要分三步走：

1. 在 Gitlab 上发送 Merge Request，编写上线文档，并通知到负责上线的人员

2. 上线构建完，需在当前 master 下打上对应 Tag，并在 Release notes 下追加本次需求 markdown 说明，格式如下：

```markdown
## ChangeLog

1. 新增上课录音功能
2. 新增代码 Lint 工具

## Resources

- [需求文档](http://confluence.example.com/pages/viewpage.action?pageId=5805663)
- [设计稿](https://lanhuapp.com/web/#/item/project/board?pid=c0bc717e)

## Collaborators

- 张三
- 李四
- 王五
```

3. 上线之后，如果出现紧急问题需要修复，处理如下：

```bash
git checkout master
git checkout -b hotfix_0420_class_record
# resolve bug
git push origin hotfix_0420_class_record
# test passed
# merge request
# build master
git branch -d hotfix_0420_class_record
git push origin --delete hotfix_0420_class_record
```

简单来说，拉新分支解决问题，再合并至主分支并删除新分支。

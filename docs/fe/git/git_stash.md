---
tags:
  - git
  - git stash
  - 工作流
---
### Git Stash

最近工作中总是在同一个项目的不同需求之间周转,在开发过程中不想要频繁的commit、checkout branch, Google搜索了一下发现了`git stash`这个git命令,下面介绍一下`git stash`命令

:::tip
先来看看git stash的作用: git stash用于想要保存当前的修改,但是想回到之前最后一次提交的干净的工作仓库时进行的操作.git stash将本地的修改保存起来,并且将当前代码切换到HEAD提交上.
:::

#### 应用举例
通过几个例子来说明一下git stash的用法

1. git stash
当你开发进行到一半的时候,测试突然说有个bug让你修复,此时你代码写了一半还不想进行提交或者这次的feture不值得一次commit,这时候你就可以使用git stash.
此时你的代码git status如下:
```git
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   docs/.vuepress/config/nav.js

no changes added to commit (use "git add" and/or "git commit -a")
```
你修改了nav.js,但是此时不想commit,你就可以使用git stash命令
```git
git stash 
Saved working directory and index state WIP on master: b91fff8 feat: 文章内容格式化
```
git stash 会保存你当前未提交的修改到存储列表中,并且将当前代码会滚到所在分支的HEAD提交,也就是未修改前的状态.这样你就不要用产生一次非必要的commit,而且可以很好的切换分支去修复bug.
当你修复完bug的时候切回你的开发分支想要将stash的代码还原回来的时候怎么办呢?我们可以用下面的命令了

2. git stash list
git stash list 可以查看当前我们有多少次stash代码
```git
git stash list
stash@{0}: WIP on master: b91fff8 feat: 文章内容格式化
```
接下来就是恢复代码
3. 恢复代码
我们可以使用
```git
git stahs pop
```
git stash pop的意思是将stash list中最新的存贮还原.

同样恢复代码我们也可以使用
```git
git stash apply stash@{0}
```
apply可以恢复指定的某次stash, stash@{0}类似于tag,从0开始,每次stash默认+1

4. git stash 次数太多根本分不清是哪次stash呢?
这时候我们可以使用
```git
git stash save "本次修改了nav.js"
// 之后查看有哪些stash
git stash list
stash@{0}: On master: 本次修改了nav.js
```
save 命令就相当于给这次stash增加了注释,方便你好还原代码

5. 其他
git stash show: 用来展示存储单元和提交的diff结果.
```git
git stahs show

docs/.vuepress/config/nav.js | 3 ++-
1 file changed, 2 insertions(+), 1 deletion(-)
```
6. git stash clear 清空当前所有stash
```git
git stash clear
```
#### 最后
git stash命令很好的帮助我们在开发中节约时间,目前本人在工作中常用的大概就是以上几个命令
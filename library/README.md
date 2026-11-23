# LiZhong 全校共享资料库 / Shared Staff Library

这个目录存放老师们自己设计、愿意共享给全校使用的**线下课堂材料**：打印纸、PPT、PDF、图片、词卡、答案纸……
This folder holds teacher-made offline classroom materials shared across the whole school: printables, slides, PDFs, images, flashcards, answer sheets.

教师备课台（`teacher.html`）会通过 GitHub 公开 API 自动读取本目录，把文件列进「教材文件夹」的三级折叠树里，标为 **「全校共享 · 只读」**。
`teacher.html` reads this folder automatically via the public GitHub API and lists the files in the collapsible Textbook Library as **read-only shared files**.

> **这个文件本身有个技术作用：Git 不跟踪空目录。** 有了 `README.md`，`library/` 才会真实存在于仓库里，上传链接和自动读取才不会拿到 404。请保留它。
> Git does not track empty folders — this README keeps `library/` in the repository. Please do not delete it.

---

## 1. 目录约定 / Folder structure

```
library/
└── <老师名>/                     ← 每位老师固定一个子目录
    └── <文件名>                  ← 教材/册/课信息写在文件名里
```

- 网页里「⬆ 打开全校资料库上传页」按钮会按**上传老师**自动生成 `library/<老师名>/` 的上传地址，不用自己找路径。
- **子目录不用预先创建**：GitHub 网页上传页在提交时会自动建立路径。
- 如果老师愿意，也可以再往下按教材 / 册 / 课建子目录，网页会尽量从目录名补全归档。
- `library/README.md`、`.gitkeep`、`.gitignore` 会被网页自动忽略，不会显示成材料。

The upload button in the staff area builds `library/<teacher>/` for you. Sub-folders are created automatically on commit — no need to create them in advance.

---

## 2. 文件命名规范 / Naming convention

请用网页「📋 复制建议文件名」生成的名字，格式：

```
<教材>-<册>-<课>-<材料名>-<作者>-<日期>.<后缀>
```

例 / Example：

```
YCT标准教程-第一册-第一课-Bingo纸-向书亚-2026-11-23.pdf
```

| 规则 | 说明 |
|---|---|
| 分隔符 | 只用半角连字符 `-`，**不要**用空格、斜杠、`/`、`&`、中文括号 |
| 日期 | `YYYY-MM-DD`，放在最后一段（网页会自动取当天） |
| 后缀 | PDF 用 `.pdf`；PPT 用 `.pptx`；图片用 `.png` / `.jpg`；Word 用 `.docx` |
| 同课多份 | 靠「材料名」区分，如 `词卡`、`答案纸`、`Bingo纸`，不要叫 `最终版`、`最终版2` |
| 改版本 | 换日期重新传一份，旧的请在 GitHub 删除，别堆同名文件 |

**为什么命名这么重要**：网页靠文件名里的前 3 段把材料自动归到「教材 → 册 → 课」的折叠菜单里。名字不合规范时，文件仍会出现，但会落到「未归档」分组。
The first three segments tell the page where to file the material. Non-standard names still appear, but under "Unfiled".

---

## 3. 三条约定 / House rules

1. **只往自己名字的子目录里传**。根目录的 `index.html` / `teacher.html` / `data.js` / `links.js` / `classroom-games.js` 是网站代码，不要改动。
2. **一次可以传多个文件**，也可以拖整个文件夹；单文件 ≤ **25 MB**，一次建议不超过 **20 个**文件。提交要**点两次绿色按钮**（第一次填说明，第二次确认）。
3. **只放教学材料**。本仓库是**公开**的，请不要放学生姓名、成绩、照片或任何个人信息。

Only upload into your own folder; do not touch the website files in the root; keep pupil data out of this public repository.

---

## 4. 权限边界 / Permissions

- GitHub 的 **Write 权限是整个仓库级**的，**没有「只准改自己文件夹」的设置**。`CODEOWNERS` 只决定 PR 由谁审查，不能阻止有 Write 的人直接改文件；要强行隔离反而会逼大家走 fork → PR，比网页上传难得多，不建议现在做。
- 所以上面三条是**约定**，不是技术强制。2–3 位老师的规模足够。
- 好处是每次上传都是一次 commit：**谁、何时、改了什么**全有记录，误删或误改可在 commit 历史里一键回退。

Write access is repository-wide, not folder-scoped. The rules above are conventions, backed by commit history for easy undo.

---

## 5. 网页如何读取 / How the page reads this folder

- 接口：`GET https://api.github.com/repos/TanyaLou/chinese-games/git/trees/main?recursive=1`（Git Trees API，**一次拿全树**，不是逐目录请求）。
- **公开仓库免登录、免 token**；未认证限额 **60 次 / 小时 / IP**，网页把结果缓存 **10 分钟**，点「↻ 刷新全校资料库」才强制重读。
- 提交后 GitHub Pages 约 **1 分钟**重新构建；其他老师要**刷新页面**才看到新文件（不是即时推送）。
- 离线、用 `file://` 双击打开、仓库还没建 `library/`、或 API 达到限额时，网页会在上传区下方显示提示，**本机上传的文件照常可用**。
- 网页里这类文件**只能预览 / 下载**，不能改名或删除；要改请到 GitHub 网页操作。

Public API, no token, cached 10 minutes, ~1 minute publishing delay, read-only in the app.

---

## 6. 默认分支 / Default branch

`main`。与 `teacher.html` 里的 `GH_BRANCH` 常量一致。若日后改分支名，请**同时**改常量和这里，否则上传链接与读取接口都会指向旧分支。

---

## 7. 相关文档 / Companion documents

- 《老师上传图文步骤.docx》—— 发给老师微信群的五步图文手册
- 《教师端使用说明.md》 / `LiZhong_Teacher_Kit_Guide.docx` —— 备课台完整手册
- 《文件保存与免费共享方案.md》—— 保存方式、免费额度与升级路径对比

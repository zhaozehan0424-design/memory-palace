# Memory Palace

材料加工课程的移动端记忆宫殿学习页。

这个项目把材料加工基础知识整理成适合手机复习的交互卡片，包括知识速记、翻牌自检、对比记忆、自测题和高频难点。它最早作为个人学习辅助工具部署到 Vercel，后来整理为公开仓库，便于继续维护和复用。

[Live demo](https://memory-palace-five.vercel.app)

## Features

- 知识卡片：按铸造、锻压/焊接/冲压、机械加工分组复习。
- 翻牌自检：先看问题，再翻面核对答案。
- 对比记忆：把相似概念放在一起区分。
- 自测练习：用短题检查是否真正记住。
- 高频难点：整理容易混淆和考试常见陷阱。
- 单文件静态部署：`index.html` 可直接部署到 Vercel、GitHub Pages 或任意静态托管。

## Quick Start

直接打开：

```powershell
Start-Process .\index.html
```

或启动一个本地静态服务器：

```powershell
npx serve .
```

## Deploy

Vercel 静态部署不需要服务端环境变量：

```powershell
npx vercel --prod
```

当前公开部署：

- https://memory-palace-five.vercel.app

## Maintenance

这个仓库维护的是学习内容和交互页面，不包含账号、日志、题库截图或私人课堂资料。维护时请优先检查：

- 页面标题和移动端布局是否正常。
- 五个学习模式是否都能进入。
- 学科内容是否准确，尤其是易混淆概念。
- 新增内容是否能在手机宽度下完整显示。

运行基础检查：

```powershell
npm run check
```

## Related Work

同一维护者还维护了 [Relay Hub](https://github.com/zhaozehan0424-design/responses-api-gateway)，一个 OpenAI-compatible API gateway，用于 Discord 社区和小团队共享模型访问。

## License

MIT. See [LICENSE](./LICENSE).

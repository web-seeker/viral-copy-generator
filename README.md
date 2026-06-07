# 🔥 短视频爆款文案生成与复刻专家

> 不是"AI写文案"的工具，是**把爆款逻辑拆解后再生成**的系统。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/web-seeker/viral-copy-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**线上体验：** https://viral-copy-generator.vercel.app

---

## 🎯 核心竞争力

| 维度 | 普通AI工具 | 本工具 |
|------|-----------|--------|
| **文案来源** | 大模型随机生成 | 基于真实爆款文案结构复刻 |
| **平台覆盖** | 只支持中文 | 中文 / 英文 / 日文 三语原生支持 |
| **语音输出** | 无或需付费API | 内置 Edge TTS，20+免费音色 |
| **使用门槛** | 需注册/登录 | 打开即用，零门槛 |
| **部署成本** | 需服务器 | 纯静态，Vercel 免费托管 |

---

## ✨ 功能一览

### 🔥 爆款文案生成
- 支持 **抖音 / TikTok日区 / TikTok美区** 三大平台
- 内置爆款文案结构模板（钩子→痛点→转折→CTA）
- 一键生成 **标题 + 正文 + 标签** 三件套

### 🔁 爆款复刻（核心功能）
- 粘贴任意爆款文案 → 自动识别语言（中/英/日）
- AI 拆解原文案结构 → 按相同逻辑重新生成
- 保留爆款基因，替换产品/场景，直接可用

### 🎙️ Edge TTS 语音合成
- 20+ 中文音色（晓晓/云希/云扬等）
- 支持英文、日文、韩文音色
- 一键播放 / 下载 MP3

### 📦 本地记录管理
- 生成历史自动保存在浏览器本地
- 支持回看、复刻、删除

---

## 🚀 快速开始

### 在线使用（推荐）
直接访问：**https://viral-copy-generator.vercel.app**

### 本地部署
```bash
git clone https://github.com/web-seeker/viral-copy-generator.git
cd viral-copy-generator
# 用任何静态服务器打开，例如：
npx serve .
```

### Vercel 一键部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/web-seeker/viral-copy-generator)

---

## 🛠️ 技术栈

- **前端：** 纯原生 HTML5 + CSS3 + JavaScript，**零依赖**
- **AI：** OpenAI API 兼容接口（自行配置 endpoint）
- **语音：** Microsoft Edge TTS（免费，无需API Key）
- **部署：** 纯静态，兼容 Vercel / Netlify / GitHub Pages

---

## ⚙️ 配置说明

工具需要配置 AI API 地址和 Key（放在页面顶部设置区，仅保存在浏览器本地，不传服务器）：

| 配置项 | 说明 |
|--------|------|
| API Endpoint | OpenAI 兼容接口地址 |
| API Key | 你的 API Key |
| 模型名称 | 如 `gpt-4o`、`gpt-4o-mini` 等 |

---

## 📁 项目结构

```
viral-copy-generator/
├── index.html          # 主程序（单文件，零依赖）
├── favicon.svg         # 网页图标
├── vercel.json         # Vercel 部署配置
└── README.md           # 本文件
```

---

## 📄 License

MIT License — 可自由使用、修改、分发。

---

## 💡 关于

作者：[web-seeker](https://github.com/web-seeker)

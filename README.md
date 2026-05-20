# Elegant GPT Interface

一个现代化、优雅的GPT聊天界面，支持多种GPT模型和实时API日志。



## ✨ 特性

- 🚀 **现代化技术栈** - 使用 React 18 + TypeScript + Vite + Tailwind CSS
- 💬 **完整的聊天功能** - 支持实时对话、消息持久化
- 🤖 **多模型支持** - 内置 GPT-4 Turbo、GPT-4、GPT-3.5 Turbo 等
- 🔧 **API配置** - 自定义API密钥和端点
- 📊 **实时日志** - API请求/响应/错误日志面板
- 🎨 **优雅UI** - 现代化的设计，代码高亮，Markdown渲染
- 🔒 **本地存储** - 自动保存聊天记录和设置

## 🛠️ 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具和开发服务器
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库
- **React Markdown** - Markdown渲染
- **React Syntax Highlighter** - 代码语法高亮

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/your-username/elegant-gpt-interface.git
cd elegant-gpt-interface
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 访问应用
打开浏览器访问 [http://localhost:5173](http://localhost:5173)

## 📦 构建

### 开发模式
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

### 代码检查
```bash
npm run lint
```

## 🎯 使用方法

### 1. 配置API
- 首次使用需要点击设置按钮（⚙️）
- 输入你的OpenAI API密钥
- 选择或添加自定义模型
- 可配置API端点（默认：`https://openkey.cloud/v1/chat/completions`）

### 2. 开始聊天
- 在输入框中输入消息
- 支持多轮对话
- 消息自动保存到本地存储

### 3. 查看日志
- 右下角可展开API日志面板
- 查看请求、响应、状态码等信息
- 支持过滤和搜索日志

## 📁 项目结构

```
src/
├── components/           # React组件
│   ├── APILogs.tsx      # API日志组件
│   ├── ChatInput.tsx    # 聊天输入组件
│   ├── Message.tsx      # 消息显示组件
│   ├── ModelSelect.tsx  # 模型选择组件
│   └── SettingsModal.tsx # 设置弹窗组件
├── types/               # TypeScript类型定义
│   ├── chat.ts          # 聊天相关类型
│   ├── config.ts        # 配置相关类型
│   ├── log.ts           # 日志相关类型
│   └── models.ts        # 模型相关类型
├── utils/               # 工具函数
│   ├── api.ts           # API调用函数
│   ├── api-error.ts     # API错误处理
│   ├── api-types.ts     # API类型定义
│   └── storage.ts       # 本地存储工具
├── App.tsx              # 主应用组件
├── main.tsx             # 应用入口点
├── index.css            # 全局样式
└── vite-env.d.ts        # Vite环境类型
```

## 🎨 支持的功能

### 聊天功能
- ✅ 实时消息发送和接收
- ✅ Markdown格式支持
- ✅ 代码块语法高亮
- ✅ 消息时间戳显示
- ✅ 本地存储持久化

### 模型支持
- ✅ GPT-4 Turbo
- ✅ GPT-4
- ✅ GPT-3.5 Turbo
- ✅ GPT-3.5 Turbo 16K
- ✅ 自定义模型

### 调试工具
- ✅ 实时API日志
- ✅ 请求/响应查看
- ✅ 错误信息显示
- ✅ JSON格式化

### 用户界面
- ✅ 响应式设计
- ✅ 暗色/亮色主题（基于系统）
- ✅ 加载状态指示
- ✅ 错误提示

## 🔧 配置指南

### 自定义API端点
在设置中修改API端点以使用不同的OpenAI兼容API服务。

### 本地存储
所有数据（聊天记录、API设置）都保存在浏览器本地存储中。

### 环境变量
当前版本使用前端配置，如需环境变量支持可在`vite.config.ts`中配置。

## 🐛 故障排除

### 常见问题

**1. API请求失败**
- 检查API密钥是否正确
- 确认API端点可访问
- 查看网络控制台获取详细错误信息

**2. 页面空白**
- 清除浏览器缓存
- 检查控制台错误
- 重新安装依赖

**3. 样式问题**
- 运行 `npm install` 更新依赖
- 检查Tailwind配置

### 开发问题

**构建失败**
```bash
# 清理node_modules后重新安装
rm -rf node_modules package-lock.json
npm install
```

**TypeScript错误**
```bash
# 检查TypeScript配置
npm run lint
```

## 🤝 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

### 开发规范
- 使用TypeScript编写代码
- 遵循ESLint规则
- 添加必要的类型定义
- 保持代码格式化

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=your-username/elegant-gpt-interface&type=Timeline)](https://star-history.com/#your-username/elegant-gpt-interface&Timeline)

*提示：将 `your-username` 替换为实际的GitHub用户名以启用star history图表。*

## 🙏 致谢

- [OpenAI](https://openai.com/) - GPT API
- [Vite](https://vitejs.dev/) - 超快的构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Lucide Icons](https://lucide.dev/) - 优美的图标库

## 📞 联系

如有问题或建议，请通过GitHub Issues提交。

---

**Enjoy coding!** 🚀

如果这个项目对你有帮助，请不要忘记给它一个 ⭐️！
## Star History

<a href="https://www.star-history.com/?repos=miralexand%2FGPT-panel&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=miralexand/GPT-panel&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=miralexand/GPT-panel&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=miralexand/GPT-panel&type=date&legend=top-left" />
 </picture>
</a>
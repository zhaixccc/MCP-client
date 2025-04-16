# MCP 客户端

MCP (Model Control Protocol) 客户端是一个连接大语言模型与各种工具的桥梁，通过标准化的接口让大语言模型能够调用外部工具来完成复杂任务。

## 项目结构

- `client.py`: MCP 客户端的核心实现，负责连接 MCP 服务器和大语言模型
- `weather.py`: 本地实现的天气查询 MCP 服务
- `playwright_mcp.js`: 启动 Playwright MCP 服务的 JavaScript 包装脚本

## 依赖配置

项目需要在 Python 虚拟环境中运行，并且需要以下环境变量：

- `API_KEY`: DeepSeek 或其他兼容 OpenAI API 的服务密钥
- `BASE_URL`: API 基础 URL
- `MODEL_NAME`: 模型名称（默认为 "deepseek-chat"）

## 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/zhaixccc/MCP-client.git
cd MCP-client
```

2. 创建并激活虚拟环境
```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/Mac
```

3. 安装依赖
```bash
pip install -r requirements.txt
```

4. 创建 `.env` 文件并配置环境变量
```
API_KEY=你的API密钥
BASE_URL=https://api.deepseek.com
MODEL_NAME=deepseek-chat
```

## 使用方法

### 连接天气服务

```bash
.venv\Scripts\activate  # 激活虚拟环境
python client.py weather.py
```

这将启动天气服务，允许你查询全球各地的天气信息。

### 连接 Playwright MCP 服务

```bash
.venv\Scripts\activate  # 激活虚拟环境
python client.py playwright_mcp.js
```

这将启动 Playwright MCP 服务，允许大语言模型控制浏览器进行各种操作。

## 可用工具

### 天气服务工具

- `get_weather`: 获取指定城市的当前天气信息
- `get_forecast`: 获取指定城市的5天天气预报
- `weather_report`: a获取天气信息并生成格式化的天气报告

### Playwright 工具

- `browser_navigate`: 导航到指定网址
- `browser_click`: 点击指定元素
- `browser_type`: 在输入框中输入文本
- `browser_take_screenshot`: 截取网页截图
- 以及更多浏览器自动化工具

## 交互方式

启动客户端后，可以通过命令行与大语言模型进行交互。输入问题后，模型会根据需要调用相应的工具，并给出回答。
输入 `quit` 退出程序。

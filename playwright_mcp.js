// 这是一个启动Playwright MCP服务的包装脚本
const { execSync } = require('child_process');

try {
  console.log('启动 Playwright MCP 服务...');
  execSync('npx -y @playwright/mcp@latest', { stdio: 'inherit' });
} catch (error) {
  console.error('启动 Playwright MCP 服务失败:', error);
} 
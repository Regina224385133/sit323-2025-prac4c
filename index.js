const express = require('express');
const app = express();
app.use(express.json());  // 中间件用于解析 JSON 请求体

// 根路径处理，避免 "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Welcome to Calculator Microservices! Please visit /add, /subtract, /multiply, /divide, /exponentiation, /sqrt, /modulo to use the calculator.');
});

// 加法端点
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send({ error: 'num1 和 num2 必须是有效的数字。' });
  }
  const result = num1 + num2;
  res.send({ result });
});

// 减法端点
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send({ error: 'num1 和 num2 必须是有效的数字。' });
  }
  const result = num1 - num2;
  res.send({ result });
});

// 乘法端点
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send({ error: 'num1 和 num2 必须是有效的数字。' });
  }
  const result = num1 * num2;
  res.send({ result });
});

// 除法端点
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send({ error: 'num1 和 num2 必须是有效的数字。' });
  }
  if (num2 === 0) {
    return res.status(400).send({ error: '不能除以零。' });
  }
  const result = num1 / num2;
  res.send({ result });
});

// 指数运算端点
app.post('/exponentiation', (req, res) => {
  const { base, exponent } = req.body;
  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).send({ error: 'base 和 exponent 必须是有效的数字。' });
  }
  const result = Math.pow(base, exponent);
  res.send({ result });
});

// 平方根运算端点
app.post('/sqrt', (req, res) => {
  const { num } = req.body;
  if (isNaN(num)) {
    return res.status(400).send({ error: 'num 必须是有效的数字。' });
  }
  if (num < 0) {
    return res.status(400).send({ error: '不能对负数进行平方根运算。' });
  }
  const result = Math.sqrt(num);
  res.send({ result });
});

// 取模运算端点
app.post('/modulo', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send({ error: 'num1 和 num2 必须是有效的数字。' });
  }
  const result = num1 % num2;
  res.send({ result });
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`计算器 API 运行在 http://localhost:${port}`);
});

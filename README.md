## Calculator Microservice
## Project Profile

This project is a simple microservice that provides basic arithmetic functions including addition, subtraction, multiplication and division. The microservice is built on Node.js and the Express framework and implements a RESTful API to handle incoming requests.This service is capable of accepting two numbers and performing the corresponding arithmetic operations, supporting addition, subtraction, multiplication and division.

## Steps to set up and run microservices

### 1. Installing Node.js and dependencies
 [Node.js ](https://nodejs.org/) 

#### 1.1 Cloning Project Warehouse

First, clone the project locally:

```bash
git clone https://github.com/your-username/sit323-2025-prac4p.git
cd sit323-2025-prac4p
```

#### 1.2 Installing dependencies

In the project directory, install the dependencies:

```bash
npm install
```

#### 1.3 Start the server

After installing the dependencies, start the server with the following command:

```bash
node index.js
```

The server started successfully and saw output similar to the following:

```plaintext
计算器 API 运行在 http://localhost:3000
```


## API Endpoint Description

This microservice provides seven main API endpoints, each of which supports POST requests.

### 1. additive endpoint (`/add`)

- **methodologies**：`POST`
- **requestor**：
  ```json
  {
    "num1": <5>,
    "num2": <3>
  }
  ```
- **responsive**：
  ```json
  {
    "result": <8>
  }
  ```

### 2. subtractive endpoint (`/subtract`)

- **methodologies**：`POST`
- **requestor**：
  ```json
  {
    "num1": <5>,
    "num2": <3>
  }
  ```
- **responsive**：
  ```json
  {
    "result": <2>
  }
  ```

### 3. multiplication endpoint (`/multiply`)

- **methodologie**：`POST`
- **requestor**：
  ```json
  {
    "num1": <5>,
    "num2": <3>
  }
  ```
- **responsive**：
  ```json
  {
    "result": <15>
  }
  ```

### 4. division endpoint (`/divide`)

- **methodologie**：`POST`
- **requestor**：
  ```json
  {
    "num1": <6>,
    "num2": <3>
  }
  ```
- **responsive**：
  ```json
  {
    "result": <2>
  }
  ```

### 5. Exponentiation Endpoint (/exponent)

- **methodologie**：`POST`
- **requestor**：
  ```json
  {
    "num1": <5>,
    "num2": <3>
  }
  ```
- **responsive**：
  ```json
  {
    "result": <125>
  }
  ```

  ### 6. Square Root Endpoint (/sqrt)

- **methodologie**：`POST`
- **requestor**：
  ```json
  {
    "num": <9>,
  }
  ```
- **responsive**：
  ```json
  {
    "result": <3>
  }
  ```

  ### 7. Modulo Endpoint (/modulo)

- **methodologie**：`POST`
- **requestor**：
  ```json
  {
    "num1": <10>,
    "num2": <4>
  }
  ```
- **responsive**：
  ```json
  {
    "result": <2>
  }
  ```
## use cURL

#### 1 addition operation

```bash
curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d "{\"num1\": 5, \"num2\": 3}"
```

**responsive**：
```json
{
  "result": 8
}
```

#### 2 subtraction operation

```bash
curl -X POST http://localhost:3000/subtract -H "Content-Type: application/json" -d "{\"num1\": 5, \"num2\": 3}"
```

**responsive**：
```json
{
  "result": 2
}
```

#### 3 multiplication

```bash
curl -X POST http://localhost:3000/multiply -H "Content-Type: application/json" -d "{\"num1\": 5, \"num2\": 3}"
```

**responsive**：
```json
{
  "result": 15
}
```

#### 4 division operation

```bash
curl -X POST http://localhost:3000/divide -H "Content-Type: application/json" -d "{\"num1\": 6, \"num2\": 3}"
```

**responsive**：
```json
{
  "result": 2
}
```

#### 5 Exponentiation Operation

```bash
curl -X POST http://localhost:3000/exponent -H "Content-Type: application/json" -d "{\"base\": 5, \"exponent\": 3}"

```

**responsive**：
```json
{
  "result": 125
}
```
#### 6 Square Root Operation

```bash
curl -X POST http://localhost:3000/sqrt -H "Content-Type: application/json" -d "{\"num\": 9}"
```

**responsive**：
```json
{
  "result": 3
}
```
#### 7 Modulo Operation

```bash
curl -X POST http://localhost:3000/modulo -H "Content-Type: application/json" -d "{\"num1\": 10, \"num2\": 4}"
```

**responsive**：
```json
{
  "result": 2
}
```

## conclusion

This project is a simple microservice that provides basic and advanced arithmetic operations. You can send requests via cURL to get the results of addition, subtraction, multiplication, division, exponentiation, square root, and modulo. Ensure that the Node.js server is running and listening on http://localhost:3000 before using the API.


// khởi tạo ứng dụng với expressjs
const express = require("express");
const { rootRouters } = require("./routers/root.routers");

const app = express();

// ứng dụng sẽ thao tác với kiểu JSON
app.use(express.json());

/**
 * khởi tạo một router và một controller basic
 *      - router : http://localhost:3000
 *      - controller : ()=>{}
 */
app.get("/", (req, res) => {
  res.send("Hello CyberSoft");
});

// sử dụng rootRouters và tạo url thành ( http://localhost:3000/api/v1 )
app.use("/api/v1", rootRouters);

// lắng nghe ứng dụng chạy trên port = 3000
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port : ${port} !`);
});

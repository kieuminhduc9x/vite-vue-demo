const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://127.0.0.1:3000", // Thay thế với origin frontend của bạn
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  }
});

// Cấu hình CORS cho các yêu cầu HTTP
app.use(cors({
  origin: "http://127.0.0.1:3000", // Thay thế với origin frontend của bạn
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

io.on('connection', (socket) => {
  console.log('A user connected');

  const intervalId = setInterval(() => {
    const now = new Date();

    // Dữ liệu cho biểu đồ cột
    const barChartData = {
      labels: Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`),
      datasets: [
        {
          label: 'Giao dịch',
          data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
          borderColor: '#3e95cd',
          backgroundColor: '#acd5f5',
          fill: true
        }
      ]
    };

    // Dữ liệu cho biểu đồ cột ngang
    const horizontalBarChartData = {
      labels: Array.from({ length: 4 }, (_, i) => `Hạng mục ${i + 1}`),
      datasets: [
        // {
        //   label: 'Giá trị',
        //   data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)),
        //   backgroundColor: '#42A5F5',
        //   borderColor: '#1E88E5',
        //   borderWidth: 1
        // }
        {
          label: 'Giá trị 1',
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)),
          backgroundColor: '#42A5F5'
        },
        {
          label: 'Giá trị 2',
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)),
          backgroundColor: '#66BB6A'
        },
        {
          label: 'Giá trị 3',
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)),
          backgroundColor: '#FF7043'
        }
      ]
    };

    // Dữ liệu cho biểu đồ tròn
    const pieChartData = {
      labels: ['Thông số 1', 'Thông số 2', 'Thông số 3', 'Thông số 4'],
      datasets: [
        {
          backgroundColor: ['#82d79d', '#fd82c0', '#89edff', '#ee7d7d'],
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
        }
      ]
    };

    // Dữ liệu cho biểu đồ đường
    const lineChartData = {
      labels: Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`),
      datasets: [
        {
          label: 'Doanh thu',
          data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
          borderColor: '#ff6384',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true
        }
      ]
    };

    // Gửi dữ liệu cho cả ba biểu đồ
    const data = {
      barChart: barChartData,
      horizontalBarChart: horizontalBarChartData,
      pieChart: pieChartData,
      lineChart: lineChartData
    };

    socket.emit('newChartData', data);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('User disconnected');
    clearInterval(intervalId);
  });
});

app.get('/', (req, res) => {
  res.send('WebSocket server is running');
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});

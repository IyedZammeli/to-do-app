const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);

app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(5001, () => {
  console.log(`Server started on port 5001`);
});

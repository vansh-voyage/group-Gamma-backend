const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3030;
const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(bodyParser.json()); // or use express.json() for newer versions of Express

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

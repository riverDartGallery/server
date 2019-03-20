const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//Init middleware
// app.use(logger);

//Body PArser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));
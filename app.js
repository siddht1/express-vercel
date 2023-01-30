// const express = require('express');
// const helmet = require('helmet');
// const { ErrorResponseObject } = require('./common/http');
// const routes = require('./routes');

// const app = express();

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// app.use(helmet());
// app.use('/', routes);

// // default catch all handler
// app.all('*', (req, res) => res.status(404).json(new ErrorResponseObject('route not defined')));

// module.exports = app;

// actual file ,new file

// In src/index.js 
// import fetch from 'node-fetch';
const express = require("express"); 
const app = express(); 

const PORT = process.env.PORT || 3002; 


// const response = await fetch(_url);
// const data = await response.json();
// For testing purposes 
app.get("/", (req, res) => { 
    res.send('{working}');
});

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});

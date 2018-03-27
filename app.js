const express = require('express');
// External Dependencies

const app = express();
const port = 5000;
// Top Level constants

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

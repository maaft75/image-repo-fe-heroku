const express = require('express');
const app = express();

app.use(express.static('./dist/image-repo'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/image-repo/'}
  );
});
app.listen(process.env.PORT || 8080);
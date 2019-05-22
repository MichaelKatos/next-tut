const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const Routes = require('./routes/index.js');

    server.use('/api', Routes);

    server.get('/posts/:slug', (req, res) => {
      let actualPage = '/post';
      let queryParams = { title: req.params.slug };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get('/api/shows', (req, res) => {
      return res.end('fgojdlgjdgdg');
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

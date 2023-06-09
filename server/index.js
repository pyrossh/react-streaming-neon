import express from 'express';
import compression from 'compression';
import { renderPage } from 'vite-plugin-ssr';
import { telefunc } from 'telefunc';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

const app = express();
app.use(compression());
if (isProduction) {
  const sirv = await import('sirv');
  app.use(sirv(`${root}/dist/client`))
} else {
  const vite = await import('vite');
  const viteDevMiddleware = (
    await vite.createServer({
      root,
      server: { middlewareMode: true }
    })
  ).middlewares
  app.use(viteDevMiddleware);
}

app.use(express.text()) // Parse & make HTTP request body available at `req.body`
app.all('/_telefunc', async (req, res) => {
  const context = {}
  const httpResponse = await telefunc({
    context,
    url: req.originalUrl,
    method: req.method,
    body: req.body
  })
  const { body, statusCode, contentType } = httpResponse;
  res.status(statusCode).type(contentType).send(body);
})

app.get('*', async (req, res, next) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl
  }
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  const { statusCode, contentType } = httpResponse;
  res.status(statusCode).type(contentType);
  httpResponse.pipe(res);
})

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server running at http://localhost:${port}`);
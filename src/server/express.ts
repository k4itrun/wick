import express, { Express, Request, Response } from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';

import { config } from '../util/config';

class App {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(config.port) || 433;

    this.routes();
  }

  private routes() {
    this.app.get('/', this.handleRoot);
    this.app.get('/tokens', this.handleTokens);
  }

  private async handleRoot(req: Request, res: Response) {
    res.json({ msg: '/tokens' });
  }

  private async handleTokens(req: Request, res: Response) {
    try {
      res.set('Content-Type', 'text/plain');
      res.send(await fs.readFile(path.join(__dirname, '..', '..', 'tokens.txt'), 'utf8'));
    } catch (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading tokens');
    }
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Website running at http://localhost:${this.port}`);
    });
  }
}

new App().start();

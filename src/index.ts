import express, { Request, Response } from "express";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", async (req: Request, res: Response) => {
  // tslint:disable-next-line:no-console
  console.log(req.ip);
  // tslint:disable-next-line:no-console
  console.log(req.socket.remoteAddress);
  // console.log(req.headers.host);
  // tslint:disable-next-line:no-console
  console.log(req.headers["x-forwarded-for"]);
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

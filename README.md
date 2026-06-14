This is a [Next.js](https://nextjs.org) project with [napi-rs](https://napi.rs)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for deployment

First, build the project for production

```bash
npm run build
```

In docker run the standalone server, here is an example

```bash
node ./out/standalone/server.js
```
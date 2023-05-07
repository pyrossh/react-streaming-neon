# React Streaming + NeonDB (Serverless Postgres)

This is a sample application todo application which integrates all these frameworks,

1. vite 
2. vite-plugin-ssr
3. telefunc
4. neon (serverless postgress)
5. react (Streaming + Suspense)
6. blueprintjs (UI library)

This is a modified version of this [example](https://github.com/brillout/telefunc/tree/main/examples/react-streaming) from the telefunc repo

## Requirements

1. node >= v18.14.2
2. npm >= 8.15.0

## Installing

```sh
npm i
```

## Running

Add your postgres connection url in a `.env` file at the root,

```sh
PG_CONN_URL='postgres://user:pass@hostname/dbname'
```

Run the migration script
```sh
npm run setup
```

Start the dev server
```sh
npm run dev
```

## Screenshots

<img width="1125" alt="Screenshot 2023-02-28 at 11 01 27 PM" src="https://user-images.githubusercontent.com/1687946/221931974-eb9d291c-eb43-4ef9-9646-7932148bb0d2.png">



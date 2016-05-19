# client

> Frontend for Cunobo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

## Build Setup (Docker)

``` bash
docker-compose build
docker-compose run --rm -p 8080:8080 client npm run dev
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

## TODO

  * [x] Docker-based development
  * [x] Convert coffeescript segments to es2015 
  * [ ] Integrate with API

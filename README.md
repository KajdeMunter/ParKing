# ParKing
ParKing: That one application that helps you find a free parking space in the big city.

## Project setup
In order to build or develop you'll need [docker](https://docs.docker.com) and [docker compose](https://docs.docker.com/compose/install/) installed.

### Compiles and hot-reloads for development
```
$ docker-compose -f docker-compose.dev.yml up
```

### Runs NGINX, Compiles and minifies for production
```
$ docker-compose -f docker-compose.prod.yml up
```

### Run your (unit) tests
```
docker exec parking_vue-app_1 /bin/sh -c yarn run test:unit
```

### Lints and fixes files
```
docker exec parking_vue-app_1 /bin/sh -c yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

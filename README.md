Some Website
============

  > Some website project using docker, webpack, typescript, stylus, pug, vue, gsap,…

---

**Live Demo: [simbo.github.io/some-website](https://simbo.github.io/some-website/)

---

<!-- TOC -->

- [Development](#development)
  - [Requirements](#requirements)
  - [Recommendations](#recommendations)
  - [Initial Setup](#initial-setup)
  - [Usage](#usage)
    - [Common Commands](#common-commands)
- [License](#license)

<!-- /TOC -->

---

## Development


### Requirements

  - `docker` with `docker-compose`


### Recommendations

  - VS Code Plugin [vetur](https://github.com/vuejs/vetur) for handling `.vue` files


### Initial Setup

  - Install dependencies:  
    `docker-compose run --rm dev yarn`


### Usage

``` sh
# start dev service to serve, watch, rebuild and reload
docker-compose up -d
# open localhost:9000 in your browser

# restart dev service
docker-compose restart

# stop dev service
docker-compose stop

# attach to dev service log
docker logs -f some-website_dev

# exec command inside container (with running service)
docker-compose exec dev <COMMAND>

# run command inside container (without running service)
docker-compose run --rm [-p 9000:9000] dev <COMMAND>
```


#### Common Commands

``` sh
# open shell
docker-compose run --rm dev sh -l

# start dev server
docker-compose run --rm -p 9000:9000 dev yarn run dev

# start watch mode without dev server
docker-compose run --rm dev yarn run watch

# build for production
docker-compose run --rm dev yarn run build
```

## License

MIT License (see [`LICENSE.md`](./LICENSE.md))  
Copyright © 2017 Simon Lepel

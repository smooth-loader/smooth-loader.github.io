# Documentation for [smooth-loader](https://github.com/smooth-loader/smooth-loader)

Official documentation website for [smooth-loader](https://github.com/smooth-loader/smooth-loader) package for JavaScript

> This website is written with [VuePress 2](https://v2.vuepress.vuejs.org/)

If you found any typo or want to improve the [website](https://smooth-loader.github.io), go ahead for a pull request. I would gladly review and merge your changes.

## Development
### With Container Engine
> [!NOTE]
> If you use [🐳 Docker](https://app.docker.com/) instead of [🦦 Podman](https://podman.io/), just replace `podman-compose` with `docker compose`, and `podman` with `docker` in code examples below.

#### Build an Image
To build an image, navigate to the root of the project and run this:

For Podman, run this:
```bash
podman-compose build
```

#### Create `node_modules`
Run this command to install npm packages and generate a `node_modules` directory on your local machine:

```bash
podman-compose run --rm app npm i
```

#### Run the Container
To run a container, navigate to the root of the project and run:

```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see your documentation.

#### Enter the Container
To enter inside of the container, run:

```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

#### Stop the Container
To cleanup after your work, run:

```bash
podman-compose down
```

### NPM Commands
#### Install Dependencies
```bash
npm i
```

#### Watch File Changes
```bash
npm run dev
```

Navigate to `http://localhost:5173` to see your documentation if you run the project locally. If you use container engine, navigate to `http://localhost:3000` instead.

# Documentation for [smooth-loader](https://github.com/smooth-loader/smooth-loader)

Official documentation website for [smooth-loader](https://github.com/smooth-loader/smooth-loader) package for JavaScript

> This website is written with [VuePress 2](https://v2.vuepress.vuejs.org/)

If you found any typo or want to improve the [website](https://smooth-loader.github.io), go ahead for a pull request. I would gladly review and merge your changes.

## Development
### With Container Engine
If you use a container engine like [🦦 Podman](https://podman.io/) or [🐳 Docker](https://app.docker.com/), here are the steps that you can make:

#### Build an Image
To build an image, navigate to the root of the project and run this command for Docker:
```bash
docker compose build
```
For Podman, run this:
```bash
podman-compose build
```

#### Copy `node_modules` Locally
If you need to copy `node_modules` directory from the container to your local machine, run this command for Docker:
```bash
docker cp smooth-loader-docs:/app/node_modules .
```
For Podman, run this:
```bash
podman cp smooth-loader-docs:/app/node_modules .
```

> [!NOTE]
> `node_modules` is excluded from using volume, that's why you need to copy it manually in [docker-compose.yml](docker-compose.yml) file. It's done to prevent your local modules to be copied to Linux container, since it can create incompatibility issues between operating systems if you don't use Linux.

#### Run the Container
To run a container, navigate to the root of the project and run this command for Docker:
```bash
docker compose up -d
```
For Podman, run this:
```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see your documentation.

#### Enter the Container
To enter inside of the container, run this command for Docker:
```bash
docker compose exec app sh
```
For Podman, run this:
```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

#### Stop the Container
To cleanup after your work, run this Docker command:
```bash
docker compose down
```
For Podman, run this:
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
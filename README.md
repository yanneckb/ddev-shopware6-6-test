# Shopware test project

## Setup with ddev

### My versions

Shopware 6.6.7.0

ddev

- DDEV version: v1.23.4
- architecture: arm64
- cgo_enabled: 0
- db: ddev/ddev-dbserver-mariadb-10.11:v1.23.4
- ddev-ssh-agent: ddev/ddev-ssh-agent:v1.23.4
- docker: 27.2.0
- docker-api: 1.47
- docker-compose: v2.29.1
- docker-platform: docker-desktop
- global-ddev-dir: /Users/user.name/.ddev
- mutagen: 0.17.2
- os: darwin
- router: ddev/ddev-traefik-router:v1.23.4
- web: ddev/ddev-webserver:v1.23.4

System: MacBook Pro 14" 2023 (M2 Pro, Sonoma 14.3.1)

installed xdg-utils via:

```zsh
ddev ssh
sudo apt-get update
sudo apt-get install xdg-utils
```

### Setup project

run `make ddev-init`

then run
```zsh
ddev start
ddev ssh
bin/watch-storefront.sh
```

watcher is configurated in à.ddev/config.watcher.yaml`
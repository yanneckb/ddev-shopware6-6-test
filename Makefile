plugins=[plugin list]
theme=[theme name]
database=[database name]

ddev-cache:
	ddev exec console cache:clear

ddev-composer:
	ddev exec composer install

ddev-basic-setup:
	ddev exec console system:install --basic-setup --create-database --force

ddev-plugins:
	ddev exec console plugin:install ${plugins} -a -n -c

ddev-theme:
	ddev exec console theme:change --all ${theme}

ddev-build:
	ddev exec bin/build-js.sh

ddev-watch:
	ddev exec bin/watch-storefront.sh

ddev-init:
	ddev config --project-type=shopware6 --docroot=public --php-version=8.2 --database=mysql:8.0 --nodejs-version=20
	echo "APP_SECRET=$$(openssl rand -hex 16)" > .env.local
	make ddev-setup -k

ddev-setup:
	ddev start
	make ddev-composer
	-@make ddev-basic-setup
	#make ddev-plugins
	#make ddev-theme
	make ddev-build
	make ddev-cache
	ddev launch /admin
	@echo 'ddev setup finished!'
	
ddev-import-db:
	ddev ssh && mysql < ./${database}.sql
	ddev exec bin/console cache:clear
	ddev exec bin/console dal:refresh:index
	ddev exec bin/build-js.sh

ddev-stop:
	ddev stop --stop-servers
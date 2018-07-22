dev:
	make style-dev
	hugo serve

style-dev:
	gulp build-dev

build:
	hugo
	gulp build-prod
	gulp minify
	gulp collect

deploy:
	hugo
	gulp build-prod
	gulp minify
	gulp collect
	firebase deploy

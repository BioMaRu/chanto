dev:
	make style-dev
	hugo serve

style-dev:
	gulp build-dev

style-prod:
	gulp build-prod

minify:
	rm -rf dist
	gulp minify

deploy:
	hugo
	gulp build-prod
	make minify
	firebase deploy

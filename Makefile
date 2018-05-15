dev:
	hugo serve

style:
	yarn run style

minify:
	rm -rf dist
	gulp minify

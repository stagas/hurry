
install: package.json
	@npm install

build: components index.js
	@component build -dv

components: component.json
	@component install -dv

test:
	@node test/test

clean:
	rm -rf node_modules components build

.PHONY: test clean

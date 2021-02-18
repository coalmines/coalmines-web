export NODE_ENV:=production
export DIST_DIR:=dist
export DOCS_DIR:=docs

.PHONY: ui
ui: ui-prebuild
	npm run build:ui

.PHONY: ui-prebuild
ui-prebuild:
	ls src/components/*.jsx | \
		sed -e 's#src/components/\(.*\)\.jsx#export { default as \1 } from "./\1";#' \
		> src/components/index.js

dist:
	npm run build -- -o $(DIST_DIR)

.PHONY: docs
docs:
	npm run docs -- --docs -o $(DOCS_DIR)

.PHONY: prepare
prepare:
	npm install

.PHONY: clean
clean:
	rm -rf "$(DIST_DIR)"

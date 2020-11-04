ui: ui-prebuild
	npm run build:ui

ui-prebuild:
	ls src/components/*.jsx | \
		sed -e 's#src/components/\(.*\)\.jsx#export { default as \1 } from "./\1";#' \
		> src/components/index.js

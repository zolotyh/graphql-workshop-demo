.PHONY: default install
.DEFAULT: default

default:
	lerna run start:dev

install:
	lerna clean && lerna link && lerna bootstrap


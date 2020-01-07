.PHONY: default install run
.DEFAULT: default

default:
	lerna run start:dev

install:
	lerna clean && lerna link && lerna bootstrap

run:
	lerna run start:dev --stream

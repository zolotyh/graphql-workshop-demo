.PHONY: default install run start_postgres
.DEFAULT: default

default:
	lerna run start:dev

install:
	lerna clean && lerna link && lerna bootstrap

run:
	lerna run start:dev --stream

start_postgres:
	docker-compose  -f ./apps/server/docker-compose.yaml up -d

stop_postgres:
	docker-compose  -f ./apps/server/docker-compose.yaml down

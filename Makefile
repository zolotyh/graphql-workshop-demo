.PHONY: default install run start_postgres stop_postgres quick
.DEFAULT: default

default: quick

quick:
	lerna run start:dev --stream

full: reinstall | quick

reinstall:
	lerna clean -y && lerna link && lerna bootstrap

start_postgres:
	docker-compose  -f ./apps/server/docker-compose.yaml up -d

stop_postgres:
	docker-compose  -f ./apps/server/docker-compose.yaml down

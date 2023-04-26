#!/usr/bin/env bash
set -e
docker rm -f $(docker ps -aq --filter name=defi) || echo "Not found any related image"
docker compose -f docker-local-dev.yaml up -d
yarn run migration:generate -- src/database/migrations/CreateNameTable
sleep 5
yarn run start:dev
#!/usr/bin/env bash
set -e
docker rm -f $(docker ps -aq --filter name=defi) || echo "Not found any related image"
sudo rm -rf .data/* || echo "Data empty"
rm src/database/migrations/* || echo "Migrations empty"
docker compose -f docker-local-dev.yaml up -d

sleep 30

yarn run migration:generate -- src/database/migrations/CreateNameTable
yarn run migration:run
yarn run seed:run
yarn run start:dev
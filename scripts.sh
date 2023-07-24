#!/bin/sh

if [ -f .env ]; then
  rm .env
fi

if [ "$NODE_ENV" = "production" ]
then
 echo "DATABASE_URL=$URL_PROD_BASE_SUG" > .env
else
  echo "DATABASE_URL=$URL_DEV_BASE_SUG" > .env
fi

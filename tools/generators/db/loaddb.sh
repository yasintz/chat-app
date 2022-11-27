DATABASE_CONNECTION_URL="postgresql://chatuser:chatpass@127.0.0.1:5432/chat"

PG_DUMP_PARAMS=(
    --dbname=$DATABASE_CONNECTION_URL
)

docker exec -i chat-app_postgres_1 psql ${PG_DUMP_PARAMS[@]} < ./apps/hasura/datadump/data.sql
DATABASE_CONNECTION_URL="postgresql://chatuser:chatpass@127.0.0.1:5432/chat"

PG_DUMP_PARAMS=(
    --dbname=$DATABASE_CONNECTION_URL
    --column-inserts
    --schema=public
    --schema-only
)

SQL_OUTPUT=$(docker exec chat-app_postgres_1 pg_dump ${PG_DUMP_PARAMS[@]})


echo "$SQL_OUTPUT"

DATABASE_CONNECTION_URL="postgresql://chatuser:chatpass@127.0.0.1:5432/chat"

EXCLUDED_TABLE_PARAMS=$(sed 's/^/--exclude-table-data /' apps/hasura/datadump/db_dump_exclude | tr '\n' ' ')

PG_DUMP_PARAMS=(
    --dbname=$DATABASE_CONNECTION_URL
    --column-inserts
    --data-only
    --schema=public
    $EXCLUDED_TABLE_PARAMS
)

SQL_OUTPUT=$(docker exec chat_postgres pg_dump ${PG_DUMP_PARAMS[@]})


# IMPORTANT: Use only number and char. [0-9] and [a-zA-Z]
IGNORED_TEXT="
pg_catalog.set_config
"

IGNORED_TEXT_PARAMS=$(echo "$IGNORED_TEXT" | sed '/^$/d' | sed 's/^/\//' | sed 's/$/\/d;/')

CLEARED_SQL_OUTPUT=$(echo "$SQL_OUTPUT" | sed "${IGNORED_TEXT_PARAMS}")

echo "$CLEARED_SQL_OUTPUT" > ./apps/hasura/datadump/data.sql

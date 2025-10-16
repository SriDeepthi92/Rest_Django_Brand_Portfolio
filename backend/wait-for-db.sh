# backend/wait-for-db.sh
#!/bin/sh
set -e

host="$1"
shift
cmd="$@"

until pg_isready -h "$host" -p 5432; do
  echo "Waiting for database..."
  sleep 1
done

echo "Database ready!"
exec $cmd
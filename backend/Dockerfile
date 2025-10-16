FROM python:3.12-slim

WORKDIR /app

# Install PostgreSQL client (for pg_isready) and other dependencies
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Make sure the script is executable
RUN chmod +x /app/wait-for-db.sh

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

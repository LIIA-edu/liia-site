# syntax=docker/dockerfile:1
FROM node:22-bookworm-slim

ARG QUARTO_VERSION=1.6.43

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    build-essential \
  && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL -o /tmp/quarto.deb "https://github.com/quarto-dev/quarto-cli/releases/download/v${QUARTO_VERSION}/quarto-${QUARTO_VERSION}-linux-amd64.deb" \
  && apt-get update \
  && apt-get install -y --no-install-recommends /tmp/quarto.deb \
  && rm -f /tmp/quarto.deb \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]

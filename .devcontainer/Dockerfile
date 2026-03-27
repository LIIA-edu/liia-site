FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

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

WORKDIR /workspace/liia-site

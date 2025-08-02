#!/bin/bash

# LIIA Website Docker Helper Script
# This script provides easy commands for Docker operations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Function to show help
show_help() {
    echo "LIIA Website Docker Helper"
    echo ""
    echo "Usage: ./docker-helper.sh [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  dev         Start development server (with hot reload)"
    echo "  preview     Start preview server (production build)"
    echo "  prod        Start production server with Nginx"
    echo "  build       Build all Docker images"
    echo "  stop        Stop all containers"
    echo "  clean       Remove all containers and images"
    echo "  logs        Show logs for running containers"
    echo "  shell       Open shell in development container"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./docker-helper.sh dev     # Start development server on http://localhost:5173"
    echo "  ./docker-helper.sh prod    # Start production server on http://localhost:8080"
    echo "  ./docker-helper.sh logs    # Show logs from all containers"
}

# Function to start development server
start_dev() {
    print_info "Starting development server..."
    check_docker
    docker compose up --build liia-dev
    print_success "Development server started at http://localhost:5173"
}

# Function to start preview server
start_preview() {
    print_info "Starting preview server..."
    check_docker
    docker compose up --build liia-preview
    print_success "Preview server started at http://localhost:4173"
}

# Function to start production server
start_prod() {
    print_info "Starting production server..."
    check_docker
    docker compose up --build liia-prod
    print_success "Production server started at http://localhost:8080"
}

# Function to build all images
build_all() {
    print_info "Building all Docker images..."
    check_docker
    docker compose build
    print_success "All images built successfully"
}

# Function to stop all containers
stop_all() {
    print_info "Stopping all containers..."
    docker compose down
    print_success "All containers stopped"
}

# Function to clean up
clean_all() {
    print_warning "This will remove all LIIA website containers and images"
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "Cleaning up containers and images..."
        docker compose down --rmi all --volumes --remove-orphans
        print_success "Cleanup completed"
    else
        print_info "Cleanup cancelled"
    fi
}

# Function to show logs
show_logs() {
    print_info "Showing logs for all containers..."
    docker compose logs -f
}

# Function to open shell in development container
open_shell() {
    print_info "Opening shell in development container..."
    check_docker
    
    # Check if development container is running
    if [ "$(docker ps -q -f name=liia-website-dev)" ]; then
        docker exec -it liia-website-dev /bin/sh
    else
        print_warning "Development container not running. Starting it first..."
        docker compose up -d liia-dev
        sleep 5
        docker exec -it liia-website-dev /bin/sh
    fi
}

# Main script logic
case "${1:-help}" in
    "dev")
        start_dev
        ;;
    "preview")
        start_preview
        ;;
    "prod")
        start_prod
        ;;
    "build")
        build_all
        ;;
    "stop")
        stop_all
        ;;
    "clean")
        clean_all
        ;;
    "logs")
        show_logs
        ;;
    "shell")
        open_shell
        ;;
    "help"|*)
        show_help
        ;;
esac

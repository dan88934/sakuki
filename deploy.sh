# deploy.sh

# Pull updated version of branch from repo
# Note: This deployment file is in the home dir on the server

cd sakuki
git pull

# Restart Docker container

docker kill $(docker ps -q)

docker system prune -f

docker build -t sakuki . 

docker run -it --rm -p 8080:8080 sakuki 

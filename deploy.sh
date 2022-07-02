# deploy.sh

# Pull updated version of branch from repo
# Note: This deployment file is in the home dir on the server

cd sakuki
git pull

# Restart Docker container

sudo docker stop sakuki

sudo docker system prune

sudo docker build -t sakuki . 

sudo docker run -it --rm -p 8080:8080 sakuki 

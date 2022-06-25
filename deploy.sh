# deploy.sh

# pull updated version of branch from repo
# cd $APP_URL
git fetch --all
git reset --hard origin/$SEMAPHORE_GIT_BRANCH

# restart web application - restart docker container
# touch /var/www/"$(echo $APP_URL | sed 's/\./_/g')"_wsgi.py</code>
docker restart sakuki
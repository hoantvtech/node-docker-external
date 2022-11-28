docker stop test-docker
docker rm test-docker
docker run -d -p 9090:9090 --name=test-docker --network="host" test-docker-image
docker image prune
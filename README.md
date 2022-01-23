# This repo is for Mock API server using stubby npm.
This Server can be used to configure mock api responses for a given endpoint, based on the request headers, body, query string, path param etc. This can be hosted in docker container either in Azure or AWS. 

# Following are open ssl command to generate certificate. This certificate has been configured while running mock server to expose endpoints over https.
```
openssl genrsa -out privatekey.pem 2048
openssl req -new -key privatekey.pem -out private-csr.pem
openssl x509 -req -days 365 -in private-csr.pem -signkey privatekey.pem -out certificate.pem
```

# Build Docker image and run the container locally.
```
docker image build --tag stubbymockserver:latest .
docker container run -d --name stubbymockserver -p 8080:8080 -p 8081:8081 -p 8082:8082 stubbymockserver:latest
docker container logs -f stubbymockserver 
```


# Local development

to run this project locally in a docker container just fullfill the following steps

1. install [docker](https://docs.docker.com/install/overview/)
2. build the docker image  
   ```docker build -t eddie .```

3. run the image  
   ```docker run -d -p 80:3000 eddie```

Now you should be able to see eddie on 
[localhost](http://localhost)
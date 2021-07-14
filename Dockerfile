FROM jekyll/jekyll:latest

COPY . /home/user/ballerina/
RUN chmod -R 777 /home/user/ballerina/

ENTRYPOINT jekyll serve --host 0.0.0.0

EXPOSE 4000

WORKDIR /home/user/ballerina/
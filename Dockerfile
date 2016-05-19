FROM node:0.12

ENV APP_HOME ./cunobo_client

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME


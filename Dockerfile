FROM node:0.12

ENV APP_HOME ./cunobo_client
ENV NODE_PATH ./node_modules

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME


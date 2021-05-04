FROM ubuntu:latest
MAINTAINER audrb96@naver.com
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev python-essential
COPY . /app
WORKDIR /app
RUN pip3 install -r requirements.txt
RUN python setup.py install
ENTRYPOINT ["python","app.py"]

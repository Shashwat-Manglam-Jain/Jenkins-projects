FROM jenkins/inbound-agent:latest

USER root

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs unzip curl docker.io

USER jenkins

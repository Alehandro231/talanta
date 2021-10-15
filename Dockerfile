#Dockerfile for Nginx CUI/MUI image. Version 1.2.0
ARG DOCKER_REGISTRY
FROM $DOCKER_REGISTRY/rhscl/nginx-116-rhel7:1-8

USER root

ARG port1
ARG port2

COPY build /usr/share/nginx/html
RUN rm -f /etc/localtime && ln -s /usr/share/zoneinfo/Europe/Moscow /etc/localtime

VOLUME ["/var/log/nginx/"]

EXPOSE $port1
EXPOSE $port2

CMD ["nginx", "-g", "daemon off;"]
$ docker run -dit --name my-apache-app -p 8080:80 -v /home/baribal/ownCloud/HEIG/Semestre_IV/RES/Laboratoire/http-infra-Bruno/Teaching-HEIGVD-RES-2019-Labo-HTTPInfra/docker-images/apache-php-image:/usr/local/apache2/htdocs/ httpd:2.4
docker run --rm --name testPHP -d -p 9090:80 php:7.2-apache

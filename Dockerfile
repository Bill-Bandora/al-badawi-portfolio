FROM node:22-alpine AS frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN VITE_CONTACT_MODE=php npm run build

FROM php:8.3-apache
RUN apt-get update \
    && apt-get install -y --no-install-recommends libonig-dev msmtp ca-certificates \
    && docker-php-ext-install -j2 mbstring \
    && apt-mark manual libonig5 \
    && apt-get purge -y --auto-remove libonig-dev \
    && rm -rf /var/lib/apt/lists/* \
    && a2enmod rewrite \
    && install -d -o www-data -g www-data -m 0700 /var/lib/contact
COPY docker/apache.conf /etc/apache2/sites-available/000-default.conf
COPY docker/php.ini /usr/local/etc/php/conf.d/contact.ini
COPY docker/entrypoint.sh /usr/local/bin/contact-entrypoint
RUN chmod 0755 /usr/local/bin/contact-entrypoint
COPY --from=frontend /app/dist/ /var/www/html/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD php -r 'exit(@file_get_contents("http://127.0.0.1/") === false ? 1 : 0);'
ENTRYPOINT ["contact-entrypoint"]
CMD ["apache2-foreground"]

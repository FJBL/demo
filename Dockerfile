# Usa una imagen base de Nginx
FROM nginx:1.25.3-alpine

# Elimina la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos compilados de Angular al directorio donde Nginx los sirve
COPY dist/ /usr/share/nginx/html/angular/browser

# Expón el puerto 80
EXPOSE 80
# Используем официальный образ Nginx для статических файлов
FROM nginx:alpine

# Копируем статические файлы в директорию Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Копируем кастомную конфигурацию Nginx (опционально)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Nginx запускается автоматически при старте контейнера
CMD ["nginx", "-g", "daemon off;"]

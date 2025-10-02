# 🚀 Статический сайт с автоматическим развертыванием на Play-with-Docker

Этот проект демонстрирует создание простого статического сайта и его автоматическое развертывание на Play-with-Docker с помощью GitHub Actions.

## 📁 Структура проекта

```
├── index.html              # Главная страница сайта
├── style.css              # Стили CSS
├── script.js              # JavaScript функциональность
├── Dockerfile             # Конфигурация Docker контейнера
├── docker-compose.yml     # Конфигурация для запуска
├── nginx.conf             # Конфигурация Nginx
├── .github/
│   └── workflows/
│       └── deploy-to-play-with-docker.yml  # GitHub Actions workflow
└── README.md              # Этот файл
```

## 🎯 Возможности сайта

- 📱 Адаптивный дизайн
- ⚡ Интерактивные элементы на JavaScript
- 🎨 Современный UI с градиентами и анимациями
- ⏰ Отображение текущего времени
- 🔄 Плавная прокрутка по разделам

## 🐳 Локальный запуск с Docker

### Вариант 1: Docker Compose (рекомендуется)
```bash
docker-compose up -d
```

### Вариант 2: Обычный Docker
```bash
# Собрать образ
docker build -t static-website .

# Запустить контейнер
docker run -d -p 80:80 --name my-static-site static-website
```

Сайт будет доступен по адресу: http://localhost

## 🔄 GitHub Actions Workflow

Workflow автоматически:

1. ✅ Собирает Docker образ
2. 🧪 Тестирует контейнер локально
3. 📦 Создает пакет для развертывания
4. 📤 Загружает артефакты для скачивания

### Триггеры запуска:
- Push в ветки `main` или `master`
- Pull Request в ветки `main` или `master`
- Ручной запуск через GitHub UI

## 🌐 Развертывание на Play-with-Docker

### Шаг 1: Настройка GitHub репозитория

1. Создайте новый репозиторий на GitHub
2. Загрузите все файлы проекта:

```bash
git init
git add .
git commit -m "Initial commit: Static website with Docker deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Шаг 2: Запуск GitHub Actions

1. Перейдите в раздел "Actions" вашего репозитория
2. Workflow запустится автоматически после push
3. Дождитесь завершения сборки (зеленая галочка)

### Шаг 3: Скачивание артефактов

1. Откройте последний успешный workflow run
2. Скачайте артефакт `play-with-docker-deployment`
3. Распакуйте архив на своем компьютере

### Шаг 4: Подготовка Play-with-Docker

1. Откройте https://labs.play-with-docker.com
2. Войдите с помощью Docker Hub аккаунта
3. Нажмите "Start" → "+ ADD NEW INSTANCE"

### Шаг 5: Загрузка файлов на Play-with-Docker

В терминале Play-with-Docker:

```bash
# Создайте директорию
mkdir static-website && cd static-website

# Загрузите файлы (используйте один из способов):

# Способ 1: Перетащите файлы в браузере (drag & drop)
# Способ 2: Используйте wget/curl с прямой ссылкой
# Способ 3: Скопируйте содержимое файлов вручную
```

### Шаг 6: Развертывание

```bash
# Если у вас есть deploy.sh
./deploy.sh

# Или вручную:
docker load < static-website.tar
docker-compose up -d
```

### Шаг 7: Открытие сайта

1. После запуска контейнера появится кнопка с портом "80"
2. Нажмите на неё для открытия сайта
3. Или используйте прямую ссылку из интерфейса Play-with-Docker

## 🛠️ Полезные команды

```bash
# Проверить статус контейнера
docker-compose ps

# Посмотреть логи
docker-compose logs

# Перезапустить сервис
docker-compose restart

# Остановить все сервисы
docker-compose down

# Посмотреть использование ресурсов
docker stats

# Зайти внутрь контейнера
docker exec -it static-website /bin/sh
```

## 🔧 Настройка и кастомизация

### Изменение порта
Если порт 80 занят, измените в `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Внешний порт 8080 вместо 80
```

### Изменение содержимого
1. Отредактируйте `index.html`, `style.css`, `script.js`
2. Сделайте commit и push
3. GitHub Actions автоматически пересоберет проект

### Добавление новых файлов
1. Добавьте файлы в корень проекта
2. Обновите `Dockerfile`, добавив строки COPY:
```dockerfile
COPY your-new-file.html /usr/share/nginx/html/
```

## 🐛 Устранение проблем

### Контейнер не запускается
```bash
# Проверьте логи
docker-compose logs

# Проверьте образы
docker images

# Перезагрузите образ
docker load < static-website.tar
```

### Сайт недоступен
```bash
# Проверьте статус контейнера
docker-compose ps

# Проверьте порты
docker port static-website

# Проверьте сеть
docker network ls
```

### Play-with-Docker ограничения
- Сессия длится 4 часа
- Ограниченные ресурсы (RAM, CPU)
- Нет постоянного хранилища

## 📚 Дополнительные ресурсы

- [Play-with-Docker](https://labs.play-with-docker.com)
- [Docker Documentation](https://docs.docker.com)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Nginx Documentation](https://nginx.org/en/docs/)

## 📄 Лицензия

Этот проект создан в образовательных целях и может свободно использоваться и модифицироваться.

---

**Автор:** GitHub Actions Workflow  
**Дата создания:** 2024  
**Версия:** 1.0

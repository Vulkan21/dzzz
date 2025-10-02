# 🚀 Инструкции по настройке и развертыванию

## Шаг 1: Загрузка файлов в GitHub репозиторий

### Вариант A: Через командную строку (рекомендуется)

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/Vulkan21/dzzz.git
cd dzzz

# 2. Скопируйте файлы проекта (все кроме README.md):
# - .github/workflows/deploy-to-play-with-docker.yml
# - .gitignore
# - docker-compose.yml
# - Dockerfile
# - index.html
# - nginx.conf
# - script.js
# - style.css

# 3. Добавьте файлы в Git
git add .
git commit -m "Add static website with Docker deployment for Play-with-Docker"
git push origin main
```

### Вариант B: Через веб-интерфейс GitHub

1. Откройте https://github.com/Vulkan21/dzzz
2. Нажмите "Add file" → "Create new file"
3. Создайте каждый файл по очереди, копируя содержимое

## Шаг 2: Настройка GitHub Actions

### 2.1 Проверка разрешений Actions

1. Перейдите в Settings → Actions → General
2. Убедитесь, что выбрано "Allow all actions and reusable workflows"
3. В разделе "Workflow permissions" выберите "Read and write permissions"

### 2.2 Настройка Secrets (если нужно)

Для данного проекта дополнительные secrets не требуются, так как мы используем публичные образы и артефакты.

## Шаг 3: Запуск GitHub Actions

### Автоматический запуск
Actions запустится автоматически после push в ветку main.

### Ручной запуск
1. Перейдите в раздел "Actions"
2. Выберите workflow "Deploy Static Site to Play-with-Docker"
3. Нажмите "Run workflow"

## Шаг 4: Скачивание артефактов

После успешного выполнения workflow:

1. Перейдите в раздел "Actions"
2. Откройте последний успешный run
3. Скачайте артефакт "play-with-docker-deployment"
4. Распакуйте архив

## Шаг 5: Развертывание на Play-with-Docker

### 5.1 Подготовка Play-with-Docker

1. Откройте https://labs.play-with-docker.com
2. Войдите с Docker Hub аккаунтом
3. Нажмите "Start" для создания сессии
4. Нажмите "+ ADD NEW INSTANCE"

### 5.2 Загрузка файлов

В терминале Play-with-Docker:

```bash
# Создайте рабочую директорию
mkdir static-website && cd static-website
```

**Способы загрузки файлов:**

**Способ 1: Drag & Drop (самый простой)**
- Перетащите файлы из скачанного архива в окно браузера Play-with-Docker

**Способ 2: Копирование содержимого**
- Откройте каждый файл из архива
- Создайте файл в Play-with-Docker: `nano filename`
- Скопируйте и вставьте содержимое

**Способ 3: Через wget (если есть прямая ссылка)**
```bash
# Если файлы доступны по прямой ссылке
wget https://github.com/Vulkan21/dzzz/releases/download/latest/play-with-docker-deployment.tar.gz
tar -xzf play-with-docker-deployment.tar.gz
```

### 5.3 Развертывание

```bash
# Сделайте скрипт исполняемым
chmod +x deploy.sh

# Запустите развертывание
./deploy.sh

# Или вручную:
docker load < static-website.tar
docker-compose up -d
```

### 5.4 Открытие сайта

1. После запуска контейнера появится кнопка с портом "80"
2. Нажмите на неё для открытия сайта
3. Сайт откроется в новой вкладке

## Шаг 6: Проверка работы

```bash
# Проверить статус контейнера
docker-compose ps

# Посмотреть логи
docker-compose logs

# Проверить доступность
curl http://localhost

# Посмотреть использование ресурсов
docker stats
```

## 🔧 Устранение проблем

### GitHub Actions не запускается
- Проверьте, что файл workflow находится в `.github/workflows/`
- Убедитесь, что Actions включены в настройках репозитория
- Проверьте синтаксис YAML файла

### Ошибки при сборке Docker
- Проверьте, что все файлы (Dockerfile, nginx.conf) загружены
- Убедитесь в правильности путей в Dockerfile

### Контейнер не запускается на Play-with-Docker
```bash
# Проверьте загрузку образа
docker images

# Проверьте логи
docker-compose logs

# Перезагрузите образ
docker load < static-website.tar
```

### Порт 80 занят
Измените порт в docker-compose.yml:
```yaml
ports:
  - "8080:80"  # Используйте порт 8080
```

## 📋 Контрольный список

- [ ] Файлы загружены в GitHub репозиторий
- [ ] GitHub Actions настроены и работают
- [ ] Workflow успешно выполнился
- [ ] Артефакты скачаны
- [ ] Play-with-Docker сессия создана
- [ ] Файлы загружены на Play-with-Docker
- [ ] Docker образ загружен
- [ ] Контейнер запущен
- [ ] Сайт доступен по ссылке

## 🎯 Ожидаемый результат

После выполнения всех шагов:
- Статический сайт работает на Play-with-Docker
- Доступен по порту 80 (или другому настроенному)
- Показывает современный интерфейс с анимациями
- Отображает текущее время
- Интерактивные элементы работают

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи GitHub Actions
2. Убедитесь в правильности всех файлов
3. Проверьте статус контейнеров в Play-with-Docker
4. Используйте команды диагностики из раздела "Проверка работы"

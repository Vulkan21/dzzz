// Простая интерактивность для демонстрации
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик кнопки
    const clickBtn = document.getElementById('clickBtn');
    const message = document.getElementById('message');
    
    clickBtn.addEventListener('click', function() {
        message.style.display = message.style.display === 'none' ? 'block' : 'none';
        
        if (message.style.display === 'block') {
            clickBtn.textContent = 'Скрыть сообщение';
            // Добавим анимацию
            message.style.opacity = '0';
            setTimeout(() => {
                message.style.opacity = '1';
            }, 100);
        } else {
            clickBtn.textContent = 'Нажми меня!';
        }
    });
    
    // Показать текущее время
    function updateServerTime() {
        const now = new Date();
        const timeString = now.toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const serverTimeElement = document.getElementById('serverTime');
        if (serverTimeElement) {
            serverTimeElement.textContent = timeString;
        }
    }
    
    // Обновляем время каждую секунду
    updateServerTime();
    setInterval(updateServerTime, 1000);
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Добавим немного анимации при загрузке
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Консольное сообщение для разработчиков
console.log('🚀 Статический сайт успешно загружен!');
console.log('📦 Развернуто с помощью Docker и GitHub Actions');
console.log('🌐 Работает на play-with-docker');

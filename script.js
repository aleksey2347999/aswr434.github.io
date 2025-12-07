// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Инициализация таймлайна
    initTimeline();
    
    // Инициализация карточек языков
    initLanguagesGrid();
    
    // Инициализация таблицы сравнения
    initComparisonTable();
    
    // Анимация счетчиков
    initCounters();
    
    // Фильтрация таймлайна
    initTimelineFilter();
    
    // Плавная прокрутка
    initSmoothScroll();
});

// Мобильное меню
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // Обновление активной ссылки
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// Таймлайн
function initTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${item.era}`;
        timelineItem.setAttribute('data-era', item.era);
        
        // Форматирование языков
        const languagesHtml = item.languages.map(lang => 
            `<span class="language-tag">${lang}</span>`
        ).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
                <div class="timeline-icon">
                    <i class="${item.icon}"></i>
                </div>
                <h3>${item.title}</h3>
                <div class="language-tags">${languagesHtml}</div>
                <p>${item.description}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
    
    // Анимация появления при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Карточки языков
function initLanguagesGrid() {
    const languagesGrid = document.getElementById('languagesGrid');
    
    languagesData.forEach(language => {
        const languageCard = document.createElement('div');
        languageCard.className = 'language-card';
        
        // Форматирование тегов
        const tagsHtml = language.tags.map(tag => 
            `<span class="language-tag">${tag}</span>`
        ).join('');
        
        languageCard.innerHTML = `
            <div class="language-header">
                <div class="language-icon" style="background: ${language.color}">
                    <i class="${language.icon}"></i>
                </div>
                <div class="language-meta">
                    <h3>${language.name}</h3>
                    <div class="language-year">${language.year} год</div>
                    <div class="language-creator">${language.creator}</div>
                </div>
            </div>
            <p class="language-description">${language.description}</p>
            <div class="language-tags">${tagsHtml}</div>
        `;
        
        languagesGrid.appendChild(languageCard);
    });
}

// Таблица сравнения
function initComparisonTable() {
    const comparisonTable = document.getElementById('comparisonTable');
    
    comparisonData.forEach(item => {
        const row = document.createElement('tr');
        
        // Создание индикатора сложности
        const complexityBars = Array(5).fill().map((_, i) => 
            `<div class="bar ${i < item.complexity ? 'filled' : ''}"></div>`
        ).join('');
        
        row.innerHTML = `
            <td><strong>${item.language}</strong></td>
            <td>${item.year}</td>
            <td>${item.type}</td>
            <td>${item.paradigm}</td>
            <td><div class="complexity-bars">${complexityBars}</div></td>
            <td>${item.usage}</td>
        `;
        
        comparisonTable.appendChild(row);
    });
}

// Анимация счетчиков
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 секунды
    const step = target / (duration / 16); // 60fps
    
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Фильтрация таймлайна
function initTimelineFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Обновление активной кнопки
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const era = button.getAttribute('data-era');
            filterTimeline(era);
        });
    });
}

function filterTimeline(era) {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        if (era === 'all' || item.getAttribute('data-era') === era) {
            item.style.display = 'block';
            // Анимация появления
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Скачивание ресурсов
function downloadResource(type) {
    let content = '';
    let filename = '';
    
    switch(type) {
        case 'timeline':
            content = generateTimelinePDF();
            filename = 'хронология-языков-программирования.txt';
            break;
        case 'examples':
            content = generateCodeExamples();
            filename = 'hello-world-примеры.txt';
            break;
        case 'books':
            content = generateBibliography();
            filename = 'библиография.txt';
            break;
        case 'all':
            content = generateAllResources();
            filename = 'все-материалы.txt';
            break;
    }
    
    downloadFile(content, filename);
    showNotification(`Файл "${filename}" скачан`);
}

function generateTimelinePDF() {
    let content = 'ХРОНОЛОГИЯ ЯЗЫКОВ ПРОГРАММИРОВАНИЯ\n';
    content += '========================================\n\n';
    
    timelineData.forEach(item => {
        content += `${item.year} - ${item.title}\n`;
        content += `Языки: ${item.languages.join(', ')}\n`;
        content += `${item.description}\n\n`;
    });
    
    return content;
}

function generateCodeExamples() {
    return `"HELLO, WORLD!" НА РАЗНЫХ ЯЗЫКАХ
===================================

Python:
print("Hello, World!")

JavaScript:
console.log("Hello, World!");

Java:
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

C:
#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}

C++:
#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}

C#:
using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}

PHP:
<?php
echo "Hello, World!";
?>

Swift:
print("Hello, World!")

Go:
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}

Rust:
fn main() {
    println!("Hello, World!");
}`;
}

function generateBibliography() {
    return `БИБЛИОГРАФИЯ ПО ИСТОРИИ ЯЗЫКОВ ПРОГРАММИРОВАНИЯ
====================================================

КНИГИ:
1. "History of Programming Languages" - Richard L. Wexelblat
2. "Masterminds of Programming" - Federico Biancuzzi, Shane Warden
3. "Coders at Work" - Peter Seibel
4. "The Pragmatic Programmer" - Andrew Hunt, David Thomas

СТАТЬИ И РЕСУРСЫ:
1. Wikipedia - History of programming languages
2. IEEE Annals of the History of Computing
3. ACM SIGPLAN History of Programming Languages Conference
4. Computer History Museum

ОФИЦИАЛЬНЫЕ САЙТЫ ЯЗЫКОВ:
- Python: python.org/doc
- JavaScript: developer.mozilla.org
- Java: docs.oracle.com/javase
- C++: isocpp.org
- C#: docs.microsoft.com/dotnet/csharp

АКАДЕМИЧЕСКИЕ КУРСЫ:
- MIT: History of Programming Languages
- Stanford: Programming Language Theory
- Harvard: CS 152 - Programming Languages`;
}

function generateAllResources() {
    return generateTimelinePDF() + '\n\n' + 
           generateCodeExamples() + '\n\n' + 
           generateBibliography();
}

// Утилита для скачивания файлов
function downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Стили для анимаций
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

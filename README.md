# Портфолио — Игнат Лукьянчук

Современный одностраничный сайт-портфолио, построенный на **React + Vite + Tailwind CSS**.

## ✨ Особенности

- **Стек:** React 18, Vite 5, Tailwind CSS 3, lucide-react
- **Превью проектов:** настоящие iframe-миниатюры, которые автоматически масштабируются по ширине карточки
- **Анимации:** плавное появление блоков при скролле (IntersectionObserver), анимированный градиент, плавающие блобы на фоне
- **Glassmorphism:** полупрозрачная шапка с `backdrop-blur` при прокрутке
- **Mobile First:** полностью адаптивный дизайн (mobile / tablet / desktop)
- **Без лишнего:** чистая структура, понятный код, без визуального мусора

## 🚀 Запуск

```bash
# 1. Установить зависимости
npm install

# 2. Запустить dev-сервер
npm run dev

# 3. Собрать production-версию
npm run build

# 4. Посмотреть production-сборку локально
npm run preview
```

После `npm run dev` Vite выдаст ссылку (обычно http://localhost:5173).

## 📁 Структура проекта

```
src/
├── App.jsx                  # Корневой компонент + глобальный reveal-обсервер
├── main.jsx                 # Точка входа React
├── index.css                # Tailwind + базовые стили
├── data/
│   └── projects.js          # Данные о проектах и личная информация
├── hooks/
│   └── useReveal.js         # Хук для анимации появления (необязателен, основной обсервер в App.jsx)
└── components/
    ├── Header.jsx           # Шапка с навигацией + glassmorphism
    ├── Hero.jsx             # Главный экран с CTA и УТП
    ├── Portfolio.jsx        # Секция с сеткой проектов
    ├── ProjectCard.jsx      # Отдельная карточка проекта (iframe-превью)
    └── Footer.jsx           # Подвал с контактами и соцсетями
```

## 🛠 Где менять контент

- **Имя, телефон, Telegram, описание** → `src/data/projects.js` → объект `personalInfo`
- **Список проектов** → `src/data/projects.js` → массив `projects`
- **Иконки соцсетей в футере** → `src/components/Footer.jsx` → массив `socials` (сейчас ссылки = `#`, замените на свои)

## 🎨 Темизация

Цвета акцентов настраиваются в `tailwind.config.js` (блок `theme.extend.colors.accent`) и в `src/index.css` (фон body, scrollbar и т.д.).

Ключевые кастомные анимации:
- `animate-blob` — плавающие фоновые пятна
- `animate-gradient-shift` — бегущий градиент на заголовке
- `animate-fade-in-up` — появление элементов Hero с задержкой

---

Сделано с вниманием к деталям. Если найдёте баг или захотите доработку — вы знаете, где меня найти 😉 (Telegram: @PhoenixItShark)

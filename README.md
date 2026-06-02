# Портфолио — Игнат Лукьянчук

Современный одностраничный сайт-портфолио, построенный на **React + Vite + Tailwind CSS**.

## ✨ Особенности

- **Стек:** React 18, Vite 5, Tailwind CSS 3, lucide-react
- **Локализация:** украинский (по умолчанию), русский, английский. Переключатель в шапке, выбор сохраняется в `localStorage`, авто-детект по языку браузера
- **Превью проектов:** настоящие iframe-миниатюры, которые автоматически масштабируются по ширине карточки
- **Анимации:** плавное появление блоков при скролле (IntersectionObserver), анимированный градиент, плавающие блобы на фоне
- **Glassmorphism:** полупрозрачная шапка с `backdrop-blur` при прокрутке
- **Mobile First:** полностью адаптивный дизайн (mobile / tablet / desktop)
- **Без лишнего:** чистая структура, понятный код, без визуального мусора
- **Без зависимостей для i18n:** лёгкий кастомный контекст, без `react-i18next` / `react-intl`

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
├── App.jsx                  # Корневой компонент + LanguageProvider + reveal-обсервер
├── main.jsx                 # Точка входа React
├── index.css                # Tailwind + базовые стили
├── data/
│   └── projects.js          # Данные о проектах и личная информация (мультиязычные поля)
├── hooks/
│   └── useReveal.js         # Хук для анимации появления (необязателен, основной обсервер в App.jsx)
├── i18n/
│   ├── LanguageContext.jsx  # Провайдер языка + useTranslation() с поддержкой {переменных}
│   └── translations/
│       ├── uk.js            # Украинский (по умолчанию)
│       ├── ru.js            # Русский
│       └── en.js            # Английский
└── components/
    ├── Header.jsx           # Шапка + LanguageSwitcher + glassmorphism
    ├── LanguageSwitcher.jsx # Выпадающий переключатель языка (UA / RU / EN)
    ├── Hero.jsx             # Главный экран с CTA и УТП
    ├── Portfolio.jsx        # Секция с сеткой проектов
    ├── ProjectCard.jsx      # Отдельная карточка проекта (iframe-превью)
    └── Footer.jsx           # Подвал с контактами и соцсетями
```

## 🛠 Где менять контент

- **Имя, телефон, Telegram, описание** → `src/data/projects.js` → объект `personalInfo` (поля `*Localized` хранят переводы для uk/ru/en)
- **Список проектов** → `src/data/projects.js` → массив `projects` (title / description / tags — объекты `{uk, ru, en}`)
- **Строки интерфейса** → `src/i18n/translations/{uk,ru,en}.js`
- **Иконки соцсетей в футере** → `src/components/Footer.jsx` → массив `socials` (сейчас ссылки = `#`, замените на свои)

## 🌍 Как работает локализация

- По умолчанию — **украинский**. Язык определяется по `localStorage` → `navigator.language` → fallback на `uk`.
- Выбор сохраняется в `localStorage` (ключ `portfolio.lang`).
- Переключение моментально обновляет: текст, `<html lang>`, `<title>`, `<meta name="description">`.
- В шапке (десктоп) и в мобильном меню — переключатель `UA / RU / EN` с иконкой Globe.
- Чтобы добавить новый язык: создайте `src/i18n/translations/<code>.js`, импортируйте его в `LanguageContext.jsx` и добавьте код в массив `SUPPORTED_LANGUAGES`.

## 🎨 Темизация

Цвета акцентов настраиваются в `tailwind.config.js` (блок `theme.extend.colors.accent`) и в `src/index.css` (фон body, scrollbar и т.д.).

Ключевые кастомные анимации:
- `animate-blob` — плавающие фоновые пятна
- `animate-gradient-shift` — бегущий градиент на заголовке
- `animate-fade-in-up` — появление элементов Hero с задержкой

---

Сделано с вниманием к деталям. Если найдёте баг или захотите доработку — вы знаете, где меня найти 😉 (Telegram: @PhoenixItShark)

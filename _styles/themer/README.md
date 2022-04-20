[📁](.)

## `themer`
**Themer** - это связка [миксина](_index.scss) для генерации кастомных свойств CSS и [скрипта](../../_scripts/themer.js), который применяет стили тем.

Также есть файл [_themes.scss](_themes.scss), в котором содержатся переменные с цветами, которые миксин переводит в кастомные свойства.

### Описание переменных в [_themes.scss](_themes.scss)
Темы делятся на два списка: dark и light (default). Название переменных в обоих списках одинаковое.

> Цвета применяются как обычные кастомные свойства. Напр.: `color: var(--colorFont)`.

- `colorAccent` - акцентный цвет
- `colorBackground` - цвет фона страницы
- `colorFont` - цвет шрифта
- `colorDivider` - цвет бордера
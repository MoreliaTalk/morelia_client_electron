# MoreliaClientElectron - десктопный клиент MoreliaTalk, написанный на Electron
Кросплатформенный(Windows, MacOS, Linux) десктопный клиент MoreliaTalk
## В разработке используется
- Electron 13
- React 17
- Typescript 4.4
- Webpack 5
- Ajv 8
- Electron-store 8
- Sass

## Установка готового приложения на компьютер

Windows: Зайти во вкладку релизов, скачать архив **morelia_client_electron-win32-x64.zip**, распаковать, запустить .exe файл

MacOS: Скоро

Linux: Скоро

## Разработка приложения
### Клонирование репозитория на локальный компьютер

Если ты не включен в команду на GitHub'е проекта, то необходимо сначала форкнуть к себе репозиторий MoreliaClientElectron перейдя по [ссылке](https://github.com/MoreliaTalk/morelia_client_electron/fork).

Клонировать репозиторий к себе на локальный компьютер используя командную строку и `git`

``` cmd
git clone https://github.com/{username}/morelia_client_electron.git
```

Переключаемся на ветку develop

```cmd
git checkout develop
```

При использовании `GitHub Desktop` выбрать в меню `File` пункт `Clone repository...` далее следовать инструкциям

### Установка Yarn

Перед установкой зависимостей необходимо глобально инсталировать пакетный менеджер Yarn. Делается это один раз, пропустите этот шаг, если вы уже установили yarn ранее.

``` cmd
npm install -g yarn
```

### Установка зависимостей

После клонирования репозитория на локальный компьютер необходимо установить зависимости проекта.

``` cmd
yarn install
```

### Запуск приложения

- Запуск со сборкой рендера.

``` cmd
yarn start
```

- Запуск без сборки рендера(Не выполнять, если хотя бы раз не собирали рендер(нет папки `dist` по пути `src/render/`) иначе вылетит ошибка)

``` cmd
yarn start_no_pack
```

- Запуск авто-сборки рендера.

``` cmd
yarn dev
```

Для просто запуска, без необходимости в авто-сборке после этого - команда `yarn start`

Для разработки, в одном окне терминала ввести команду `yarn start_no_pack`, а в другом - `yarn dev`.

## Лицензия

Copyright (c) 2021 - настоящее время [NekrodNIK](https://github.com/NekrodNIK)

MoreliaClientElectron находится под лицензией GNU General Public License версии 3 или более поздней(GPL-3.0-or-later). Подробности смотрите в файле COPYNG.


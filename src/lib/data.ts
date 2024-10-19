export type Description = Record<string, string[]> | string[];

export type Item = {
	name: string;
	city: string;
	startDate: string;
	endDate: string;
	description: Description;
	position: string;
};

export type Contact = {
	name: string;
	link: string;
};

type Data = {
	name: string;
	position: string;
	experience: Item[];
	education: Item[];
	contacts: Contact[];
};

export const data: Data = {
	name: 'Роман Кутимский',
	position: 'Frontend-разработчик',
	experience: [
		{
			name: 'TravelLine',
			city: 'Йошкар-Ола',
			position: 'Frontend-разработчик',
			startDate: 'Октябрь 2023',
			endDate: 'Настоящее время',
			description: {
				'Работа в команде формы бронирования (Март 2024 - Настоящее время)': [
					'Технологии: AngularJS, Less, React, SCSS',
					'Добавил новые элементы в форму бронирования, что расширило возможности пользователей при выборе номеров.',
					'Провел refactoring кода в проекте интеграции, заменив Lodash на нативные методы JavaScript, что сократило размер пакета и улучшило время загрузки страницы.'
				],
				'Разработка библиотеки компонентов на React (Октябрь 2023 - Март 2024)': [
					'Технологии: React, SCSS, Zustand',
					'Участвовал в разработке библиотеки компонентов на React. Таких как Radio, Select, Switch и др.',
					'Разработал и внедрил инструмент для просмотра, тестирования компонентов и взаимодействия с ними. Это ускорило процесс процесс разработки и тестирования, а также повысило безопасность и гибкость системы.',
					'Выступал с докладом на frontend meetup-е об инструменте для тестирования.'
				],
				'Практика у студентов': [
					'Участвую в проведении практики у студентов, веду лекции и проверяю домашние задания.'
				]
			}
		},
		{
			name: 'Pinkest Soft',
			city: 'Йошкар-Ола',
			position: 'Fullstack-разработчик',
			startDate: 'Февраль 2022',
			endDate: 'Октябрь 2023',
			description: [
				'Технологии: React, Electron, TypeScript, Node.js.',
				'Разрабатывал приложение для торговли на площадке Steam с использованием TypeScript на платформе Node.js.',
				'Решал проблемы с блокировкой аккаунтов с помощью прокси и правильных запросов. Это позволило обезопасить пользователей, что повысило доверие к нам.',
				'Верстал интерфейсы приложения на React по готовым макетам.',
				'Использовал библиотеку Playwright и работу с API для автоматизации регистрации новых аккаунтов. Автоматизация позволила сэкономить мое время и увеличить количество готовых аккаунтов за единицу времени.',
				'Разработал систему, состоящую из нескольких сервисов, обеспечивающих совместную работу и интеграцию на заказ.',
				'Участвовал в разработке open source проекта [trademanager-open-source](https://github.com/rawr111/trademanager-open-source).'
			]
		}
	],
	education: [
		{
			name: 'Поволжский государственный технологический университет',
			city: 'Йошкар-Ола',
			position: 'Бакалавр по направлению программная инженерия',
			startDate: 'Сентябрь 2022',
			endDate: 'Настоящее время',
			description: [
				'Разработка системы управления магазином чая: [tea-market](https://github.com/roman-kutimskii/tea-market). Проект включал создание полноценного приложения с использованием React, NestJS, PostgreSQL и др.',
				'Разработка приложения для просмотра расписания вуза: [volga-app](https://gitlab.fcd.su/fcdapps/volga-app). Помогал в разработке некоторого функционала на Svelte и BeerCSS, проводил code review и участвовал в продвижении проекта.'
			]
		}
	],
	contacts: [
		{ name: 'Telegram', link: 'https://t.me/roman_kutimskii' },
		{ name: 'Email', link: 'mailto: roman.kutimskii@gmail.com' },
		{ name: 'GitHub', link: 'https://github.com/roman-kutimskii' }
	]
};

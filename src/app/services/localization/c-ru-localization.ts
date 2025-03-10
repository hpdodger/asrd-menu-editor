import { TLanguage } from "./t-language";

export const CRuLocalization: TLanguage = {
	header: {
		for: "для",
		author: "автор"
	},
	tabs: {
		information: {
			caption: "Информация",
			toc: "К содержанию",
			sections: {
				generalInformation: {
					caption: "Общая информация",
					content: [
						"Создано в образовательно/развлекательных целях. Есть перечень доработок, которые хотелось бы сделать. Любая помощь и адекватная критика приветствуются."
					],
				},
				preview: {
					caption: "Как это выглядит",
					content: [
						"RadialMenu расположено по адресу Steam\\steamapps\\common\\Alien Swarm Reactive Drop\\reactivedrop\\scripts\\radialmenu.txt и является txt файлом, содержащим описание доступных меню и их пунктов этих меню.",
						"Каждое меню содержит лейбл, который является идентификатором этого меню и набор пунктов этих меню.",
						"Каждый пункт меню содержит лейбл, текст и команду.",
						`Лейбл является идентификатором пункта меню (их может быть до 9 штук - "Центр" | "Север" | "Северо-Восток" | "Восток" | "Юго-Восток" | "Юг" | "Юго-Запад" | "Запад" | "Север").`,
						"Текст определяет представление элемента в интерфейсе пользователя на экране.",
						"Команда определяет действие, выполняемое при выборе пункта меню.",
					],
				},
				workingWithEditor: {
					caption: "Работа с редактором",
					content: [
						"Вы можете добавлять произвольное количество меню",
						"Редактор позволяет вам создавать новые меню, редактировать существующие, удалять и добавлять элементы, а также создавать вложенные меню.",
						"Вложенные меню могут быть полезны для быстрого доступа к различным командам и позволяют не запоминать множественные бинды на кнопки клавиатуры.",
						`Флаг "Доступно" позволяет отключить элемент меню, если это необходимо. Вы не можете отключить центральный пункт меню.`,
						`Вкладка "Результат" позволяет увидеть меню в форматах игры и JSON, а также скачать их.`,
						"Ниже представлен пример обрезанного для наглядности готового трёхуровневого меню с переходами вглубь и обратно.",
					],
				},
				usingInTheGame: {
					caption: "Использование в игре",
					content: [
						`Сделайте бинд на любую кнопку для открытия меню по умолчанию, например 'bind o "radialmenu Default"'.`,
						`Отличие от команды "+mouse_menu" в том, что эта команда окрывает меню при удержании кнопки, а "radialmenu" - при обычном нажатии.`,
						"Вы можете быстро закрыть меню в любое время по нажатию например кнопки меню по умолчанию (Z).",
						"Существуют некоторые особенности при использовании вложенных меню.",
						"Например, при выборе пункта меню, который должен привести вас к подменю,",
						"Вам необходимо нажать на него (в этот момент подменю откроется) и продолжать удерживать кнопку мыши.",
						"Теперь если вам необходимо выбрать команду из подменю, независимо от того, вызывает ли эта команда следующее подменю или нет,",
						"Установите курсор на ней и отпустите кнопку мыши. Возврат в предыдущее меню работает по такому же принципу.",
					],
				}
			}
		},
		editor: {
			caption: "Редактор",
			addMenu: "Добавить меню",
			loadMenu: "Загрузить меню из JSON-файла",
			menu: {
				removeMenu: "Удалить меню",
				menuLabel: "Заголовок меню",
				item: {
					command: "Команда",
					text: "Текст",
					enabled: "Доступно",
					northWest: "Северо-запад",
					north: "Север",
					northEast: "Северо-восток",
					west: "Запад",
					center: "Центр",
					east: "Восток",
					southWest: "Юго-запад",
					south: "Юг",
					southEast: "Юго-восток",
				}
			},			
		},
		result: {
			caption: "Результат",
			saveToFile: "Сохранить в файл"
		},
		quickRef: {
			caption: "Справка по командам"
		}
	}

}
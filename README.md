ТЗ на 1 час:

Написать парсер json-schema с поддержкой двух типов полей: string и integer, для string требуется поддержка pattern. Глубокая поддержка стандарта типа oneOf/anyOf не требуется. Код должен быть минимально покрыт тестами. 

Обязательно использование redux

Форма должна сабмиттиться 

Пример схемы:


{ 
"type": "object",
"title": "My Form",
"properties": { 
"firstName": {
"title": "First name"
},
"cellphone": {
"title": "Cellphone",
"pattern": "^\\\\([0-9]{3}\\\\) [0-9]{3}-[0-9]{2}-[0-9]{2}$"
}
},
"required": [
"cellphone"
]
}

Использование существующих парсеров json-schema недопустимо

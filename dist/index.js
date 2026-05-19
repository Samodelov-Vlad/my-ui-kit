import { Button as e, Checkbox as t, DatePicker as n, Input as r, InputNumber as i, Modal as a, Radio as o, Select as s, Spin as c } from "antd";
import l, { forwardRef as u, useEffect as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { AllCommunityModule as g, ModuleRegistry as _, themeQuartz as v } from "ag-grid-community";
import { AgGridReact as y } from "ag-grid-react";
//#region \0rolldown/runtime.js
var b = Object.create, x = Object.defineProperty, S = Object.getOwnPropertyDescriptor, C = Object.getOwnPropertyNames, w = Object.getPrototypeOf, T = Object.prototype.hasOwnProperty, E = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), D = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = C(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !T.call(e, s) && s !== n && x(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = S(t, s)) || r.enumerable
	});
	return e;
}, O = (e, t, n) => (n = e == null ? {} : b(w(e)), D(t || !e || !e.__esModule ? x(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), k = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), A = u(({ ...t }, n) => /* @__PURE__ */ m(e, {
	ref: n,
	...t
})), j = u(({ ...e }, t) => /* @__PURE__ */ m(r, {
	ref: t,
	...e
})), M = u(({ ...e }, t) => /* @__PURE__ */ m(s, {
	ref: t,
	showSearch: !0,
	optionFilterProp: "label",
	allowClear: !0,
	...e
})), N = u(({ ...e }, t) => /* @__PURE__ */ m(r.TextArea, {
	ref: t,
	...e
})), P = u(({ format: e, ...t }, r) => /* @__PURE__ */ m(n, {
	ref: r,
	allowClear: !0,
	showNow: !0,
	format: {
		format: e,
		type: "mask"
	},
	...t
})), F = u(({ isPretty: e = !0, ...t }, n) => /* @__PURE__ */ m(i, {
	ref: n,
	decimalSeparator: ",",
	...e && { formatter: (e) => String(e).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d{1,2}))/g, " ") },
	...t
})), I = u((e, t) => /* @__PURE__ */ m(o.Group, {
	ref: t,
	optionType: "button",
	buttonStyle: "solid",
	...e
})), L = ({ ...e }) => /* @__PURE__ */ m(c, { ...e }), R = u(({ ...e }, n) => /* @__PURE__ */ m(t, {
	ref: n,
	...e
})), ee = {
	selectAll: "(Выделить все)",
	selectAllSearchResults: "(Выделить все результаты поиска)",
	addCurrentSelectionToFilter: "Добавить текущий выбор в фильтр",
	searchOoo: "Поиск...",
	blanks: "(Пустые)",
	noMatches: "Нет совпадений",
	filterOoo: "Фильтр...",
	equals: "Равно",
	notEqual: "Не равно",
	blank: "Пусто",
	notBlank: "Не пусто",
	empty: "Выберите один",
	lessThan: "Меньше чем",
	greaterThan: "Больше чем",
	lessThanOrEqual: "Меньше или равно",
	greaterThanOrEqual: "Больше или равно",
	inRange: "Между",
	inRangeStart: "От",
	inRangeEnd: "До",
	contains: "Содержит",
	notContains: "Не содержит",
	startsWith: "Начинается с",
	endsWith: "Кончается на",
	dateFormatOoo: "dd.mm.yyyy",
	before: "До",
	after: "После",
	andCondition: "И",
	orCondition: "ИЛИ",
	applyFilter: "Применить",
	resetFilter: "Сбросить",
	clearFilter: "Очистить",
	cancelFilter: "Отмена",
	textFilter: "Текстовый фильтр",
	numberFilter: "Числовой фильтр",
	dateFilter: "Фильтр по дате",
	setFilter: "Выбрать фильтр",
	groupFilterSelect: "Выбрать поле:",
	advancedFilterContains: "содержит",
	advancedFilterNotContains: "не содержит",
	advancedFilterTextEquals: "равно",
	advancedFilterTextNotEqual: "не равно",
	advancedFilterStartsWith: "начинается с",
	advancedFilterEndsWith: "заканчивается на",
	advancedFilterBlank: "пусто",
	advancedFilterNotBlank: "не пусто",
	advancedFilterEquals: "=",
	advancedFilterNotEqual: "!=",
	advancedFilterGreaterThan: ">",
	advancedFilterGreaterThanOrEqual: ">=",
	advancedFilterLessThan: "<",
	advancedFilterLessThanOrEqual: "<=",
	advancedFilterTrue: "истина",
	advancedFilterFalse: "ложь",
	advancedFilterAnd: "И",
	advancedFilterOr: "ИЛИ",
	advancedFilterApply: "Применить",
	advancedFilterBuilder: "Конструктор",
	advancedFilterValidationMissingColumn: "Отсутствует столбец",
	advancedFilterValidationMissingOption: "Отсутствует параметр",
	advancedFilterValidationMissingValue: "Отсутствует значение",
	advancedFilterValidationInvalidColumn: "Столбец не найден",
	advancedFilterValidationInvalidOption: "Параметр не найден",
	advancedFilterValidationMissingQuote: "Отсутствует закрывающая кавычка",
	advancedFilterValidationNotANumber: "Значение не является числом",
	advancedFilterValidationInvalidDate: "Недействительная дата",
	advancedFilterValidationMissingCondition: "Отсутствует условие",
	advancedFilterValidationJoinOperatorMismatch: "Операторы объединения внутри условия должны быть одинаковыми",
	advancedFilterValidationInvalidJoinOperator: "Оператор объединения не найден",
	advancedFilterValidationMissingEndBracket: "Отсутствует закрывающая скобка",
	advancedFilterValidationExtraEndBracket: "Лишние закрывающие скобки",
	advancedFilterValidationMessage: "Ошибка в выражении. ${variable} - ${variable}.",
	advancedFilterValidationMessageAtEnd: "Ошибка в выражении. ${variable} в конце выражения.",
	advancedFilterBuilderTitle: "Продвинутый фильтр",
	advancedFilterBuilderApply: "Применить",
	advancedFilterBuilderCancel: "Отмена",
	advancedFilterBuilderAddButtonTooltip: "Добавить фильтр или группу",
	advancedFilterBuilderRemoveButtonTooltip: "Удалить",
	advancedFilterBuilderMoveUpButtonTooltip: "Переместить вверх",
	advancedFilterBuilderMoveDownButtonTooltip: "Переместить вниз",
	advancedFilterBuilderAddJoin: "Добавить группу",
	advancedFilterBuilderAddCondition: "Добавить фильтр",
	advancedFilterBuilderSelectColumn: "Выберите столбец",
	advancedFilterBuilderSelectOption: "Выберите параметр",
	advancedFilterBuilderEnterValue: "Введите значение...",
	advancedFilterBuilderValidationAlreadyApplied: "Текущий фильтр уже применен.",
	advancedFilterBuilderValidationIncomplete: "Не все условия завершены.",
	advancedFilterBuilderValidationSelectColumn: "Необходимо выбрать столбец.",
	advancedFilterBuilderValidationSelectOption: "Необходимо выбрать параметр.",
	advancedFilterBuilderValidationEnterValue: "Необходимо ввести значение.",
	columns: "Столбцы",
	filters: "Фильтры",
	pivotMode: "Режим сводной таблицы",
	groups: "Группы строк",
	rowGroupColumnsEmptyMessage: "Перетащите сюда для группировки по строкам",
	values: "Значения",
	valueColumnsEmptyMessage: "Перетащите сюда для агрегации",
	pivots: "Метки столбцов",
	pivotColumnsEmptyMessage: "Перетащите сюда для задания заголовков столбцам",
	group: "Группа",
	rowDragRow: "строка",
	rowDragRows: "строки",
	loadingOoo: "Загрузка...",
	loadingError: "Ошибка",
	noRowsToShow: "Нет данных",
	enabled: "Включено",
	pinColumn: "Закрепить столбец",
	pinLeft: "Закрепить слева",
	pinRight: "Закрепить справа",
	noPin: "Не закреплять",
	valueAggregation: "Агрегация значений",
	noAggregation: "Нет",
	autosizeThisColumn: "Авторазмер этого столбца",
	autosizeAllColumns: "Авторазмер всех столбцов",
	groupBy: "Группировать по",
	ungroupBy: "Разгруппировать по",
	ungroupAll: "Разгруппировать все",
	addToValues: "Добавить ${variable} в значения",
	removeFromValues: "Удалить ${variable} из значений",
	addToLabels: "Добавить ${variable} в метки",
	removeFromLabels: "Удалить ${variable} из меток",
	resetColumns: "Сбросить столбцы",
	expandAll: "Развернуть все группы строк",
	collapseAll: "Свернуть все группы строк",
	copy: "Копировать",
	ctrlC: "Ctrl+C",
	ctrlX: "Ctrl+X",
	copyWithHeaders: "Копировать с заголовками",
	copyWithGroupHeaders: "Копировать с групповыми заголовками",
	cut: "Вырезать",
	paste: "Вставить",
	ctrlV: "Ctrl+V",
	export: "Экспорт",
	csvExport: "Экспорт CSV",
	excelExport: "Экспорт Excel",
	columnFilter: "Фильтр столбца",
	columnChooser: "Выбор столбцов",
	chooseColumns: "Выберите столбцы",
	sortAscending: "Сортировать по возрастанию",
	sortDescending: "Сортировать по убыванию",
	sortUnSort: "Очистить сортировку",
	sum: "Сумма",
	first: "Первый",
	last: "Последний",
	min: "Минимум",
	max: "Максимум",
	none: "Пусто",
	count: "Количество",
	avg: "Среднее",
	filteredRows: "Отфильтрованные",
	selectedRows: "Выбрано",
	totalRows: "Всего строк",
	totalAndFilteredRows: "Строки",
	more: "Еще",
	to: "по",
	of: "из",
	page: "Страница",
	pageLastRowUnknown: "?",
	nextPage: "Следующая страница",
	lastPage: "Последняя страница",
	firstPage: "Первая страница",
	previousPage: "Предыдущая страница",
	pageSizeSelectorLabel: "Размер страницы:",
	footerTotal: "Итого",
	pivotColumnGroupTotals: "Всего",
	pivotChartAndPivotMode: "Сводная диаграмма и режим сводки",
	pivotChart: "Сводная диаграмма",
	chartRange: "Диапазон диаграммы",
	columnChart: "Столбчатая",
	groupedColumn: "Группированная",
	stackedColumn: "Сложенная",
	normalizedColumn: "100% сложенная",
	barChart: "Гистограмма",
	groupedBar: "Группированная",
	stackedBar: "Сложенная",
	normalizedBar: "100% сложенная",
	pieChart: "Круговая",
	pie: "Круговая",
	donut: "Кольцевая",
	lineChart: "Линейная",
	stackedLine: "Сложенная",
	normalizedLine: "100% сложенная",
	xyChart: "XY (Точечная)",
	scatter: "Точечная",
	bubble: "Пузырьковая",
	areaChart: "Область",
	area: "Диаграмма с областями",
	stackedArea: "Сложенная",
	normalizedArea: "100% сложенная",
	histogramChart: "Гистограмма",
	polarChart: "Полярная",
	radarLine: "Радарная линия",
	radarArea: "Радарная область",
	nightingale: "Диаграмма Найтинга́йл",
	radialColumn: "Радиальная колонка",
	radialBar: "Радиальная гистограмма",
	statisticalChart: "Статистическая",
	boxPlot: "Ящичный график",
	rangeBar: "Диапазонная гистограмма",
	rangeArea: "Диапазонная область",
	hierarchicalChart: "Иерархическая",
	treemap: "Древовидная карта",
	sunburst: "Солнечная диаграмма",
	specializedChart: "Специализированная",
	waterfall: "Водопадная",
	heatmap: "Тепловая карта",
	combinationChart: "Комбинированная",
	columnLineCombo: "Столбчатая и линейная",
	AreaColumnCombo: "Площадная и столбчатая",
	pivotChartTitle: "Сводная диаграмма",
	rangeChartTitle: "График диапазона",
	settings: "Настройки",
	data: "Данные",
	format: "Формат",
	categories: "Категории",
	defaultCategory: "(Пусто)",
	series: "Серии",
	switchCategorySeries: "Переключить категорию / ряд",
	categoryValues: "Значения категорий",
	seriesLabels: "Метки рядов",
	aggregate: "Агрегация",
	xyValues: "Значения X Y",
	paired: "Парный режим",
	axis: "Ось",
	xAxis: "Горизонтальная ось",
	yAxis: "Вертикальная ось",
	polarAxis: "Полярная ось",
	radiusAxis: "Ось радиуса",
	navigator: "Навигатор",
	zoom: "Масштаб",
	animation: "Анимация",
	crosshair: "Перекрестие",
	color: "Цвет",
	thickness: "Толщина",
	preferredLength: "Предпочитаемая длина",
	xType: "Тип X",
	axisType: "Тип оси",
	automatic: "Автоматически",
	category: "Категория",
	number: "Число",
	time: "Время",
	timeFormat: "Формат времени",
	autoRotate: "Автоповорот",
	xRotation: "X Поворот",
	yRotation: "Y Поворот",
	labelRotation: "Вращение",
	circle: "Круг",
	polygon: "Многоугольник",
	square: "Квадрат",
	cross: "Крест",
	diamond: "Ромб",
	plus: "Плюс",
	triangle: "Треугольник",
	heart: "Сердце",
	orientation: "Ориентация",
	fixed: "Фиксированная",
	parallel: "Параллельная",
	perpendicular: "Перпендикулярная",
	radiusAxisPosition: "Позиция",
	ticks: "Отметки",
	gridLines: "Линии сетки",
	width: "Ширина",
	height: "Высота",
	length: "Длина",
	padding: "Внутренний отступ",
	spacing: "Отступ",
	chart: "Диаграмма",
	chartStyle: "Стиль диаграммы",
	title: "Заголовок",
	chartTitles: "Заголовки",
	chartTitle: "Заголовок диаграммы",
	chartSubtitle: "Подзаголовок",
	horizontalAxisTitle: "Заголовок горизонтальной оси",
	verticalAxisTitle: "Заголовок вертикальной оси",
	polarAxisTitle: "Заголовок полярной оси",
	titlePlaceholder: "Заголовок диаграммы - двойной щелчок для редактирования",
	background: "Фон",
	font: "Шрифт",
	weight: "Толщина",
	top: "Верх",
	right: "Право",
	bottom: "Низ",
	left: "Лево",
	labels: "Метки",
	calloutLabels: "Выноски",
	sectorLabels: "Метки секторов",
	positionRatio: "Коэффициент положения",
	size: "Размер",
	shape: "Форма",
	minSize: "Минимальный размер",
	maxSize: "Максимальный размер",
	legend: "Легенда",
	position: "Позиция",
	markerSize: "Размер маркера",
	markerStroke: "Обводка маркера",
	markerPadding: "Отступ маркера",
	itemSpacing: "Расстояние между элементами",
	itemPaddingX: "Горизонтальный отступ элемента по X",
	itemPaddingY: "Вертикальный отступ элемента по Y",
	layoutHorizontalSpacing: "Горизонтальный отступ",
	layoutVerticalSpacing: "Вертикальный отступ",
	strokeWidth: "Толщина линии",
	offset: "Смещение",
	offsets: "Смещения",
	tooltips: "Подсказки",
	callout: "Выноска",
	markers: "Маркеры",
	shadow: "Тень",
	blur: "Размытие",
	xOffset: "Смещение по X",
	yOffset: "Смещение по Y",
	lineWidth: "Ширина линии",
	lineDash: "Тип линии",
	lineDashOffset: "Смещение штрихов",
	scrollingZoom: "Прокрутка",
	scrollingStep: "Шаг прокрутки",
	selectingZoom: "Выделение",
	durationMillis: "Длительность (мс)",
	crosshairLabel: "Метка перекрестия",
	crosshairSnap: "Привязка к узлу",
	normal: "Обычный",
	bold: "Жирный",
	italic: "Курсив",
	boldItalic: "Жирный курсив",
	predefined: "Предопределенный",
	fillOpacity: "Непрозрачность заливки",
	strokeColor: "Цвет линии",
	strokeOpacity: "Непрозрачность линии",
	miniChart: "Мини-диаграмма",
	histogramBinCount: "Количество корзин",
	connectorLine: "Соединительная линия",
	seriesItems: "Элементы серии",
	seriesItemType: "Тип элемента",
	seriesItemPositive: "Положительный",
	seriesItemNegative: "Отрицательный",
	seriesItemLabels: "Метки элементов",
	columnGroup: "Столбцы",
	barGroup: "Гистограмма",
	pieGroup: "Круговая",
	lineGroup: "Линейная",
	scatterGroup: "Точечная",
	areaGroup: "Площадная",
	polarGroup: "Полярная",
	statisticalGroup: "Статистическая",
	hierarchicalGroup: "Иерархическая",
	specializedGroup: "Специализированная",
	combinationGroup: "Комбинированная",
	groupedColumnTooltip: "Группированная",
	stackedColumnTooltip: "Сложенная",
	normalizedColumnTooltip: "100% сложенная",
	groupedBarTooltip: "Группированная",
	stackedBarTooltip: "Сложенная",
	normalizedBarTooltip: "100% сложенная",
	pieTooltip: "Круговая",
	donutTooltip: "Кольцевая",
	lineTooltip: "Линейная",
	stackedLineTooltip: "Сложенная",
	normalizedLineTooltip: "100% сложенная",
	groupedAreaTooltip: "Площадная",
	stackedAreaTooltip: "Сложенная",
	normalizedAreaTooltip: "100% сложенная",
	scatterTooltip: "Точечная",
	bubbleTooltip: "Пузырьковая",
	histogramTooltip: "Гистограмма",
	radialColumnTooltip: "Радиальная колонка",
	radialBarTooltip: "Радиальная гистограмма",
	radarLineTooltip: "Радарная линия",
	radarAreaTooltip: "Радарная область",
	nightingaleTooltip: "Диаграмма Найтинга́йл",
	rangeBarTooltip: "Диапазонная гистограмма",
	rangeAreaTooltip: "Диапазонная область",
	boxPlotTooltip: "Ящичный график",
	treemapTooltip: "Древовидная карта",
	sunburstTooltip: "Солнечная диаграмма",
	waterfallTooltip: "Водопадная диаграмма",
	heatmapTooltip: "Тепловая карта",
	columnLineComboTooltip: "Столбчатая и линейная",
	areaColumnComboTooltip: "Площадная и столбчатая",
	customComboTooltip: "Настраиваемая комбинация",
	innerRadius: "Внутренний радиус",
	startAngle: "Начальный угол",
	endAngle: "Конечный угол",
	reverseDirection: "Обратное направление",
	groupPadding: "Отступ группы",
	seriesPadding: "Отступ ряда",
	tile: "Плитка",
	whisker: "Усы",
	cap: "Крышка",
	capLengthRatio: "Соотношение длины",
	labelPlacement: "Размещение метки",
	inside: "Внутри",
	outside: "Снаружи",
	noDataToChart: "Нет данных для построения диаграммы.",
	pivotChartRequiresPivotMode: "Для сводной диаграммы необходим режим сводной диаграммы.",
	chartSettingsToolbarTooltip: "Меню",
	chartLinkToolbarTooltip: "Связано с таблицей",
	chartUnlinkToolbarTooltip: "Отключено от таблицы",
	chartDownloadToolbarTooltip: "Скачать диаграмму",
	chartMenuToolbarTooltip: "Меню",
	chartEdit: "Редактировать диаграмму",
	chartAdvancedSettings: "Расширенные настройки",
	chartLink: "Связать с таблицей",
	chartUnlink: "Отключить от таблицы",
	chartDownload: "Скачать диаграмму",
	histogramFrequency: "Частота",
	seriesChartType: "Тип диаграммы ряда",
	seriesType: "Тип ряда",
	secondaryAxis: "Вторая ось",
	seriesAdd: "Добавить ряд",
	categoryAdd: "Добавить категорию",
	bar: "Гистограмма",
	column: "Столбцы",
	histogram: "Гистограмма",
	advancedSettings: "Расширенные настройки",
	direction: "Направление",
	horizontal: "Горизонтальное",
	vertical: "Вертикальное",
	seriesGroupType: "Тип группы",
	groupedSeriesGroupType: "Группированная",
	stackedSeriesGroupType: "Сложенная",
	normalizedSeriesGroupType: "100% сложенная",
	legendEnabled: "Включена",
	invalidColor: "Некорректный цвет",
	groupedColumnFull: "Группированная столбчатая",
	stackedColumnFull: "Сложенная столбчатая",
	normalizedColumnFull: "100% сложенная столбчатая",
	groupedBarFull: "Группированная гистограмма",
	stackedBarFull: "Сложенная гистограмма",
	normalizedBarFull: "100% сложенная гистограмма",
	stackedAreaFull: "Сложенная площадная",
	normalizedAreaFull: "100% сложенная площадная",
	customCombo: "Настраиваемая комбинация",
	funnel: "Воронка",
	coneFunnel: "Конусная воронка",
	pyramid: "Пирамида",
	funnelGroup: "Воронка",
	funnelTooltip: "Воронка",
	coneFunnelTooltip: "Конусная воронка",
	pyramidTooltip: "Пирамида",
	dropOff: "Отказ",
	stageLabels: "Метки этапов",
	reverse: "Обратное направление",
	ariaAdvancedFilterBuilderItem: "${variable}. Уровень ${variable}. Нажмите ENTER для редактирования",
	ariaAdvancedFilterBuilderItemValidation: "${variable}. Уровень ${variable}. ${variable} Нажмите ENTER для редактирования",
	ariaAdvancedFilterBuilderList: "Список конструктора продвинутого фильтра",
	ariaAdvancedFilterBuilderFilterItem: "Условие фильтра",
	ariaAdvancedFilterBuilderGroupItem: "Группа фильтров",
	ariaAdvancedFilterBuilderColumn: "Столбец",
	ariaAdvancedFilterBuilderOption: "Опция",
	ariaAdvancedFilterBuilderValueP: "Значение",
	ariaAdvancedFilterBuilderJoinOperator: "Оператор объединения",
	ariaAdvancedFilterInput: "Поле ввода продвинутого фильтра",
	ariaChecked: "выбрано",
	ariaColumn: "Столбец",
	ariaColumnGroup: "Группа столбцов",
	ariaColumnFiltered: "Столбец отфильтрован",
	ariaColumnSelectAll: "Переключить видимость всех столбцов",
	ariaDateFilterInput: "Поле ввода фильтра даты",
	ariaDefaultListName: "Список",
	ariaFilterColumnsInput: "Поле ввода для фильтрации столбцов",
	ariaFilterFromValue: "Фильтр от значения",
	ariaFilterInput: "Поле ввода фильтра",
	ariaFilterList: "Список фильтров",
	ariaFilterToValue: "Фильтр до значения",
	ariaFilterValue: "Значение фильтра",
	ariaFilterMenuOpen: "Открыть меню фильтра",
	ariaFilteringOperator: "Оператор фильтрации",
	ariaHidden: "скрыто",
	ariaIndeterminate: "неопределено",
	ariaInputEditor: "Редактор ввода",
	ariaMenuColumn: "Нажмите ALT + ВНИЗ для открытия меню столбца",
	ariaFilterColumn: "Нажмите CTRL + ENTER для открытия фильтра",
	ariaRowDeselect: "Нажмите ПРОБЕЛ, чтобы отменить выбор этой строки",
	ariaHeaderSelection: "Столбец с выбором заголовка",
	ariaSelectAllCells: "Нажмите ПРОБЕЛ, чтобы выбрать все ячейки",
	ariaRowSelectAll: "Нажмите ПРОБЕЛ, чтобы переключить выбор всех строк",
	ariaRowToggleSelection: "Нажмите ПРОБЕЛ, чтобы переключить выбор строки",
	ariaRowSelect: "Нажмите ПРОБЕЛ, чтобы выбрать эту строку",
	ariaRowSelectionDisabled: "Выбор строк отключен для этой строки",
	ariaSearch: "Поиск",
	ariaSortableColumn: "Нажмите ENTER для сортировки",
	ariaToggleVisibility: "Нажмите ПРОБЕЛ, чтобы переключить видимость",
	ariaToggleCellValue: "Нажмите ПРОБЕЛ, чтобы переключить значение ячейки",
	ariaUnchecked: "не выбрано",
	ariaVisible: "видимо",
	ariaSearchFilterValues: "Поиск значений фильтра",
	ariaPageSizeSelectorLabel: "Размер страницы",
	ariaChartMenuClose: "Закрыть меню редактирования диаграммы",
	ariaChartSelected: "Выбрано",
	ariaSkeletonCellLoadingFailed: "Ошибка загрузки строки",
	ariaSkeletonCellLoading: "Загрузка данных строки",
	ariaRowGroupDropZonePanelLabel: "Группы строк",
	ariaValuesDropZonePanelLabel: "Значения",
	ariaPivotDropZonePanelLabel: "Метки столбцов",
	ariaDropZoneColumnComponentDescription: "Нажмите DELETE, чтобы удалить",
	ariaDropZoneColumnValueItemDescription: "Нажмите ENTER, чтобы изменить тип агрегации",
	ariaDropZoneColumnGroupItemDescription: "Нажмите ENTER для сортировки",
	ariaDropZoneColumnComponentAggFuncSeparator: " из ",
	ariaDropZoneColumnComponentSortAscending: "по возрастанию",
	ariaDropZoneColumnComponentSortDescending: "по убыванию",
	ariaLabelDialog: "Диалог",
	ariaLabelColumnMenu: "Меню столбцов",
	ariaLabelColumnFilter: "Фильтр столбцов",
	ariaLabelCellEditor: "Редактор ячеек",
	ariaLabelSelectField: "Выбрать поле",
	ariaLabelLoadingContextMenu: "Загрузка контекстного меню",
	ariaLabelRichSelectField: "Поле расширенного выбора",
	ariaLabelRichSelectToggleSelection: "Нажмите ПРОБЕЛ, чтобы переключить выбор",
	ariaLabelRichSelectDeselectAllItems: "Нажмите DELETE, чтобы снять выделение со всех элементов",
	ariaLabelRichSelectDeleteSelection: "Нажмите DELETE, чтобы снять выделение с элемента",
	ariaLabelTooltip: "Подсказка",
	ariaLabelContextMenu: "Контекстное меню",
	ariaLabelSubMenu: "Подменю",
	ariaLabelAggregationFunction: "Функция агрегации",
	ariaLabelAdvancedFilterAutocomplete: "Автозаполнение продвинутого фильтра",
	ariaLabelAdvancedFilterBuilderAddField: "Конструктор продвинутого фильтра - добавить поле",
	ariaLabelAdvancedFilterBuilderColumnSelectField: "Конструктор продвинутого фильтра - выбор столбца",
	ariaLabelAdvancedFilterBuilderOptionSelectField: "Конструктор продвинутого фильтра - выбор опции",
	ariaLabelAdvancedFilterBuilderJoinSelectField: "Конструктор продвинутого фильтра - выбор оператора объединения",
	ariaColumnPanelList: "Список столбцов",
	ariaFilterPanelList: "Список фильтров",
	thousandSeparator: ",",
	decimalSeparator: ".",
	true: "Истина",
	false: "Ложь",
	invalidDate: "Недействительная дата",
	invalidNumber: "Недействительное число",
	january: "Январь",
	february: "Февраль",
	march: "Март",
	april: "Апрель",
	may: "Май",
	june: "Июнь",
	july: "Июль",
	august: "Август",
	september: "Сентябрь",
	october: "Октябрь",
	november: "Ноябрь",
	december: "Декабрь",
	timeFormatSlashesDDMMYYYY: "DD/MM/YYYY",
	timeFormatSlashesMMDDYYYY: "MM/DD/YYYY",
	timeFormatSlashesDDMMYY: "DD/MM/YY",
	timeFormatSlashesMMDDYY: "MM/DD/YY",
	timeFormatDotsDDMYY: "DD.M.YY",
	timeFormatDotsMDDYY: "M.DD.YY",
	timeFormatDashesYYYYMMDD: "YYYY-MM-DD",
	timeFormatSpacesDDMMMMYYYY: "DD MMMM YYYY",
	timeFormatHHMMSS: "HH:MM:SS",
	timeFormatHHMMSSAmPm: "HH:MM:SS AM/PM"
};
//#endregion
//#region src/components/ag-grid-react-base/index.tsx
_.registerModules([g]);
var z = ({ theme: e, ...t }) => /* @__PURE__ */ m(y, {
	theme: e || v,
	localeText: ee,
	quickFilterParser: (e) => {
		if (!e) return [];
		let t = /"([^"]+)"|(\S+)/g, n = [], r;
		for (; (r = t.exec(e)) !== null;) n.push(r[1] || r[2]);
		return n;
	},
	includeHiddenColumnsInQuickFilter: !1,
	suppressCellFocus: !0,
	enableCellTextSelection: !0,
	...t
}), B = /* @__PURE__ */ E(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), V = /* @__PURE__ */ E(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, F = !1;
		function I(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(e) || x(e) === l;
		}
		function L(e) {
			return x(e) === u;
		}
		function R(e) {
			return x(e) === c;
		}
		function ee(e) {
			return x(e) === s;
		}
		function z(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function B(e) {
			return x(e) === d;
		}
		function V(e) {
			return x(e) === i;
		}
		function H(e) {
			return x(e) === h;
		}
		function U(e) {
			return x(e) === m;
		}
		function W(e) {
			return x(e) === r;
		}
		function G(e) {
			return x(e) === o;
		}
		function K(e) {
			return x(e) === a;
		}
		function q(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = I, e.isConcurrentMode = L, e.isContextConsumer = R, e.isContextProvider = ee, e.isElement = z, e.isForwardRef = B, e.isFragment = V, e.isLazy = H, e.isMemo = U, e.isPortal = W, e.isProfiler = G, e.isStrictMode = K, e.isSuspense = q, e.isValidElementType = b, e.typeOf = x;
	})();
})), H = /* @__PURE__ */ E(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = B() : t.exports = V();
})), U = /* @__PURE__ */ E(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), W = /* @__PURE__ */ E(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), G = /* @__PURE__ */ E(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), K = /* @__PURE__ */ E(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = W(), i = {}, a = G();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), q = /* @__PURE__ */ E(((e, t) => {
	var n = H(), r = U(), i = W(), a = G(), o = K(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					} else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = F(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function P(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function F(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), te = /* @__PURE__ */ E(((e, t) => {
	var n = W();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), J = /* @__PURE__ */ E(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = H();
		t.exports = q()(n.isElement, !0);
	} else t.exports = te()();
})), ne = /* @__PURE__ */ E(((e, t) => {
	function n(e) {
		var t, r, i = "";
		if (typeof e == "string" || typeof e == "number") i += e;
		else if (typeof e == "object") if (Array.isArray(e)) {
			var a = e.length;
			for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (i && (i += " "), i += r);
		} else for (r in e) e[r] && (i && (i += " "), i += r);
		return i;
	}
	function r() {
		for (var e, t, r = 0, i = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = n(e)) && (i && (i += " "), i += t);
		return i;
	}
	t.exports = r, t.exports.clsx = r;
})), Y = /* @__PURE__ */ E(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dontSetMe = a, e.findInArray = t, e.int = i, e.isFunction = n, e.isNum = r;
	function t(e, t) {
		for (let n = 0, r = e.length; n < r; n++) if (t.apply(t, [
			e[n],
			n,
			e
		])) return e[n];
	}
	function n(e) {
		return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
	}
	function r(e) {
		return typeof e == "number" && !isNaN(e);
	}
	function i(e) {
		return parseInt(e, 10);
	}
	function a(e, t, n) {
		if (e[t]) return /* @__PURE__ */ Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
	}
})), re = /* @__PURE__ */ E(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.browserPrefixToKey = r, e.browserPrefixToStyle = i, e.default = void 0, e.getPrefix = n;
	var t = [
		"Moz",
		"Webkit",
		"O",
		"ms"
	];
	function n() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
		if (typeof window > "u") return "";
		let n = window.document?.documentElement?.style;
		if (!n || e in n) return "";
		for (let i = 0; i < t.length; i++) if (r(e, t[i]) in n) return t[i];
		return "";
	}
	function r(e, t) {
		return t ? `${t}${a(e)}` : e;
	}
	function i(e, t) {
		return t ? `-${t.toLowerCase()}-${e}` : e;
	}
	function a(e) {
		let t = "", n = !0;
		for (let r = 0; r < e.length; r++) n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
		return t;
	}
	e.default = n();
})), X = /* @__PURE__ */ E(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.addClassName = S, e.addEvent = s, e.addUserSelectStyles = y, e.createCSSTransform = m, e.createSVGTransform = h, e.getTouch = _, e.getTouchIdentifier = v, e.getTranslation = g, e.innerHeight = d, e.innerWidth = f, e.matchesSelector = a, e.matchesSelectorAndParentsTo = o, e.offsetXYFromParent = p, e.outerHeight = l, e.outerWidth = u, e.removeClassName = C, e.removeEvent = c, e.scheduleRemoveUserSelectStyles = b;
	var t = Y(), n = r(re());
	function r(e, t) {
		if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
		return (r = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var r, a, o = {
				__proto__: null,
				default: e
			};
			if (e === null || typeof e != "object" && typeof e != "function") return o;
			if (r = t ? i : n) {
				if (r.has(e)) return r.get(e);
				r.set(e, o);
			}
			for (let t in e) t !== "default" && {}.hasOwnProperty.call(e, t) && ((a = (r = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (a.get || a.set) ? r(o, t, a) : o[t] = e[t]);
			return o;
		})(e, t);
	}
	var i = "";
	function a(e, n) {
		return i ||= (0, t.findInArray)([
			"matches",
			"webkitMatchesSelector",
			"mozMatchesSelector",
			"msMatchesSelector",
			"oMatchesSelector"
		], function(n) {
			return (0, t.isFunction)(e[n]);
		}), (0, t.isFunction)(e[i]) ? e[i](n) : !1;
	}
	function o(e, t, n) {
		let r = e;
		do {
			if (a(r, t)) return !0;
			if (r === n) return !1;
			r = r.parentNode;
		} while (r);
		return !1;
	}
	function s(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		};
		e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
	}
	function c(e, t, n, r) {
		if (!e) return;
		let i = {
			capture: !0,
			...r
		};
		e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
	}
	function l(e) {
		let n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n += (0, t.int)(r.borderTopWidth), n += (0, t.int)(r.borderBottomWidth), n;
	}
	function u(e) {
		let n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n += (0, t.int)(r.borderLeftWidth), n += (0, t.int)(r.borderRightWidth), n;
	}
	function d(e) {
		let n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n -= (0, t.int)(r.paddingTop), n -= (0, t.int)(r.paddingBottom), n;
	}
	function f(e) {
		let n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
		return n -= (0, t.int)(r.paddingLeft), n -= (0, t.int)(r.paddingRight), n;
	}
	function p(e, t, n) {
		let r = t === t.ownerDocument.body ? {
			left: 0,
			top: 0
		} : t.getBoundingClientRect();
		return {
			x: (e.clientX + t.scrollLeft - r.left) / n,
			y: (e.clientY + t.scrollTop - r.top) / n
		};
	}
	function m(e, t) {
		let r = g(e, t, "px");
		return { [(0, n.browserPrefixToKey)("transform", n.default)]: r };
	}
	function h(e, t) {
		return g(e, t, "");
	}
	function g(e, t, n) {
		let { x: r, y: i } = e, a = `translate(${r}${n},${i}${n})`;
		return t && (a = `translate(${`${typeof t.x == "string" ? t.x : t.x + n}`}, ${`${typeof t.y == "string" ? t.y : t.y + n}`})` + a), a;
	}
	function _(e, n) {
		return e.targetTouches && (0, t.findInArray)(e.targetTouches, (e) => n === e.identifier) || e.changedTouches && (0, t.findInArray)(e.changedTouches, (e) => n === e.identifier);
	}
	function v(e) {
		if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	function y(e) {
		if (!e) return;
		let t = e.getElementById("react-draggable-style-el");
		t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", t.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e.getElementsByTagName("head")[0].appendChild(t)), e.body && S(e.body, "react-draggable-transparent-selection");
	}
	function b(e) {
		window.requestAnimationFrame ? window.requestAnimationFrame(() => {
			x(e);
		}) : x(e);
	}
	function x(e) {
		if (e) try {
			if (e.body && C(e.body, "react-draggable-transparent-selection"), e.selection) e.selection.empty();
			else {
				let t = (e.defaultView || window).getSelection();
				t && t.type !== "Caret" && t.removeAllRanges();
			}
		} catch {}
	}
	function S(e, t) {
		e.classList ? e.classList.add(t) : e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`)) || (e.className += ` ${t}`);
	}
	function C(e, t) {
		e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
	}
})), Z = /* @__PURE__ */ E(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.canDragX = a, e.canDragY = o, e.createCoreData = c, e.createDraggableData = l, e.getBoundPosition = r, e.getControlPosition = s, e.snapToGrid = i;
	var t = Y(), n = X();
	function r(e, r, i) {
		if (!e.props.bounds) return [r, i];
		let { bounds: a } = e.props;
		a = typeof a == "string" ? a : u(a);
		let o = d(e);
		if (typeof a == "string") {
			let { ownerDocument: e } = o, r = e.defaultView, i;
			if (i = a === "parent" ? o.parentNode : o.getRootNode().querySelector(a), !(i instanceof r.HTMLElement)) throw Error("Bounds selector \"" + a + "\" could not find an element.");
			let s = i, c = r.getComputedStyle(o), l = r.getComputedStyle(s);
			a = {
				left: -o.offsetLeft + (0, t.int)(l.paddingLeft) + (0, t.int)(c.marginLeft),
				top: -o.offsetTop + (0, t.int)(l.paddingTop) + (0, t.int)(c.marginTop),
				right: (0, n.innerWidth)(s) - (0, n.outerWidth)(o) - o.offsetLeft + (0, t.int)(l.paddingRight) - (0, t.int)(c.marginRight),
				bottom: (0, n.innerHeight)(s) - (0, n.outerHeight)(o) - o.offsetTop + (0, t.int)(l.paddingBottom) - (0, t.int)(c.marginBottom)
			};
		}
		return (0, t.isNum)(a.right) && (r = Math.min(r, a.right)), (0, t.isNum)(a.bottom) && (i = Math.min(i, a.bottom)), (0, t.isNum)(a.left) && (r = Math.max(r, a.left)), (0, t.isNum)(a.top) && (i = Math.max(i, a.top)), [r, i];
	}
	function i(e, t, n) {
		return [Math.round(t / e[0]) * e[0], Math.round(n / e[1]) * e[1]];
	}
	function a(e) {
		return e.props.axis === "both" || e.props.axis === "x";
	}
	function o(e) {
		return e.props.axis === "both" || e.props.axis === "y";
	}
	function s(e, t, r) {
		let i = typeof t == "number" ? (0, n.getTouch)(e, t) : null;
		if (typeof t == "number" && !i) return null;
		let a = d(r), o = r.props.offsetParent || a.offsetParent || a.ownerDocument.body;
		return (0, n.offsetXYFromParent)(i || e, o, r.props.scale);
	}
	function c(e, n, r) {
		let i = !(0, t.isNum)(e.lastX), a = d(e);
		return i ? {
			node: a,
			deltaX: 0,
			deltaY: 0,
			lastX: n,
			lastY: r,
			x: n,
			y: r
		} : {
			node: a,
			deltaX: n - e.lastX,
			deltaY: r - e.lastY,
			lastX: e.lastX,
			lastY: e.lastY,
			x: n,
			y: r
		};
	}
	function l(e, t) {
		let n = e.props.scale;
		return {
			node: t.node,
			x: e.state.x + t.deltaX / n,
			y: e.state.y + t.deltaY / n,
			deltaX: t.deltaX / n,
			deltaY: t.deltaY / n,
			lastX: e.state.x,
			lastY: e.state.y
		};
	}
	function u(e) {
		return {
			left: e.left,
			top: e.top,
			right: e.right,
			bottom: e.bottom
		};
	}
	function d(e) {
		let t = e.findDOMNode();
		if (!t) throw Error("<DraggableCore>: Unmounted during event!");
		return t;
	}
})), Q = /* @__PURE__ */ E(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t() {}
})), ie = /* @__PURE__ */ E(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
	var t = l(k("react")), n = c(J()), r = c(k("react-dom")), i = X(), a = Z(), o = Y(), s = c(Q());
	function c(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function l(e, t) {
		if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (l = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var i, a, o = {
				__proto__: null,
				default: e
			};
			if (e === null || typeof e != "object" && typeof e != "function") return o;
			if (i = t ? r : n) {
				if (i.has(e)) return i.get(e);
				i.set(e, o);
			}
			for (let t in e) t !== "default" && {}.hasOwnProperty.call(e, t) && ((a = (i = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (a.get || a.set) ? i(o, t, a) : o[t] = e[t]);
			return o;
		})(e, t);
	}
	function u(e, t, n) {
		return (t = d(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function d(e) {
		var t = f(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function f(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var p = {
		touch: {
			start: "touchstart",
			move: "touchmove",
			stop: "touchend"
		},
		mouse: {
			start: "mousedown",
			move: "mousemove",
			stop: "mouseup"
		}
	}, m = p.mouse, h = class extends t.Component {
		constructor() {
			super(...arguments), u(this, "dragging", !1), u(this, "lastX", NaN), u(this, "lastY", NaN), u(this, "touchIdentifier", null), u(this, "mounted", !1), u(this, "handleDragStart", (e) => {
				if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0) return !1;
				let t = this.findDOMNode();
				if (!t || !t.ownerDocument || !t.ownerDocument.body) throw Error("<DraggableCore> not mounted on DragStart!");
				let { ownerDocument: n } = t;
				if (this.props.disabled || !(e.target instanceof n.defaultView.Node) || this.props.handle && !(0, i.matchesSelectorAndParentsTo)(e.target, this.props.handle, t) || this.props.cancel && (0, i.matchesSelectorAndParentsTo)(e.target, this.props.cancel, t)) return;
				e.type === "touchstart" && !this.props.allowMobileScroll && e.preventDefault();
				let r = (0, i.getTouchIdentifier)(e);
				this.touchIdentifier = r;
				let o = (0, a.getControlPosition)(e, r, this);
				if (o == null) return;
				let { x: c, y: l } = o, u = (0, a.createCoreData)(this, c, l);
				(0, s.default)("DraggableCore: handleDragStart: %j", u), (0, s.default)("calling", this.props.onStart), !(this.props.onStart(e, u) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, i.addUserSelectStyles)(n), this.dragging = !0, this.lastX = c, this.lastY = l, (0, i.addEvent)(n, m.move, this.handleDrag), (0, i.addEvent)(n, m.stop, this.handleDragStop));
			}), u(this, "handleDrag", (e) => {
				let t = (0, a.getControlPosition)(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX, t = r - this.lastY;
					if ([e, t] = (0, a.snapToGrid)(this.props.grid, e, t), !e && !t) return;
					n = this.lastX + e, r = this.lastY + t;
				}
				let i = (0, a.createCoreData)(this, n, r);
				if ((0, s.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(e, i) === !1 || this.mounted === !1) {
					try {
						this.handleDragStop(new MouseEvent("mouseup"));
					} catch {
						let e = document.createEvent("MouseEvents");
						e.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(e);
					}
					return;
				}
				this.lastX = n, this.lastY = r;
			}), u(this, "handleDragStop", (e) => {
				if (!this.dragging) return;
				let t = (0, a.getControlPosition)(e, this.touchIdentifier, this);
				if (t == null) return;
				let { x: n, y: r } = t;
				if (Array.isArray(this.props.grid)) {
					let e = n - this.lastX || 0, t = r - this.lastY || 0;
					[e, t] = (0, a.snapToGrid)(this.props.grid, e, t), n = this.lastX + e, r = this.lastY + t;
				}
				let o = (0, a.createCoreData)(this, n, r);
				if (this.props.onStop(e, o) === !1 || this.mounted === !1) return !1;
				let c = this.findDOMNode();
				c && this.props.enableUserSelectHack && (0, i.scheduleRemoveUserSelectStyles)(c.ownerDocument), (0, s.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, s.default)("DraggableCore: Removing handlers"), (0, i.removeEvent)(c.ownerDocument, m.move, this.handleDrag), (0, i.removeEvent)(c.ownerDocument, m.stop, this.handleDragStop));
			}), u(this, "onMouseDown", (e) => (m = p.mouse, this.handleDragStart(e))), u(this, "onMouseUp", (e) => (m = p.mouse, this.handleDragStop(e))), u(this, "onTouchStart", (e) => (m = p.touch, this.handleDragStart(e))), u(this, "onTouchEnd", (e) => (m = p.touch, this.handleDragStop(e)));
		}
		componentDidMount() {
			this.mounted = !0;
			let e = this.findDOMNode();
			e && (0, i.addEvent)(e, p.touch.start, this.onTouchStart, { passive: !1 });
		}
		componentWillUnmount() {
			this.mounted = !1;
			let e = this.findDOMNode();
			if (e) {
				let { ownerDocument: t } = e;
				(0, i.removeEvent)(t, p.mouse.move, this.handleDrag), (0, i.removeEvent)(t, p.touch.move, this.handleDrag), (0, i.removeEvent)(t, p.mouse.stop, this.handleDragStop), (0, i.removeEvent)(t, p.touch.stop, this.handleDragStop), (0, i.removeEvent)(e, p.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && (0, i.scheduleRemoveUserSelectStyles)(t);
			}
		}
		findDOMNode() {
			return this.props?.nodeRef ? this.props?.nodeRef?.current : r.default.findDOMNode(this);
		}
		render() {
			return /* @__PURE__ */ t.cloneElement(t.Children.only(this.props.children), {
				onMouseDown: this.onMouseDown,
				onMouseUp: this.onMouseUp,
				onTouchEnd: this.onTouchEnd
			});
		}
	};
	e.default = h, u(h, "displayName", "DraggableCore"), u(h, "propTypes", {
		allowAnyClick: n.default.bool,
		allowMobileScroll: n.default.bool,
		children: n.default.node.isRequired,
		disabled: n.default.bool,
		enableUserSelectHack: n.default.bool,
		offsetParent: function(e, t) {
			if (e[t] && e[t].nodeType !== 1) throw Error("Draggable's offsetParent must be a DOM Node.");
		},
		grid: n.default.arrayOf(n.default.number),
		handle: n.default.string,
		cancel: n.default.string,
		nodeRef: n.default.object,
		onStart: n.default.func,
		onDrag: n.default.func,
		onStop: n.default.func,
		onMouseDown: n.default.func,
		scale: n.default.number,
		className: o.dontSetMe,
		style: o.dontSetMe,
		transform: o.dontSetMe
	}), u(h, "defaultProps", {
		allowAnyClick: !1,
		allowMobileScroll: !1,
		disabled: !1,
		enableUserSelectHack: !0,
		onStart: function() {},
		onDrag: function() {},
		onStop: function() {},
		onMouseDown: function() {},
		scale: 1
	});
})), ae = /* @__PURE__ */ E(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "DraggableCore", {
		enumerable: !0,
		get: function() {
			return c.default;
		}
	}), e.default = void 0;
	var t = d(k("react")), n = u(J()), r = u(k("react-dom")), i = ne(), a = X(), o = Z(), s = Y(), c = u(ie()), l = u(Q());
	function u(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function d(e, t) {
		if (typeof WeakMap == "function") var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (d = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var i, a, o = {
				__proto__: null,
				default: e
			};
			if (e === null || typeof e != "object" && typeof e != "function") return o;
			if (i = t ? r : n) {
				if (i.has(e)) return i.get(e);
				i.set(e, o);
			}
			for (let t in e) t !== "default" && {}.hasOwnProperty.call(e, t) && ((a = (i = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (a.get || a.set) ? i(o, t, a) : o[t] = e[t]);
			return o;
		})(e, t);
	}
	function f() {
		return f = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, f.apply(null, arguments);
	}
	function p(e, t, n) {
		return (t = m(t)) in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function m(e) {
		var t = h(e, "string");
		return typeof t == "symbol" ? t : t + "";
	}
	function h(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	var g = class extends t.Component {
		static getDerivedStateFromProps(e, t) {
			let { position: n } = e, { prevPropsPosition: r } = t;
			return n && (!r || n.x !== r.x || n.y !== r.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
				position: n,
				prevPropsPosition: r
			}), {
				x: n.x,
				y: n.y,
				prevPropsPosition: { ...n }
			}) : null;
		}
		constructor(e) {
			super(e), p(this, "onDragStart", (e, t) => {
				if ((0, l.default)("Draggable: onDragStart: %j", t), this.props.onStart(e, (0, o.createDraggableData)(this, t)) === !1) return !1;
				this.setState({
					dragging: !0,
					dragged: !0
				});
			}), p(this, "onDrag", (e, t) => {
				if (!this.state.dragging) return !1;
				(0, l.default)("Draggable: onDrag: %j", t);
				let n = (0, o.createDraggableData)(this, t), r = {
					x: n.x,
					y: n.y,
					slackX: 0,
					slackY: 0
				};
				if (this.props.bounds) {
					let { x: e, y: t } = r;
					r.x += this.state.slackX, r.y += this.state.slackY;
					let [i, a] = (0, o.getBoundPosition)(this, r.x, r.y);
					r.x = i, r.y = a, r.slackX = this.state.slackX + (e - r.x), r.slackY = this.state.slackY + (t - r.y), n.x = r.x, n.y = r.y, n.deltaX = r.x - this.state.x, n.deltaY = r.y - this.state.y;
				}
				if (this.props.onDrag(e, n) === !1) return !1;
				this.setState(r);
			}), p(this, "onDragStop", (e, t) => {
				if (!this.state.dragging || this.props.onStop(e, (0, o.createDraggableData)(this, t)) === !1) return !1;
				(0, l.default)("Draggable: onDragStop: %j", t);
				let n = {
					dragging: !1,
					slackX: 0,
					slackY: 0
				};
				if (this.props.position) {
					let { x: e, y: t } = this.props.position;
					n.x = e, n.y = t;
				}
				this.setState(n);
			}), this.state = {
				dragging: !1,
				dragged: !1,
				x: e.position ? e.position.x : e.defaultPosition.x,
				y: e.position ? e.position.y : e.defaultPosition.y,
				prevPropsPosition: { ...e.position },
				slackX: 0,
				slackY: 0,
				isElementSVG: !1
			}, e.position && !(e.onDrag || e.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
		}
		componentDidMount() {
			window.SVGElement !== void 0 && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
		}
		componentWillUnmount() {
			this.state.dragging && this.setState({ dragging: !1 });
		}
		findDOMNode() {
			return this.props?.nodeRef?.current ?? r.default.findDOMNode(this);
		}
		render() {
			let { axis: e, bounds: n, children: r, defaultPosition: s, defaultClassName: l, defaultClassNameDragging: u, defaultClassNameDragged: d, position: p, positionOffset: m, scale: h, ...g } = this.props, _ = {}, v = null, y = !p || this.state.dragging, b = p || s, x = {
				x: (0, o.canDragX)(this) && y ? this.state.x : b.x,
				y: (0, o.canDragY)(this) && y ? this.state.y : b.y
			};
			this.state.isElementSVG ? v = (0, a.createSVGTransform)(x, m) : _ = (0, a.createCSSTransform)(x, m);
			let S = (0, i.clsx)(r.props.className || "", l, {
				[u]: this.state.dragging,
				[d]: this.state.dragged
			});
			return /* @__PURE__ */ t.createElement(c.default, f({}, g, {
				onStart: this.onDragStart,
				onDrag: this.onDrag,
				onStop: this.onDragStop
			}), /* @__PURE__ */ t.cloneElement(t.Children.only(r), {
				className: S,
				style: {
					...r.props.style,
					..._
				},
				transform: v
			}));
		}
	};
	e.default = g, p(g, "displayName", "Draggable"), p(g, "propTypes", {
		...c.default.propTypes,
		axis: n.default.oneOf([
			"both",
			"x",
			"y",
			"none"
		]),
		bounds: n.default.oneOfType([
			n.default.shape({
				left: n.default.number,
				right: n.default.number,
				top: n.default.number,
				bottom: n.default.number
			}),
			n.default.string,
			n.default.oneOf([!1])
		]),
		defaultClassName: n.default.string,
		defaultClassNameDragging: n.default.string,
		defaultClassNameDragged: n.default.string,
		defaultPosition: n.default.shape({
			x: n.default.number,
			y: n.default.number
		}),
		positionOffset: n.default.shape({
			x: n.default.oneOfType([n.default.number, n.default.string]),
			y: n.default.oneOfType([n.default.number, n.default.string])
		}),
		position: n.default.shape({
			x: n.default.number,
			y: n.default.number
		}),
		className: s.dontSetMe,
		style: s.dontSetMe,
		transform: s.dontSetMe
	}), p(g, "defaultProps", {
		...c.default.defaultProps,
		axis: "both",
		bounds: !1,
		defaultClassName: "react-draggable",
		defaultClassNameDragging: "react-draggable-dragging",
		defaultClassNameDragged: "react-draggable-dragged",
		defaultPosition: {
			x: 0,
			y: 0
		},
		scale: 1
	});
})), $ = /* @__PURE__ */ E(((e, t) => {
	var { default: n, DraggableCore: r } = ae();
	t.exports = n, t.exports.default = n, t.exports.DraggableCore = r;
})), oe = /* @__PURE__ */ E(((e) => {
	e.__esModule = !0, e.cloneElement = c;
	var t = n(k("react"));
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function r(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function i(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? r(Object(n), !0).forEach(function(t) {
				a(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function a(e, t, n) {
		return t = o(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function o(e) {
		var t = s(e, "string");
		return typeof t == "symbol" ? t : String(t);
	}
	function s(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function c(e, n) {
		return n.style && e.props.style && (n.style = i(i({}, e.props.style), n.style)), n.className && e.props.className && (n.className = e.props.className + " " + n.className), /* @__PURE__ */ t.default.cloneElement(e, n);
	}
})), se = /* @__PURE__ */ E(((e) => {
	e.__esModule = !0, e.resizableProps = void 0;
	var t = n(J());
	$();
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.resizableProps = {
		axis: t.default.oneOf([
			"both",
			"x",
			"y",
			"none"
		]),
		className: t.default.string,
		children: t.default.element.isRequired,
		draggableOpts: t.default.shape({
			allowAnyClick: t.default.bool,
			cancel: t.default.string,
			children: t.default.node,
			disabled: t.default.bool,
			enableUserSelectHack: t.default.bool,
			offsetParent: t.default.node,
			grid: t.default.arrayOf(t.default.number),
			handle: t.default.string,
			nodeRef: t.default.object,
			onStart: t.default.func,
			onDrag: t.default.func,
			onStop: t.default.func,
			onMouseDown: t.default.func,
			scale: t.default.number
		}),
		height: function() {
			var e = [...arguments], n = e[0];
			if (n.axis === "both" || n.axis === "y") {
				var r;
				return (r = t.default.number).isRequired.apply(r, e);
			}
			return t.default.number.apply(t.default, e);
		},
		handle: t.default.oneOfType([t.default.node, t.default.func]),
		handleSize: t.default.arrayOf(t.default.number),
		lockAspectRatio: t.default.bool,
		maxConstraints: t.default.arrayOf(t.default.number),
		minConstraints: t.default.arrayOf(t.default.number),
		onResizeStop: t.default.func,
		onResizeStart: t.default.func,
		onResize: t.default.func,
		resizeHandles: t.default.arrayOf(t.default.oneOf([
			"s",
			"w",
			"e",
			"n",
			"sw",
			"nw",
			"se",
			"ne"
		])),
		transformScale: t.default.number,
		width: function() {
			var e = [...arguments], n = e[0];
			if (n.axis === "both" || n.axis === "x") {
				var r;
				return (r = t.default.number).isRequired.apply(r, e);
			}
			return t.default.number.apply(t.default, e);
		}
	};
})), ce = /* @__PURE__ */ E(((e) => {
	e.__esModule = !0, e.default = void 0;
	var t = s(k("react")), n = $(), r = oe(), i = se(), a = [
		"children",
		"className",
		"draggableOpts",
		"width",
		"height",
		"handle",
		"handleSize",
		"lockAspectRatio",
		"axis",
		"minConstraints",
		"maxConstraints",
		"onResize",
		"onResizeStop",
		"onResizeStart",
		"resizeHandles",
		"transformScale"
	];
	function o(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (o = function(e) {
			return e ? n : t;
		})(e);
	}
	function s(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = o(t);
		if (n && n.has(e)) return n.get(e);
		var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
			var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
			s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a];
		}
		return r.default = e, n && n.set(e, r), r;
	}
	function c() {
		return c = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, c.apply(this, arguments);
	}
	function l(e, t) {
		if (e == null) return {};
		var n = {}, r = Object.keys(e), i, a;
		for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	function u(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? u(Object(n), !0).forEach(function(t) {
				f(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function f(e, t, n) {
		return t = p(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function p(e) {
		var t = m(e, "string");
		return typeof t == "symbol" ? t : String(t);
	}
	function m(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function h(e, t) {
		e.prototype = Object.create(t.prototype), e.prototype.constructor = e, g(e, t);
	}
	function g(e, t) {
		return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
			return e.__proto__ = t, e;
		}, g(e, t);
	}
	var _ = /* @__PURE__ */ function(e) {
		h(i, e);
		function i() {
			var t, n = [...arguments];
			return t = e.call.apply(e, [this].concat(n)) || this, t.handleRefs = {}, t.lastHandleRect = null, t.slack = null, t;
		}
		var o = i.prototype;
		return o.componentWillUnmount = function() {
			this.resetData();
		}, o.resetData = function() {
			this.lastHandleRect = this.slack = null;
		}, o.runConstraints = function(e, t) {
			var n = this.props, r = n.minConstraints, i = n.maxConstraints, a = n.lockAspectRatio;
			if (!r && !i && !a) return [e, t];
			if (a) {
				var o = this.props.width / this.props.height, s = e - this.props.width, c = t - this.props.height;
				Math.abs(s) > Math.abs(c * o) ? t = e / o : e = t * o;
			}
			var l = e, u = t, d = this.slack || [0, 0], f = d[0], p = d[1];
			return e += f, t += p, r && (e = Math.max(r[0], e), t = Math.max(r[1], t)), i && (e = Math.min(i[0], e), t = Math.min(i[1], t)), this.slack = [f + (l - e), p + (u - t)], [e, t];
		}, o.resizeHandler = function(e, t) {
			var n = this;
			return function(r, i) {
				var a = i.node, o = i.deltaX, s = i.deltaY;
				e === "onResizeStart" && n.resetData();
				var c = (n.props.axis === "both" || n.props.axis === "x") && t !== "n" && t !== "s", l = (n.props.axis === "both" || n.props.axis === "y") && t !== "e" && t !== "w";
				if (!(!c && !l)) {
					var u = t[0], d = t[t.length - 1], f = a.getBoundingClientRect();
					if (n.lastHandleRect != null) {
						if (d === "w") {
							var p = f.left - n.lastHandleRect.left;
							o += p;
						}
						if (u === "n") {
							var m = f.top - n.lastHandleRect.top;
							s += m;
						}
					}
					n.lastHandleRect = f, d === "w" && (o = -o), u === "n" && (s = -s);
					var h = n.props.width + (c ? o / n.props.transformScale : 0), g = n.props.height + (l ? s / n.props.transformScale : 0), _ = n.runConstraints(h, g);
					h = _[0], g = _[1];
					var v = h !== n.props.width || g !== n.props.height, y = typeof n.props[e] == "function" ? n.props[e] : null;
					y && !(e === "onResize" && !v) && (r.persist == null || r.persist(), y(r, {
						node: a,
						size: {
							width: h,
							height: g
						},
						handle: t
					})), e === "onResizeStop" && n.resetData();
				}
			};
		}, o.renderResizeHandle = function(e, n) {
			var r = this.props.handle;
			if (!r) return /* @__PURE__ */ t.createElement("span", {
				className: "react-resizable-handle react-resizable-handle-" + e,
				ref: n
			});
			if (typeof r == "function") return r(e, n);
			var i = typeof r.type == "string", a = d({ ref: n }, i ? {} : { handleAxis: e });
			return /* @__PURE__ */ t.cloneElement(r, a);
		}, o.render = function() {
			var e = this, i = this.props, o = i.children, s = i.className, u = i.draggableOpts;
			i.width, i.height, i.handle, i.handleSize, i.lockAspectRatio, i.axis, i.minConstraints, i.maxConstraints, i.onResize, i.onResizeStop, i.onResizeStart;
			var f = i.resizeHandles;
			i.transformScale;
			var p = l(i, a);
			return (0, r.cloneElement)(o, d(d({}, p), {}, {
				className: (s ? s + " " : "") + "react-resizable",
				children: [].concat(o.props.children, f.map(function(r) {
					var i = e.handleRefs[r] ?? (e.handleRefs[r] = /* @__PURE__ */ t.createRef());
					return /* @__PURE__ */ t.createElement(n.DraggableCore, c({}, u, {
						nodeRef: i,
						key: "resizableHandle-" + r,
						onStop: e.resizeHandler("onResizeStop", r),
						onStart: e.resizeHandler("onResizeStart", r),
						onDrag: e.resizeHandler("onResize", r)
					}), e.renderResizeHandle(r, i));
				}))
			}));
		}, i;
	}(t.Component);
	e.default = _, _.propTypes = i.resizableProps, _.defaultProps = {
		axis: "both",
		handleSize: [20, 20],
		lockAspectRatio: !1,
		minConstraints: [20, 20],
		maxConstraints: [Infinity, Infinity],
		resizeHandles: ["se"],
		transformScale: 1
	};
})), le = /* @__PURE__ */ E(((e) => {
	e.__esModule = !0, e.default = void 0;
	var t = c(k("react")), n = o(J()), r = o(ce()), i = se(), a = [
		"handle",
		"handleSize",
		"onResize",
		"onResizeStart",
		"onResizeStop",
		"draggableOpts",
		"minConstraints",
		"maxConstraints",
		"lockAspectRatio",
		"axis",
		"width",
		"height",
		"resizeHandles",
		"style",
		"transformScale"
	];
	function o(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function s(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (s = function(e) {
			return e ? n : t;
		})(e);
	}
	function c(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var n = s(t);
		if (n && n.has(e)) return n.get(e);
		var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
			var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
			o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a];
		}
		return r.default = e, n && n.set(e, r), r;
	}
	function l() {
		return l = Object.assign ? Object.assign.bind() : function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}, l.apply(this, arguments);
	}
	function u(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})), n.push.apply(n, r);
		}
		return n;
	}
	function d(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] == null ? {} : arguments[t];
			t % 2 ? u(Object(n), !0).forEach(function(t) {
				f(e, t, n[t]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
				Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
			});
		}
		return e;
	}
	function f(e, t, n) {
		return t = p(t), t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	function p(e) {
		var t = m(e, "string");
		return typeof t == "symbol" ? t : String(t);
	}
	function m(e, t) {
		if (typeof e != "object" || !e) return e;
		var n = e[Symbol.toPrimitive];
		if (n !== void 0) {
			var r = n.call(e, t || "default");
			if (typeof r != "object") return r;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (t === "string" ? String : Number)(e);
	}
	function h(e, t) {
		if (e == null) return {};
		var n = {}, r = Object.keys(e), i, a;
		for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n;
	}
	function g(e, t) {
		e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _(e, t);
	}
	function _(e, t) {
		return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
			return e.__proto__ = t, e;
		}, _(e, t);
	}
	var v = /* @__PURE__ */ function(e) {
		g(n, e);
		function n() {
			var t, n = [...arguments];
			return t = e.call.apply(e, [this].concat(n)) || this, t.state = {
				width: t.props.width,
				height: t.props.height,
				propsWidth: t.props.width,
				propsHeight: t.props.height
			}, t.onResize = function(e, n) {
				var r = n.size;
				t.props.onResize ? (e.persist == null || e.persist(), t.setState(r, function() {
					return t.props.onResize && t.props.onResize(e, n);
				})) : t.setState(r);
			}, t;
		}
		n.getDerivedStateFromProps = function(e, t) {
			return t.propsWidth !== e.width || t.propsHeight !== e.height ? {
				width: e.width,
				height: e.height,
				propsWidth: e.width,
				propsHeight: e.height
			} : null;
		};
		var i = n.prototype;
		return i.render = function() {
			var e = this.props, n = e.handle, i = e.handleSize;
			e.onResize;
			var o = e.onResizeStart, s = e.onResizeStop, c = e.draggableOpts, u = e.minConstraints, f = e.maxConstraints, p = e.lockAspectRatio, m = e.axis;
			e.width, e.height;
			var g = e.resizeHandles, _ = e.style, v = e.transformScale, y = h(e, a);
			return /* @__PURE__ */ t.createElement(r.default, {
				axis: m,
				draggableOpts: c,
				handle: n,
				handleSize: i,
				height: this.state.height,
				lockAspectRatio: p,
				maxConstraints: f,
				minConstraints: u,
				onResizeStart: o,
				onResize: this.onResize,
				onResizeStop: s,
				resizeHandles: g,
				transformScale: v,
				width: this.state.width
			}, /* @__PURE__ */ t.createElement("div", l({}, y, { style: d(d({}, _), {}, {
				width: this.state.width + "px",
				height: this.state.height + "px"
			}) })));
		}, n;
	}(t.Component);
	e.default = v, v.propTypes = d(d({}, i.resizableProps), {}, { children: n.default.element });
})), ue = /* @__PURE__ */ E(((e, t) => {
	t.exports = function() {
		throw Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
	}, t.exports.Resizable = ce().default, t.exports.ResizableBox = le().default;
})), de = /* @__PURE__ */ O($(), 1), fe = ue(), pe = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, o = t = e(r, i, a);
	return a;
}, me = (e) => e ? pe(e) : pe, he = (e) => e;
function ge(e, t = he) {
	let n = l.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
	return l.useDebugValue(n), n;
}
var _e = (e) => {
	let t = me(e), n = (e) => ge(t, e);
	return Object.assign(n, t), n;
}, ve = (e) => e ? _e(e) : _e, ye = { maxZIndex: 2 }, be = ve((e, t) => ({
	...ye,
	setMaxZIndex: (t) => e({ maxZIndex: t })
})), xe = 24, Se = 106, Ce = ({ initialSize: e = {
	width: 500,
	height: 500
}, title: t, children: n, isDraggable: r = !0, isResizable: i = !1, open: o, ...s }) => {
	let [c, l] = p(!0), [u, g] = p({
		left: 0,
		top: 0,
		bottom: 0,
		right: 0
	}), [_, v] = p(e), [y, b] = p({
		x: 0,
		y: 0
	}), x = f(null), { maxZIndex: S, setMaxZIndex: C } = be(), [w, T] = p(S), E = (e, t) => {
		T(S + 1), C(S + 1);
		let { clientWidth: n, clientHeight: r } = window.document.documentElement, i = x.current?.getBoundingClientRect();
		i && g({
			left: -i.left + t.x,
			right: n - (i.right - t.x),
			top: -i.top + t.y,
			bottom: r - (i.bottom - t.y)
		});
	}, D = (e, { size: t }) => {
		if (x.current) {
			let e = x.current.getBoundingClientRect(), n = window.innerWidth - e.left, r = window.innerHeight - e.top;
			v({
				width: Math.min(t.width, n),
				height: Math.min(t.height, r)
			});
		}
	}, O = (e, t) => {
		b({
			x: t.x,
			y: t.y
		});
	};
	return d(() => {
		if (o) {
			v(e), b({
				x: (window.innerWidth - e.width) / 2,
				y: (window.innerHeight - e.height) / 2
			});
			let t = S + 1;
			T(t), C(t);
		}
	}, [o, e]), /* @__PURE__ */ h(a, {
		styles: { body: { padding: i ? 0 : xe } },
		title: r ? /* @__PURE__ */ m("div", {
			style: {
				width: "100%",
				cursor: "move"
			},
			onMouseOver: () => c && l(!1),
			onMouseOut: () => l(!0),
			children: t
		}) : t,
		zIndex: w,
		...r && { modalRender: (e) => /* @__PURE__ */ m(de.default, {
			disabled: c,
			bounds: u,
			nodeRef: x,
			position: y,
			onStart: (e, t) => E(e, t),
			onDrag: O,
			children: /* @__PURE__ */ m("div", {
				style: i ? {
					width: _?.width,
					height: _?.height,
					display: "inline-block",
					position: "absolute"
				} : { position: "absolute" },
				ref: x,
				children: e
			})
		}) },
		mask: !1,
		open: o,
		width: i ? _?.width : e.width,
		style: {
			top: 0,
			paddingBottom: 0,
			margin: r ? 0 : "auto"
		},
		wrapClassName: r ? "no-scroll-wrapper" : "",
		centered: !1,
		...s,
		children: [!i && n, i && /* @__PURE__ */ m(fe.Resizable, {
			minConstraints: [e?.width || 200, Se],
			width: _?.width,
			height: _?.height,
			onResize: D,
			style: {
				position: "static",
				overflowX: "hidden"
			},
			children: /* @__PURE__ */ m("div", {
				className: "h-full w-full",
				style: { padding: `${xe}px` },
				children: n
			})
		})]
	});
};
//#endregion
export { z as AgGridReactBase, Ce as BaseModal, A as Button, R as Checkbox, P as DatePicker, j as Input, F as InputNumber, I as RadioGroup, M as Select, L as Spin, N as TextArea };

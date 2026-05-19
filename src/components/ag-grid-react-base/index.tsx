import {
  ModuleRegistry,
  themeQuartz,
  AllCommunityModule,
} from "ag-grid-community";
import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { AG_GRID_LOCALE_RU } from "./ag-grid-locale.ru";
// Регистрируем модули один раз здесь
// ModuleRegistry.registerModules([AllEnterpriseModule]);

ModuleRegistry.registerModules([AllCommunityModule]);

// Типизируем пропсы: наследуем все стандартные пропсы AG Grid
interface AgGridReactBaseProps<TData = any> extends AgGridReactProps<TData> {}

export const AgGridReactBase = <TData,>({
  theme,
  ...props
}: AgGridReactBaseProps<TData>) => {
  // 2. Парсер быстрого фильтра (вынесен в константу, чтобы не пересоздавать)
  const quickFilterParser = (searchValue: string) => {
    if (!searchValue) return [];
    const regex = /"([^"]+)"|(\S+)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(searchValue)) !== null) {
      matches.push(match[1] || match[2]);
    }
    return matches;
  };

  return (
    <AgGridReact<TData>
      // Свойства по умолчанию (Project Standards)
      theme={theme || themeQuartz}
      localeText={AG_GRID_LOCALE_RU}
      quickFilterParser={quickFilterParser}
      includeHiddenColumnsInQuickFilter={false}
      // domLayout="normal" // это дефолтное значение
      // suppressRowHoverHighlight={true}
      suppressCellFocus={true} // Разрешить выделение ячейки
      enableCellTextSelection={true} // Разрешить выделение текста в ячейках
      // Прокидываем все остальные пропсы (rowData, columnDefs, events и т.д.)
      {...props}
    />
  );
};

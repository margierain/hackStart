// Taken from: https://www.geekality.net/2018/11/21/javascript-in-browser-export-to-csv/
type GetValue<T> = <I extends T>(item: I) => any;
type FieldName<T> = keyof T;

export interface Columns<T> {
  [s: string]: FieldName<T> | GetValue<T>;
}

const COLUMN_SEPARATOR = ',';
const ROW_SEPARATOR = '\r\n';
const UNICODE_BOM = '\uFEFF';

const wrapValue = (value: string) => `"${value}"`;
const escapeValue = (value: string) => (value || '').replace(/"/, '""');

const toHeaderRow = <T,>(columns: Columns<T>) =>
  Object.keys(columns)
    .map(escapeValue)
    .map(wrapValue)
    .join(COLUMN_SEPARATOR);

const toRow = <T,>(columns: Columns<T>, item: T) =>
  Object.values(columns)
    .map(field => (typeof field === 'function' ? field(item) : item[field]))
    .map(String)
    .map(escapeValue)
    .map(wrapValue)
    .join(COLUMN_SEPARATOR);

export const exportToCsv = function<T>(data: T[], filename: string): void {
  const rows = [];

  const columns = Object.keys(data[0]).reduce(
    (cols, key) => ({ ...cols, [key]: key }),
    {}
  );

  rows.push(toHeaderRow(columns));

  for (const item of data) {
    rows.push(toRow(columns, item));
  }

  const csv = UNICODE_BOM + rows.join(ROW_SEPARATOR);
  const uri = `data:text/csv;charset=utf-8;header=present,${encodeURIComponent(
    csv
  )}`;

  const link = document.createElement('a');
  link.setAttribute('href', uri);
  link.setAttribute('download', filename);
  link.addEventListener(
    'click',
    () => link && link.parentNode?.removeChild(link)
  );
  document.body.appendChild(link);

  link.click();
};

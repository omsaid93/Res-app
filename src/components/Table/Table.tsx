import React from 'react';

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onSort?: (key: keyof T) => void;
  sortKey?: keyof T;
  sortDirection?: 'asc' | 'desc';
  className?: string;
  emptyMessage?: string;
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
  onSort,
  sortKey,
  sortDirection,
  className = '',
  emptyMessage = 'No data available',
}: TableProps<T>) => {
  const handleSort = (column: Column<T>) => {
    if (column.sortable && onSort) {
      onSort(column.key);
    }
  };

  const renderCell = (item: T, column: Column<T>) => {
    const value = item[column.key];
    
    if (column.render) {
      return column.render(value, item);
    }
    
    return value;
  };

  if (data.length === 0) {
    return (
      <div className={`table-empty ${className}`}>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`table-container ${className}`}>
      <table className="table">
        <thead className="table-header">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`table-cell table-cell--header ${
                  column.sortable ? 'table-cell--sortable' : ''
                }`}
                onClick={() => handleSort(column)}
              >
                {column.header}
                {column.sortable && sortKey === column.key && (
                  <span className="table-sort-indicator">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((item, index) => (
            <tr key={index} className="table-row">
              {columns.map((column) => (
                <td key={String(column.key)} className="table-cell">
                  {renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

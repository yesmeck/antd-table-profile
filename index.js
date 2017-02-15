import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';

const tables = [];

for (let i = 0; i < 100; ++i) {
  const columns = [];
  const data = [];
  for (let j = 0; j < 50; ++j) {
    columns.push({
      title: `title${j}`,
      dataIndex: `key${j}`,
    });
    for (let k = 0; k < 20; ++k) {
      data[k] = data[k] || { key: k };
      data[k][`key${j}`] = `data${j}`;
    }
  }
  tables.push({ columns, data });
}

function App() {
  return (
    <div style={{ margin: 100 }}>
      {tables.map((table, index) => (
        <Table key={index} columns={table.columns} dataSource={table.data} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

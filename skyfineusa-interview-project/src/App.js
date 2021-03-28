import './App.css';
import React from 'react';
import { TableWithBrowserPagination, Column, Badge } from 'react-rainbow-components';
//Max Harper
function App() {

  let states = [
    {
      "rank": "1",
      "state": "California",
      "july": "39,512,223",
      "percent": "11.91%"
    },
    {
      "rank": "2",
      "state": "Texas",
      "july": "28,995,881",
      "percent": "8.74%"
    },
    {
      "rank": "3",
      "state": "Florida",
      "july": "21,477,737",
      "percent": "6.47%"
    },
    {
      "rank": "4",
      "state": "New York",
      "july": "19,453,561",
      "percent": "5.86%"
    },
    {
      "rank": "5",
      "state": "Illinois",
      "july": "12,671,821",
      "percent": "3.86%"
    },
    {
      "rank": "6",
      "state": "Pennsylvania",
      "july": "12,801,989",
      "percent": "3.82%"
    },
    {
      "rank": "7",
      "state": "Ohio",
      "july": "11,689,100",
      "percent": "3.52%"
    },
    {
      "rank": "8",
      "state": "Georgia",
      "july": "10,617,423",
      "percent": "3.20%"
    },
    {
      "rank": "9",
      "state": "North Carolina",
      "july": "10,488,084",
      "percent": "3.16%"
    },
    {
      "rank": "10",
      "state": "Michigan",
      "july": "9,986,857",
      "percent": "3.01%"
    },
    {
      "rank": "11",
      "state": "New Jersey",
      "july": "8,882,190",
      "percent": "2.68%"
    },
    {
      "rank": "12",
      "state": "Virginia",
      "july": "8,535,519",
      "percent": "2.57%"
    },
    {
      "rank": "13",
      "state": "Washington",
      "july": "7,614,893",
      "percent": "2.29%"
    },
    {
      "rank": "14",
      "state": "Arizona",
      "july": "7,278,717",
      "percent": "2.19%"
    },
    {
      "rank": "15",
      "state": "Massachusetts",
      "july": "6,949,503",
      "percent": "2.09%"
    },
    {
      "rank": "16",
      "state": "Tennessee",
      "july": "6,833,174",
      "percent": "2.06%"
    },
    {
      "rank": "17",
      "state": "Indiana",
      "july": "6,732,219",
      "percent": "2.03%"
    },
    {
      "rank": "18",
      "state": "Missouri",
      "july": "6,137,428",
      "percent": "1.85%"
    },
    {
      "rank": "19",
      "state": "Maryland",
      "july": "6,045,680",
      "percent": "1.82%"
    },
    {
      "rank": "20",
      "state": "Wisconsin",
      "july": "5,822,434",
      "percent": "1.75%"
    },

  ]

  
  return (
    <div className="App">
      <header className="App-header">
        <TableWithBrowserPagination pageSize={10} data={states} keyField="id">
            <Column header="Rank" field="rank" />
            <Column header="State" field="state"  />
            <Column header="July 2019 Estimate" field="july" />
            <Column header="Percent of Total" field="percent" />
        </TableWithBrowserPagination>
      </header>
    </div>
  );
}

export default App;

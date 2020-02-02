const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fetch = require('node-fetch');

const csvWriter = createCsvWriter({
  path: './daily/dailyPrices.csv',
  header: [
    {id: 'date', title: 'date'},
    {id: 'price', title: 'price'},
  ]
});

// fetch('http://api.eia.gov/series/?api_key=f58749d9d62d82f4e2cf77fe83ae97ce&series_id=NG.RNGWHHD.M')
fetch('http://api.eia.gov/series/?api_key=f58749d9d62d82f4e2cf77fe83ae97ce&series_id=NG.RNGWHHD.D')
  .then(response => response.json())
  .then(data => data.series[0].data)
  .then(data => data.map(item => ({ date: `${item[0].slice(0,4)}-${item[0].slice(4,6)}-${item[0].slice(6,8)}`, price: item[1] })))
  .then(data => createCSV(data))

function createCSV(data) {
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}

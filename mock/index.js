const path = require('path');
const DataHub = require('macaca-datahub')
const defaultDatahub = new DataHub();
const datahubConfig = {
  port: 5678,
  hostname: '127.0.0.1',
  store: path.join(__dirname, 'data'),
  proxy: {
    '/api': {
      hub: 'test', // hub project name
    },
  },
  showBoard: true,
};
defaultDatahub.startServer(datahubConfig).then(() => {
  console.log('datahub ready');
});
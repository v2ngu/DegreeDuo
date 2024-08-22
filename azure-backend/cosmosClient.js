const { CosmosClient } = require('@azure/cosmos');

const client = new CosmosClient({
  endpoint: process.env.COSMOS_DB_URI,  // Set this in Azure Function's settings
  key: process.env.COSMOS_DB_KEY,       // Set this in Azure Function's settings
});

const database = client.database('MyDatabase');
const container = database.container('MyContainer');

async function createItem(item) {
  const { resource: createdItem } = await container.items.create(item);
  return createdItem;
}

async function getItems() {
  const { resources: items } = await container.items.readAll().fetchAll();
  return items;
}

module.exports = { createItem, getItems };

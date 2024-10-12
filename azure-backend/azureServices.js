// azureServices.js

const { BlobServiceClient } = require('@azure/storage-blob');
const { CosmosClient } = require('@azure/cosmos');

// Azure Blob Storage
const blobServiceClient = BlobServiceClient.fromConnectionString('<your_blob_connection_string>');

async function uploadBlob(containerName, blobName, data) {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  await blockBlobClient.upload(data, data.length);
}

// Azure Cosmos DB
const cosmosClient = new CosmosClient({
  endpoint: '<your_cosmos_endpoint>',
  key: '<your_cosmos_key>',
});

const databaseId = '<your_database_id>';
const containerId = '<your_container_id>';
const database = cosmosClient.database(databaseId);
const container = database.container(containerId);

async function createItem(item) {
  const { resource: createdItem } = await container.items.create(item);
  return createdItem;
}

module.exports = { uploadBlob, createItem };

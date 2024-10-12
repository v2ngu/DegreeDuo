const express = require('express');
const { uploadBlob, createItem } = require('./azureServices'); // Import the functions

const app = express();
const port = 3000;

app.use(express.json());

// Example endpoint to upload a blob
app.post('/upload', async (req, res) => {
  const { containerName, blobName, data } = req.body;
  try {
    await uploadBlob(containerName, blobName, data);
    res.send('Blob uploaded successfully');
  } catch (error) {
    res.status(500).send('Error uploading blob');
  }
});

// Example endpoint to create an item in Cosmos DB
app.post('/create-item', async (req, res) => {
  const item = req.body;
  try {
    const createdItem = await createItem(item);
    res.json(createdItem);
  } catch (error) {
    res.status(500).send('Error creating item');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const { createItem, getItems } = require('./cosmosClient');

module.exports = async function (context, req) {
  if (req.method === 'POST') {
    const item = req.body;
    try {
      const createdItem = await createItem(item);
      context.res = {
        status: 201,
        body: createdItem
      };
    } catch (error) {
      context.res = {
        status: 500,
        body: 'Error creating item: ' + error.message
      };
    }
  } else if (req.method === 'GET') {
    try {
      const items = await getItems();
      context.res = {
        status: 200,
        body: items
      };
    } catch (error) {
      context.res = {
        status: 500,
        body: 'Error fetching items: ' + error.message
      };
    }
  }
};

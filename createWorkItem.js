const axios = require('axios');
require('dotenv').config()

// Define your DevRev API endpoint and token
const apiEndpoint = 'https://api.devrev.ai/works.create';
const apiToken = process.env.PAT;

// Define the payload for the work item
const payload = {
  type: 'issue',
  applies_to_part: 'PROD-1',
  owned_by: ['don:identity:dvrv-in-1:devo/2okdMmZBbb:devu/1'],
  title: 'Creation of issue'
};

// Set up the headers
const headers = {
  Authorization: `Bearer ${apiToken}`,
  'Content-Type': 'application/json'
};

// Make the request to create the work item
axios.post(apiEndpoint, payload, { headers })
  .then(response => {
    console.log('Work item created successfully.');
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Failed to create work item.');
    console.error('Error:', error.response ? error.response.data : error.message);
  });

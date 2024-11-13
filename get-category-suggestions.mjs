import fetch from 'node-fetch';

const CLIENT_ID = 'NebulaAI-Test1-PRD-ab1427ba0-2aa2f75e'; // Your client ID
const CLIENT_SECRET = 'PRD-b1427ba04ca4-26d0-43c8-b39a-62e1'; // Your client secret
let EBAY_ACCESS_TOKEN = 'v^1.1#i^1#I^3#p^3#r^0#f^0#t^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'; // Replace with initial access token
let EBAY_REFRESH_TOKEN = 'v^1.1#i^1#p^3#f^0#r^1#I^3#t^Ul4xMF82OjVGMkIzMzI3RThBRkRGRTBDQUU4MDdDM0I5RDVEN0QwXzBfMSNFXjI2MA=='; // Replace with initial refresh token

// Define the workflow object with a title for testing
const workflow = {
  title: "Desk", // Replace this with the title you want to test with
  categoryId: "" 
};

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const response = await fetch('https://api.ebay.com/identity/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: EBAY_REFRESH_TOKEN
      })
    });

    if (!response.ok) throw new Error(`Failed to refresh access token: ${response.statusText}`);
    
    const data = await response.json();
    EBAY_ACCESS_TOKEN = data.access_token; // Update the access token
    console.log('Access token refreshed successfully:', EBAY_ACCESS_TOKEN);

    if (data.refresh_token) {
      EBAY_REFRESH_TOKEN = data.refresh_token; // Update refresh token if a new one is provided
      console.log('Refresh token updated:', EBAY_REFRESH_TOKEN);
    }
  } catch (error) {
    console.error('Error refreshing access token:', error);
  }
}

// Helper function to check if an error response indicates an invalid token
function isInvalidTokenError(response, data) {
  return (
    response.status === 401 &&
    data.errors &&
    data.errors.some(error => error.errorId === 1001 && error.domain === "OAuth")
  );
}

// Function to fetch category tree ID with retry mechanism for expired token
async function getCategoryTreeId(retry = true) {
  try {
    const response = await fetch('https://api.ebay.com/commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=EBAY_GB', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${EBAY_ACCESS_TOKEN}` }
    });

    const data = await response.json();

    if (!response.ok) {
      if (isInvalidTokenError(response, data) && retry) { // Token expired
        await refreshAccessToken();
        return await getCategoryTreeId(false); // Retry with the new token
      }
      throw new Error(`Failed to fetch category tree ID: ${data.errors?.[0]?.longMessage || response.statusText}`);
    }

    return data.categoryTreeId;
  } catch (error) {
    console.error('Error fetching category tree ID:', error);
    return null;
  }
}

// Function to fetch category suggestions with retry for expired token
async function getCategorySuggestions() {
  try {
    // Fetch the category tree ID, which is required to get category suggestions
    const categoryTreeId = await getCategoryTreeId();
    if (!categoryTreeId) throw new Error('Category tree ID is null or undefined.');

    // Make the request to get category suggestions based on the workflow title
    const response = await fetch(`https://api.ebay.com/commerce/taxonomy/v1/category_tree/${categoryTreeId}/get_category_suggestions?q=${encodeURIComponent(workflow.title)}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${EBAY_ACCESS_TOKEN}` }
    });

    const data = await response.json();

    // Check if the response is unsuccessful
    if (!response.ok) {
      if (isInvalidTokenError(response, data)) { // If token expired
        await refreshAccessToken();
        return await getCategorySuggestions(); // Retry with the new token
      }
      throw new Error(`Failed to fetch category suggestions: ${data.errors?.[0]?.longMessage || response.statusText}`);
    }

    // Extract the first category suggestion's ID if available
    const categoryId = data.categorySuggestions?.[0]?.category?.categoryId;

    if (categoryId) {
      workflow.categoryId = categoryId; // Set the found categoryId to workflow
      console.log(`Suggested Category ID set in workflow: ${workflow.categoryId}`);
    } else {
      console.warn('No category suggestion found.');
      workflow.categoryId = ""; // Set to empty string to represent "no category"
    }

  } catch (error) {
    console.error('Error fetching category suggestions:', error);
  }
}

// Execute the function to get category suggestions
getCategorySuggestions();

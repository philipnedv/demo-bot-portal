import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';

let accessToken = 'v^1.1#i^1#I^3#p^3#r^0#f^0#t^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';
let refreshToken = 'v^1.1#i^1#p^3#f^0#r^1#I^3#t^Ul4xMF82OjVGMkIzMzI3RThBRkRGRTBDQUU4MDdDM0I5RDVEN0QwXzBfMSNFXjI2MA==';
const clientId = 'NebulaAI-Test1-PRD-ab1427ba0-2aa2f75e';
const clientSecret = 'PRD-b1427ba04ca4-26d0-43c8-b39a-62e1';

async function refreshAccessToken() {
    const tokenUrl = 'https://api.ebay.com/identity/v1/oauth2/token';
    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
    try {
        const response = await axios.post(tokenUrl, 'grant_type=refresh_token&refresh_token=' + refreshToken, {
            headers: {
                'Authorization': `Basic ${authHeader}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        accessToken = response.data.access_token;
        console.log("Access token refreshed:", accessToken);
    } catch (error) {
        console.error("Error refreshing access token:", error.message);
        throw error;
    }
}

async function mainProcess() {
    try {
        const decodedToken = jsonwebtoken.decode(accessToken);
        
        if (!decodedToken || !decodedToken.exp || decodedToken.exp * 1000 < Date.now()) {
            console.log("Access token is expired or invalid. Refreshing...");
            await refreshAccessToken();
        }
        
        await createInventoryItem();
        const offerId = await createOffer();
        if (offerId) {
            await publishOffer(offerId);
        }
    } catch (error) {
        console.log("Process failed:", error.message);
    }
}

async function createInventoryItem() {
    const url = 'https://api.ebay.com/sell/inventory/v1/inventory_item/test-5';
    const payload = {
        availability: {
            pickupAtLocationAvailability: [
                {
                    availabilityType: "IN_STOCK",
                    fulfillmentTime: { unit: "DAY", value: 2 },
                    merchantLocationKey: "warehouse1",
                    quantity: 10
                }
            ],
            shipToLocationAvailability: {
                availabilityDistributions: [
                    {
                        fulfillmentTime: { unit: "BUSINESS_DAY", value: 5 },
                        merchantLocationKey: "warehouse1",
                        quantity: 50
                    }
                ],
                quantity: 50
            }
        },
        condition: "USED_ACCEPTABLE",
        conditionDescription: "Brand new desk, never used.",
        conditionDescriptors: [
            {
                additionalInfo: "Includes assembly instructions",
                name: "Assembly",
                values: ["Required"]
            }
        ],
        packageWeightAndSize: {
            dimensions: {
                height: 30,
                length: 50,
                unit: "INCH",
                width: 20
            },
            shippingIrregular: false,
            weight: { unit: "POUND", value: 45 }
        },
        product: {
            aspects: {
                Color: ["Black"],
                Material: ["Wood"],
                Type: ["Office Desk"],
                "Item Height": ["30 Inches"],
                "Item Length": ["50 Inches"],
                "Item Width": ["20 Inches"],
                Colour: ["Black"]
            },
            brand: "Unbranded",
            mpn: "Does not apply",
            description: "A stylish and sturdy office desk, perfect for home or workspaces.",
            imageUrls: [
                "https://m.media-amazon.com/images/I/71pmhidcAzL._AC_UF894,1000_QL80_.jpg"
            ],
            title: "Office Desk - Black Wood"
        }
    };

    try {
        console.log("Creating inventory item with payload:", JSON.stringify(payload, null, 2));
        const response = await axios.put(url, JSON.stringify(payload), {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Content-Language': 'en-GB'
            }
        });
        console.log("Inventory item created:", response.data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            console.error("Error creating inventory item:", JSON.stringify(error.response.data, null, 2));
        } else {
            console.error("Error creating inventory item:", error.message);
        }
        throw error;
    }
}


async function createOffer() {
    const url = 'https://api.ebay.com/sell/inventory/v1/offer';
    const payload = {
        availableQuantity: 10,
        categoryId: "88057", // Adjust to the desired category
        format: "FIXED_PRICE",
        hideBuyerDetails: false,
        includeCatalogProductDetails: false,
        listingDescription: "A high-quality desk with storage space, perfect for home or office use.",
        listingDuration: "GTC",
        listingPolicies: {
            bestOfferTerms: {
                autoAcceptPrice: { currency: "GBP", value: "100.00" },
                autoDeclinePrice: { currency: "GBP", value: "90.00" },
                bestOfferEnabled: true
            },
            eBayPlusIfEligible: false,
            fulfillmentPolicyId: "247921315012",
            paymentPolicyId: "247921319012",
            returnPolicyId: "247921321012"
        },
        listingStartDate: "2024-11-13T23:30:00Z",  // Optional start date
        marketplaceId: "EBAY_GB",
        merchantLocationKey: "warehouse1",
        pricingSummary: {
            price: { currency: "GBP", value: "120.00" }
        },
        quantityLimitPerBuyer: 1,
        sku: "test-5", // Adjust SKU as needed
        storeCategoryNames: ["Office Furniture"]
    };

    try {
        console.log("Creating offer with payload:", JSON.stringify(payload, null, 2));
        const response = await axios.post(url, JSON.stringify(payload), {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Content-Language': 'en-GB'  // Explicitly set to 'en-GB'
            }
        });
        const offerId = response.data.offerId;
        console.log("Offer created with ID:", offerId);
        return offerId;
    } catch (error) {
        if (error.response && error.response.data) {
            console.error("Error creating offer:", JSON.stringify(error.response.data, null, 2));
        } else {
            console.error("Error creating offer:", error.message);
        }
        throw error;
    }
}




async function publishOffer(offerId) {
    const url = `https://api.ebay.com/sell/inventory/v1/offer/${offerId}/publish`;

    try {
        const response = await axios.post(url, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Content-Language': 'en-GB'
            }
        });
        console.log("Offer published:", response.data);
    } catch (error) {
        if (error.response && error.response.data) {
            console.error("Error publishing offer:", JSON.stringify(error.response.data, null, 2));
        } else {
            console.error("Error publishing offer:", error.message);
        }
        throw error;
    }
}

// Start the main process
mainProcess();

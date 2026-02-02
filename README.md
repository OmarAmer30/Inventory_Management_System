# 📦 Inventory Management System

A professional RESTful API built with Node.js and Express that enables complete inventory management with full CRUD operations, stock management, and sales tracking capabilities.

## 🎯 Project Overview

This API provides a complete solution for managing product inventory with real-time stock updates and comprehensive sales tracking. Built with clean architecture following MVC principles and professional error handling standards.

### ✨ Key Features

- **CRUD Operations** - Create, read, update, and delete products
- **Stock Management** - Add quantities, track inventory levels
- **Sales Tracking** - Record and monitor all product sales
- **Input Validation** - Comprehensive request validation with meaningful error messages
- **Professional Error Handling** - Consistent HTTP status codes and response formats
- **Type Safety** - Full TypeScript support for better code reliability

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: JSON (File-based)
- **Testing**: Postman
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
inventory-management-system/
├── build/                          # Compiled TypeScript output
│   ├── controllers/
│   │   ├── product.ts              # Product business logic
│   │   └── sales.ts                # Sales business logic
│   ├── models/
│   │   ├── product.ts              # Product data model
│   │   └── sales.ts                # Sale data model
│   ├── routes/
│   │   └── product.ts              # API route definitions
│   ├── utils/
│   │   └── fileHandler.ts          # File I/O operations
│   └── app.ts                       # Application entry point
├── src/                             # Compiled JavaScript output
├── data/
│   ├── product.json                # Product database
│   └── sales.json                  # Sales database
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation
```

## 📂 Module Documentation

### Data Models

#### Product Model (`build/models/product.ts`)
Manages product inventory with full CRUD operations.

**Properties:**
```json
{
  "id": 1,
  "title": "Milk",
  "price": 15,
  "qty": 356,
  "description": "1L whole milk"
}
```

**Key Methods:**
- `fetchProducts(id?)` - Retrieve products (all or by ID)
- `addProducts(newProducts[])` - Add new products with auto-increment IDs
- `updateProduct(id, updatedData)` - Modify product details
- `deleteProduct(id)` - Remove product from inventory
- `addQuantity(id, quantity)` - Increase stock levels

---

#### Sale Model (`build/models/sales.ts`)
Tracks all product sales with pricing information and automatic inventory updates.

**Properties:**
```json
{
  "id": 1,
  "productId": 2,
  "qty": 5,
  "price": 75
}
```

**Key Methods:**
- `sellProduct(productId, qty, productPrice)` - Record a sale and update inventory

---

### Controllers

#### Product Controller (`build/controllers/product.ts`)
Handles all product-related business logic and HTTP requests with comprehensive validation.

**Methods:**
- `getProducts()` - Fetch all products
- `getProductById()` - Get specific product with validation
- `addProducts()` - Create new products with batch processing
- `updateProduct()` - Modify existing product
- `deleteProduct()` - Remove product from inventory
- `addQuantity()` - Increase product stock

---

#### Sales Controller (`build/controllers/sales.ts`)
Manages sales operations and sales data retrieval with business logic validation.

**Methods:**
- `sellProduct()` - Process a product sale with inventory checks
- `getAllSales()` - Retrieve all sales records
- `getSalesByProduct()` - Get sales history for specific product

---

### Utilities

#### File Handler (`build/utils/fileHandler.ts`)
Manages all file I/O operations for JSON persistence with error handling.

**Methods:**
- `read(filePath)` - Read and parse JSON file
- `write(filePath, data)` - Write data to JSON file with formatting
- Error handling for file operations

---

## 📊 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/products` | Fetch all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create new product(s) |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |
| POST | `/products/:id/add` | Add quantity to product |
| POST | `/products/:id/sell` | Sell product (record sale) |
| GET | `/sales` | Get all sales records |
| GET | `/sales/product/:id` | Get sales for product |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd inventory-management-system

# Install dependencies
npm install

# Compile TypeScript
npm run build

# Start server
npm start
```

---

## 🧪 Testing with Postman

### Test Scenarios

**1. Create Products**
```
POST /products
Content-Type: application/json

[
  {
    "title": "Milk",
    "price": 15,
    "qty": 100,
    "description": "1L whole milk"
  }
]
```

**2. Sell Product**
```
POST /products/1/sell
Content-Type: application/json

{
  "qty": 5
}
```

**3. Add Inventory**
```
POST /products/1/add
Content-Type: application/json

{
  "qty": 20
}
```

**4. Update Product**
```
PUT /products/1
Content-Type: application/json

{
  "price": 16,
  "description": "1L organic milk"
}
```

**5. View Sales**
```
GET /sales/product/1
```

---

## ✅ Validation Rules

- **Product ID**: Must be a valid positive integer
- **Quantity**: Must be greater than 0
- **Price**: Must be a positive number
- **Title**: Required field (cannot be null)
- **Sale Quantity**: Cannot exceed available inventory
- **Update Request**: At least one field required for modification

---

## 🔒 Error Handling

The API includes comprehensive error handling with meaningful messages:

- **Validation errors** (400) - Invalid input data with field descriptions
- **Not found errors** (404) - Resource doesn't exist
- **Conflict errors** (409) - Business logic violations (e.g., insufficient stock)
- **Server errors** (500) - Unexpected failures with server-side logging
- **Consistent error format** - User-friendly, actionable descriptions

---

## 🏗️ Architecture Highlights

- **MVC Pattern** - Clean separation of concerns (Models, Controllers, Routes)
- **Type Safety** - Full TypeScript support for code reliability
- **Modular Design** - Reusable components and utilities
- **Professional Error Handling** - Meaningful HTTP status codes
- **Input Validation** - Comprehensive request validation on all endpoints
- **Logging** - Error tracking for debugging and monitoring

---

## ✨ Professional Standards Implemented

✅ RESTful API design principles  
✅ Consistent response formats across all endpoints  
✅ Proper HTTP status codes for different scenarios  
✅ Input validation on all endpoints  
✅ Error handling with meaningful messages  
✅ Separation of concerns (MVC pattern)  
✅ Type-safe TypeScript code  
✅ Clean, maintainable code structure  
✅ Automatic inventory management with sales tracking  

---

## 📝 Project Statistics

- **Models**: 2 (Product, Sale)
- **Controllers**: 2 (Product, Sales)
- **Routes**: 9 API endpoints
- **Data Files**: 2 (product.json, sales.json)
- **Utilities**: File handler for JSON persistence

---

## 👤 Author

@OmarAamer30

---

## 🤝 Support

For issues or questions, please open an issue on GitHub or contact me.

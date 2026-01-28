🎯 Project Goal



Build a RESTful Inventory Management API that allows managing products and stock using Node.js + Express, with JSON file storage (simple \& fast).



🛠 Tech \& Tools



Node.js

Express

JavaScript

TypeScript

JSON (as database)

Postman (for testing)

Git \& GitHub



📁 Folder \& File Structure

inventory-system/

│

├── data/

│   └── products.json

│

├── routes/

│   └── products.routes

│

├── controllers/

│   └── products.controller

│

├── models/

│   └── products.model

│

├── utils/

│   └── fileHandler

│

├── app

├── package.json

└── README.md



📂 File Responsibilities (IMPORTANT)

1️⃣ data/products.json



Acts as your database



Starts as:



\[]





Stores all products



2️⃣ app



App entry point



Responsibilities:



Create Express app



Use express.json()



Connect routes



Start server




3️⃣ routes/products.routes



Defines API routes only



No business logic here



Calls controller functions



Routes :



Method	Route

GET	/products

GET	/products/:id

POST	/products

PUT	/products/:id

DELETE	/products/:id

POST	/products/:id/add

POST	/products/:id/sell



4️⃣ controllers/products.controller.js



All business logic here



Responsibilities:



Read products



Validate input



Update stock



Send responses



Must handle:



Missing fields



Invalid IDs



Prevent negative stock



Correct HTTP status codes



5️⃣ utils/fileHandler.js



Handles file operations



Responsibilities:



Read JSON file



Write JSON file



Why this file exists:



Cleaner code



Reusable functions



Professional structure



📦 Product Object Structure



Every product must look like this:



{

  "id": 1,

  "title": "Milk",

  "price": 15,

  "description": "1L whole milk"

}
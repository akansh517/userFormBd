# User Form Submission Project
This project is a simple web application that allows users to submit their information (name, email, phone number, and terms acceptance) via a form. The submitted data is validated and stored in a MongoDB database.

# Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) installed on your machine.
- MongoDB account and a cluster set up. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution.

## Installation

Clone the repository:
   ```https://github.com/akansh517/userFormBd.git```
   
   ```cd userFormBd```

Install the dependencies:
   ```npm install```
   
Create a .env file in the root of the project and add the following variables:

     PORT=5000
     DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/formDB?retryWrites=true&w=majority
Note-``` Replace <username> and <password> with your MongoDB credentials.```

# Usage
To run the project, use the following command:
```npm run dev```
This will start the server on the specified port. You can access the application at http://localhost:5000.

**Step 1: Fork or Clone the Repository**
- Start by forking or cloning the MyTodo repository to your local machine.

**Step 2: Open in Visual Studio Code**
- Open the MyTodo project in Visual Studio Code (VS Code) for easy code management and editing.

**Step 3: Install Dependencies for the Client**
- In the VS Code terminal, navigate to the "client" folder.
- Run `npm install` to install all project dependencies related to the client-side.

**Step 4: Install Dependencies for the Server**
- Open a new terminal tab in VS Code.
- Navigate to the "server" folder.
- Run `npm install` to install the necessary server-side dependencies.

**Step 5: Start the Application**
- In the client terminal, run `npm start` to launch the client-side of the application.
- In the server terminal, run `nodemon index.js` to start the server.

**Accessing the MyTodo Web App**
- Once both client and server are running, the MyTodo web app will open automatically in your default web browser.

**Database Setup**
- No need to set up a MongoDB database separately. The project includes a `.env` file with MongoDB credentials for your convenience.

**User Data Management**
- For user login and signup data, local storage is used initially. Please note that data is device-specific.
- Future updates may connect user data to the database, allowing access from anywhere.

**Focus on Operations**
- The project prioritizes functionality and operations, simplifying task management without an extensive UI.

**Features**
- Due dates are highlighted in red, providing clear visibility for approaching deadlines.
- Items with two days or less until the due date are displayed in red; otherwise, they are shown in green.
- The project incorporates Redux for efficient data management and real-time updates on the frontend.

**Deployment**
- You can access the deployed MyTodo web app at [MyTodo on Render](https://mytodo-dea3.onrender.com/).

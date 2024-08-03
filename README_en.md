# Caption-Aid

Caption-Aid is an intelligent image captioning tool that leverages the multimodal capabilities of the Gemini Pro 1.5 model. This service allows users to upload or paste images and receive automatically generated captions.

## Features

- Image upload functionality
- Clipboard paste support for images
- Automatic caption generation using Gemini Pro 1.5
- Text-to-speech feature for generated captions

## Prerequisites

- Node.js installed on your local machine
- A Gemini API key (for accessing the Gemini Pro 1.5 model)

## Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/elymas/caption-aid.git
   cd caption-aid
   ```

2. Install the dependencies for both the backend and frontend:
   ```
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up the environment variables:
   - Navigate to the `backend` folder
   - Rename `.env_sample` to `.env`
   - Open the `.env` file and add your Gemini API key:
     ```
     API_KEY=your_api_key_here
     ```

## Running the Application

To run Caption-Aid, you need to start both the backend server and the frontend application.

1. Start the backend server:
   ```
   cd backend
   node server.js
   ```

2. In a new terminal window, start the frontend application:
   ```
   cd frontend
   npx http-server ./
   ```

3. Open your web browser and navigate to `http://localhost:8080` (or the address provided by http-server).

## Usage

1. Once the application is running, you can upload an image using the "Upload Image" button or paste an image directly into the designated area.
2. After an image is loaded, click the "Submit" button to generate a caption.
3. The generated caption will appear in the right panel.
4. You can use the "Hear Caption" button to listen to the generated caption using text-to-speech.

## Troubleshooting

- If you encounter any issues with caption generation, ensure that your Gemini API key is correctly set in the `.env` file.
- Make sure both the backend server and frontend application are running simultaneously.

## Contact

If you have any questions or feedback, please contact at [elymas@gmail.com].
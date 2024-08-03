const express = require("express")
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const {GoogleGenerativeAI} = require("@google/generative-ai");
const multer = require("multer");
const mime = require("mime-types");
const path = require("path");
const fs = require("fs");


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Configure Gemini API
const googleGenAI = new GoogleGenerativeAI(process.env.API_KEY);

const geminiProvisionModel = googleGenAI.getGenerativeModel({
    model: "gemini-1.5-flash"
})

//Configure upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

app.get("/", (req, res) => {
    res.send("Welcome to the Gemini API");
})

app.post("/generate-caption", upload.single("file"), async (req, res) => {
    
    const filePath = req.file.path;
    const mimeType = mime.lookup(filePath);

    const imagePath = {
        inlineData: {
            data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
            mimeType: mimeType
        }
    }

    const images = [imagePath];

    const prompt = "Write an appropriate caption in korean for this image to help visually-impaires users.";

    const request = await geminiProvisionModel.generateContent([
        prompt, ...images
    ])

    const response = await request.response;

    caption = response.text();

    res.send(caption);
})

const PORT = process.env.PORT || 1330;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
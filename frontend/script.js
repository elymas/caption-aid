let caption;

document.getElementById("imageInput").addEventListener("change", handleImageSelect);
document.getElementById("submitBtn").addEventListener("click", handleSubmit);
document.getElementById("speakBtn").addEventListener("click", () => speakText(caption));

// Paste functionality
document.getElementById("pasteArea").addEventListener("click", () => navigator.clipboard.read().then(handleClipboardItems));
document.addEventListener("paste", handlePaste);

function handleImageSelect(event) {
    const file = event.target.files[0];
    if (file) {
        displayImagePreview(file);
    }
}

function handleSubmit() {
    const imageInput = document.getElementById("imageInput");
    if (imageInput.files.length > 0) {
        getCaptionForImage(imageInput.files[0]);
    }
}

function handleClipboardItems(clipboardItems) {
    for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
            if (type.startsWith("image/")) {
                clipboardItem.getType(type).then(blob => {
                    displayImagePreview(blob);
                    getCaptionForImage(blob);
                });
            }
        }
    }
}

function handlePaste(event) {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
            const blob = items[i].getAsFile();
            displayImagePreview(blob);
            getCaptionForImage(blob);
        }
    }
}

function displayImagePreview(blob) {
    const imagePreview = document.getElementById("imagePreview");
    imagePreview.src = URL.createObjectURL(blob);
}

async function getCaptionForImage(imageFile) {
    let formData = new FormData();
    formData.append("file", imageFile);

    try {
        displayCaption("Processing Caption Generation...");

        let response = await axios.post("http://localhost:1330/generate-caption", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (response.data) {
            caption = response.data;
            displayCaption(caption);
        }
    } catch (error) {
        displayCaption(error.toString());
    }
}

function displayCaption(captionText) {
    const imageCaption = document.getElementById("imageCaption");
    imageCaption.textContent = captionText;
}

function speakText(text) {
    if ("speechSynthesis" in window) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "ko-KR";
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Sorry, this browser does not support text-to-speech");
    }
}
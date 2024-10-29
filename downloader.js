document.getElementById('downloadBtn').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const messageDiv = document.getElementById('message');

    if (videoUrl) {
        fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: videoUrl })
        })
        .then(response => response.json())
        .then(data => {
            messageDiv.innerText = data.message;
        })
        .catch(error => {
            messageDiv.innerText = 'Error downloading video.';
        });
    } else {
        messageDiv.innerText = 'Please enter a video URL.';
    }
});

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/download', async (req, res) => {
    const { url } = req.body;
    
    try {
        const response = await axios.get(url, { responseType: 'stream' });
        const filePath = path.join(__dirname, 'downloads', 'video.mp4');
        
        response.data.pipe(fs.createWriteStream(filePath));
        
        response.data.on('end', () => {
            res.json({ message: 'Video downloaded successfully!' });
        });
        
        response.data.on('error', () => {
            res.status(500).json({ message: 'Error downloading video.' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error downloading video.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

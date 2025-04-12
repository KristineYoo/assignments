const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'src', 'data.json');

// Endpoint to update homework status
app.post('/updateHomeworkStatus', (req, res) => {
    const { id, newStatus } = req.body;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Failed to read data.json", err);
            return res.status(500).send('Failed to read data.json');
        }

        let homeworkData = JSON.parse(data);
        const itemIndex = homeworkData.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            homeworkData[itemIndex].status = newStatus;

            fs.writeFile(dataFilePath, JSON.stringify(homeworkData, null, 2), (err) => {
                if (err) {
                    console.error("Failed to write to data.json", err);
                    return res.status(500).send('Failed to write to data.json');
                }
                console.log(`Homework item with id ${id} updated to status ${newStatus}`);
                res.status(200).send('Homework status updated successfully');
            });
        } else {
            res.status(404).send(`Homework item with id ${id} not found`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

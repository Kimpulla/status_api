const express = require('express');
const status_api = express();
const PORT = 8080;

let currentStatus = 'ok';

// Log message when the server starts
status_api.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
);

// Helper function to get the next status
const getNextStatus = (status) => {
    const statuses = ['ok', 'inspect', 'warning'];
    const currentIndex = statuses.indexOf(status);
    return statuses[(currentIndex + 1) % statuses.length];
};

// Function to update the status every 30 seconds
setInterval(() => {
    currentStatus = getNextStatus(currentStatus);
    console.log(`Status updated to: ${currentStatus}`);
}, 10000);

// Route to get current status
status_api.get('/status', (req, res) => {
    let description;
    switch (currentStatus) {
        case 'ok':
            description = 'All good';
            break;
        case 'inspect':
            description = 'Inspection recommended';
            break;
        case 'warning':
            description = 'Action required!';
            break;
        default:
            description = 'Unknown status';
    }
    res.status(200).send({
        status: currentStatus,
        description: description
    });
});

// Default route for invalid endpoints
status_api.use((req, res) => {
    res.status(404).send({
        status: 'error',
        description: 'Endpoint not found'
    });
});

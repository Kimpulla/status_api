# Status API

Status API is a simple Express server that provides status information. The status changes every 10 seconds between "ok", "inspect", and "warning".

## Getting Started

Follow these instructions to get the API up and running on your local machine.


### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Kimpulla/status_api.git
    cd status_api
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

### Configuration

To ensure the API works correctly with the Status Notifier App, update the IP address in the app's `App.js` file to match your computer's local IP address.

1. **Find your local IP address:**

    - On **Windows**, open Command Prompt and run:
      ```sh
      ipconfig
      ```
      Look for the `IPv4 Address` under your active network connection.

    - On **macOS/Linux**, open Terminal and run:
      ```sh
      ifconfig
      ```
      Look for the IP address under your active network connection (usually something like `192.168.x.x`).

2. **Update the IP address in the Status Monitor App:**

    Open `App.js` in the Status Monitor App and replace `http://localhost:8080/status` with `http://<your-ip-address>:8080/status`.

### Running the Application

1. **Start the API server:**

    ```sh
    node .
    ```

    The API server should now be running on `http://<your-ip-address>:8080/status`.

### API Endpoints

- **GET /status**: Returns the current status and description.
  - Example response:
    ```json
    {
      "status": "ok",
      "description": "All good"
    }
    ```

- **Invalid endpoints**: Returns a 404 error.
  - Example response:
    ```json
    {
      "status": "error",
      "description": "Endpoint not found"
    }
    ```

## Built With

- [Express](https://expressjs.com/)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

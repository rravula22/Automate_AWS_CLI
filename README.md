# AWS Access Key Retrieval

This is a simple Express.js application that retrieves AWS access keys by automating the login process on the AWS IAM (Identity and Access Management) console. The application uses Puppeteer, a headless browser automation library, to interact with the AWS console and fetch the access keys.

## Prerequisites

Before running the application, make sure you have the following:

- Node.js and npm installed on your machine.
- Valid AWS IAM credentials with sufficient permissions to access the IAM console.

## Installation

1. Clone the repository and navigate to the project folder.

2. Install the required dependencies using npm:

```bash
npm install
```

3. Set up your AWS IAM credentials as environment variables:

Create a `.env` file in the project root directory and add your AWS IAM credentials:

```plaintext
AWS_USERNAME=your_aws_username
AWS_PASSWORD=your_aws_password
```

Replace `your_aws_username` and `your_aws_password` with your actual AWS IAM username and password.

## Usage

1. Start the Express server:

```bash
node app.js
```

2. The server will start running on port 3000. Open your browser and navigate to `http://localhost:3000`.

3. The application will automate the AWS IAM login process and retrieve your access keys.

4. The access key and secret access key will be displayed in the console.

**Note**: Be cautious while running the application, as it deals with sensitive credentials. Ensure that you are running the application in a secure environment and not exposing your credentials unintentionally.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the terms of the license.

## Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Puppeteer](https://pptr.dev/) - Headless browser automation library by Google Chrome team.
- [dotenv](https://www.npmjs.com/package/dotenv) - Load environment variables from a `.env` file into `process.env`.

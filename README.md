# NFT Smart Contract (Bonus Task)

This repository contains a complete ERC-721 NFT Smart Contract implementation with a comprehensive automated test suite and Docker configuration.

## Features & Design

* **ERC-721 Compliance:** Implements the standard ERC-721 interface with metadata support (`ERC721URIStorage`).
* **Access Control:** Uses OpenZeppelin's `Ownable` pattern. Only the contract owner can mint tokens.
* **Max Supply:** Enforces a hard cap of **100 tokens** to prevent inflation.
* **Security:** Includes checks for zero addresses, max supply limits, and unauthorized access.
* **Dockerized:** Fully containerized environment for reproducible testing.

## Project Structure

* `contracts/NftCollection.sol`: The main Smart Contract.
* `test/NftCollection.test.js`: Automated tests for minting, transfers, and errors.
* `Dockerfile`: Configuration to build the isolated test environment.
* `.dockerignore`: Optimization to exclude local dependencies from the build.

## How to Run (Docker) - **Recommended**

The project includes a Dockerfile to run tests in an isolated environment, ensuring it works on any machine.

1. **Build the Docker Image:**

    ```bash
    docker build -t nft-contract .
    ```

2. **Run the Test Suite:**

    ```bash
    docker run nft-contract
    ```

**Expected Output:**
The container will compile the contracts and execute the test suite using Hardhat. You should see **5 passing tests** covering deployment, minting logic, and transfers.

## How to Run (Local Node.js)

If you prefer running the tests directly on your machine:

1. **Install Dependencies:**

    ```bash
    npm install
    ```

2. **Run Tests:**

    ```bash
    npx hardhat test
    ```

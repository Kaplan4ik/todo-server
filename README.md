# Todo Server

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)

---

## Dependencies

- [Docker](https://www.docker.com/)

---

## Introduction

Welcome to todo-backend, a backend service developed with NestJS. This project provides a powerful API for managing to-do lists, featuring secure authentication and data storage. User authentication is handled via Auth0, ensuring that only authenticated users can interact with their personal to-do lists.

The application connects to a PostgreSQL database, allowing users to create, read, update, and delete their to-do tasks with persistent storage. Each user’s to-do list is securely stored and isolated, ensuring that users can only access their own data. The backend is built using modern NestJS practices, providing scalability, maintainability, and performance.

---

## Installation

- Clone the repository.
- Install the dependencies with `npm install`
- Create a `.env` file in the root of the project ( ideally by copying `.env.example` ).

> [!WARNING]
> Without the required environment variables, the project will not run. Please ensure that you have the necessary values in your `.env` file.

- Install husky hooks with `npm prepare`
---

## Usage

- Start docker-compose for access to db with `docker-compose up`
- Start the development server with `npm start`

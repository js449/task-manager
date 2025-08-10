## Task Manager

A simple task management web app that lets you add, toggle, and delete tasks. Tasks are saved in the browser's Local Storage with simulated asynchronous delay to practice async JavaScript patterns.

## Features

Add new tasks

Toggle task completion status

Delete tasks

Persistent storage in Local Storage

Asynchronous simulation with Promises and async/await

## Technologies Used

HTML, CSS, JavaScript (ES6+)

Modules with import/export

Local Storage API

Async/await and Promises

## Project Structure

index.html — main HTML file

styles.css — styles for the app

js/ — JavaScript modules

app.js — main app logic

storage.js — localStorage abstraction with async simulation

ui.js — UI rendering and event handlers

## How to Run Locally

Clone or download the repo

Open index.html in a modern browser (Chrome, Firefox, Edge)

Use the app

## Note

To use ES6 modules (type="module" in script), you might need to serve the files using a local HTTP server rather than opening the file directly. For example:

npx http-server

or use VS Code's Live Server extension.

## Deployment on Netlify

Create a Netlify account if you don’t have one.

Connect your GitHub repository or drag-and-drop your project folder.

For a simple static site, no build command is needed.

Netlify will assign you a URL where your app will be live.

Update your repo whenever you want to deploy new changes — Netlify will auto-deploy.

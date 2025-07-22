Laptop Setup for Repo and using CMS, live-server etc...
Objective
To synchronize the laptop's local development environment with the authoritative version in the Git repository, and to codify the setup process as a reusable blueprint for future projects (e.g., the client's website).

Laptop Synchronization Checklist
When you move to your laptop, execute the following steps in order from the terminal.

Navigate to the Project Directory:

cd ~/Dev/MartinAshworth.com

Pull the Latest Blueprint: Synchronize your local repository with the remote on GitHub. This will update your package.json file with the new dependencies (like live-server).

git pull

Install Dependencies: Read the updated package.json and install any new tools into your local node_modules folder.

npm install

Start the Development Environment: Open two separate terminal windows/tabs, both navigated to your project directory.

Terminal 1 (CSS Compilation):

npm run watch

Terminal 2 (Local Server):

npm run serve

Project Blueprint for Client Work
The entire setup process we have established and debugged in this conversation is the foundational blueprint for your client's project. The detailed history captured here is a valuable asset that is not present in the other chat session.

When you begin the client's project, you will replicate this foundation:

A dedicated Git repository.

A local development environment managed by npm.

A package.json file defining dependencies (Tailwind CSS, live-server, etc.).

The same two-terminal workflow for local development.

This ensures that the client's project is built on the same stable, professional, and portable foundation that you have established for your own site.
# Tidy Git Sync Figma Plugin

A Figma plugin to synchronize spacing values from a selected component set to a remote server, automatically converting them to Tailwind CSS classes.

## Features

- Automatically fetches the `itemSpacing` value from the default variant of a selected component set.
- Converts the spacing value to a corresponding Tailwind CSS `gap` class.
- Updates the Tailwind CSS code on a remote server via a POST request.
- Provides user notifications for success or failure of the update.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd tidy-git-sync
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Build the plugin:**

    ```bash
    npm run build
    ```

4.  **Import the plugin into Figma:**

    - In the Figma desktop app, open a Figma document.
    - Search for and run `Import plugin from manifest…` via the Quick Actions search bar (Cmd/Ctrl + /).
    - Select the `manifest.json` file from the project directory.

## Usage

1.  Select a component set in your Figma document.
2.  Open the Tidy Git Sync plugin (Plugins → Tidy Git Sync).
3.  Click the "Sync" button in the plugin's UI.
4.  The plugin will:
    - Fetch the `itemSpacing` value from the default variant of the selected component set.
    - Convert this value to a Tailwind CSS `gap` class.
    - Send a POST request to `https://tidyframework.com/api/update-gap` to update the code on the server.
    - Display a success or error message in Figma.

## Configuration

The plugin uses the following configuration:

- **API Endpoint:** The plugin sends a POST request to `https://tidyframework.com/api/update-gap`. This URL is defined in [src/updateCodeOnServer.ts](src/updateCodeOnServer.ts).
- **Tailwind CSS Conversion:** The conversion logic from spacing value to Tailwind CSS class is located in [src/convertValueToTailwind.ts](src/convertValueToTailwind.ts).

## Development

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Figma Desktop App](https://figma.com/downloads/)

### Development Workflow

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd tidy-git-sync
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the watch script:**

    ```bash
    npm run watch
    ```

    This will automatically rebuild the plugin on code changes.

4.  **Import the plugin into Figma:**

    - In the Figma desktop app, open a Figma document.
    - Search for and run `Import plugin from manifest…` via the Quick Actions search bar.
    - Select the `manifest.json` file in the project directory.

### Debugging

Use `console.log` statements in your code. To view the console output:

- In the Figma desktop app, search for and run `Open Console` via the Quick Actions search bar.

## File Structure

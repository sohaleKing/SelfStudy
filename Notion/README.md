# Notion API Wrapper

This project includes an API that wraps the Notion API. This enables you to store your Notion API secret securely on your server. The wrapper also supports caching.

## Setup

0. Make sure you forked this repo such that you are working off your own copy, you can check using the command `git remote -v`

1. Create a Notion account if you don't have one already

2. Create a new integration @ https://www.notion.so/my-integrations and record the secret in a safe place

3. Share a Notion page with your integration by clicking the `Share` link in the upper-right corner

4. If you lost the secret in step 2, go to Settings --> Integrations and copy your `internal integration token`

5. Install Insomnia @ https://insomnia.rest

6. Import the collection into Insomnia found inside this project under /api/Insomnia-All....json

7. Create a new `environment` inside Insomia (call it Notion) and paste the following inside the text area:

```
{
  "NOTION_INTEGRATION_TOKEN": "your_secret_goes_here",
  "database_id": "some-database-id",
  "page_id": "some-page-id",
  "block_id": "some-block-id",
  "user_id": "some-user-id",
  "property_id": "some-property-id"
}
```

8. Try sending the request `Retrieve your token's bot user` and verify that you get a status 200 response

9. cd into `./api` and run `npm install`

10. Inside the `./api` folder, create a new file called `.env` and put the following inside (ensure that there are no spaces around the `=`):

```
NOTION_INTEGRATION_TOKEN=your_secret_goes_here
```

11. Inside the `./api` folder, run `npm run start`

12. Install the `Live Server` extension by Ritwick Dey

13. Inside the `./web` folder, right click on `index.html` and select `Open with Live Server`

14. You can now start building your **Notion-integrated** website by modifying the `html/css/js` files inside the `./web` folder

Notes:

-   If you get `EADDRINUSE` error, then on MacOS machine run `killall node`, and on Windows machine run `taskkill /f /im node.exe`, or, if all else fails, reboot your computer

-   If you want to invalidate the server cache, then simply restart the server by opening `./api/main.js` and saving the file (saving the file even without any changes should restart the server)

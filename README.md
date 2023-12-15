## Vert.run React assignment

### Description

This project intended to feature information retrieved from from [Strava API](https://developers.strava.com/docs/reference/). However
due to problems to create an account, I created dummy data to populate the application instead.

The samle response to model the data can be found [here](https://developers.strava.com/docs/reference/#api-Activities-getLoggedInAthleteActivities).

A brief description of the diferent aspects of this app:

- Home page: contains links to go to /activities page and /stats page.
- Activities page: Show a table with activities data from a user.
- Stats page: Features data from the last 3 months (aggregated) and allows the user to visit a specific month to see more details.
- Stats month page: This page shows data for a specific month.
- /lib directory: Utility functions to retrieve data simulating API calls.
- /data directory: Contains dummy data in JSON format.
- types.d.ts: Custom types based on Strava sample responses.

### Instructions to run project locally:

First, clone repository:

```bash
# https
git clone https://github.com/ignaciodiazb/vert-run-react-assignment.git

# ssh
git clone git@github.com:ignaciodiazb/vert-run-react-assignment.git

# github cli
gh repo clone ignaciodiazb/vert-run-react-assignment
```

Second, install dependencies:

```bash
npm install
```

Third, run the development server:

```bash
npm run dev
```

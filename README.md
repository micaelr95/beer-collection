## Getting Started

To run the app, we start the development server by running:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

All the code lives inside the `src` folder.

For this project I used the new `app` directory. Inside the `app` directory we have the home page in the root then `add-beer` and `details`. All these pages are responsible for handling data for that page.

When we open the page for the first time the beers are fetched from the API, saved in redux and to the local storage. If redux/local storage has data we don't go to the API.

In the `components` folder we have all the common components. Those components are only responsible for rendering data that comes from the parent/page.

`fetchers` contains the code responsible to get data from the API.

Everything related to redux is inside the `redux` folder. This includes the slice, hooks, the provider and the store.

All common types live inside type `types` folder.

I also added tests that live inside the `__tests__` folder.

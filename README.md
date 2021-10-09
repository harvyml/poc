## POC music App!

This is app was made using the deezer developer api, the app consists of the two main views, **home** and **favorite**.
The app was made using just React and localStorage for the data management as the app did not require a backend enviroment.

The app was initialized with create-react-app and has a simple hamburger structure where the *Layout* component comes in, you will see that the *views* components are always wrapped between the *Layout* component.

The app also uses *react-query* only on the pages where a fetch is done just once.

The app uses a library for the pagination system, if you scroll down to the bottom of the screen the next 20 elements will be loaded.

You can also search for songs with the search input located in *Home*.

## Run Locally

#### NO LONGER NEEDED:
<p style='color: #ccc'>This app uses a proxy server for retrieving data from the deezer api. To activate this proxy go to: [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and click request button.
</p>
----------------------


```
git clone git@github.com:harvyml/poc.git
cd poc
npm install
npm start
```

## App purpose

This is a very simple app in wich you can search and set as song as a favorite song, this is persisted between app launches. 
You can search for songs and view them in more detail when opening a certain song.

You can also see the songs you marked as favorite in the favorite tab.

## App development
#### Git Flow:

The app was created using only a main branch while creating pull requests for each new feature about to release to the main branch

#### Deployment

This app is hosted on heroku

# Pok-dex_API
This is a Pokédex application built using a public API, the PokéAPI. The app allows users to search for Pokémon, view their details, and bookmark their favorite Pokémon.

# Features Search Page

The search page provides a search input field where users can enter the name of a Pokémon to search for.
When the user hits the search button, an API call is made to the search endpoint of the PokéAPI.
While the API call is in progress, a loading indicator is shown.
If the API call is successful, the search results are displayed.
If the API call throws an error, the error message is displayed.

# Listing Page

After a successful API response on the search page, the listing page is displayed.
The listing page shows all the Pokémon returned by the API in a grid format.
Each Pokémon is displayed with its image and title.
The listing page supports infinite scrolling, allowing the user to load more Pokémon by scrolling.
The default number of Pokémon loaded per page is 10.
The listing page remains functional even after loading a large number of Pokémon.

# Filter Options

The listing page provides options to filter the results by various criteria such as abilities, characteristics, group, habitat, location, and species.
Users can apply one or more filters to refine their search.
Details Page
Tapping on a Pokémon in the listing page opens up the details screen.
The details screen displays all the information obtained from the API in a well-formatted design.
A bookmark icon is provided on the details screen.
Tapping on the bookmark icon saves the Pokémon as a favorite on the device.
A Pokémon that has been bookmarked is shown with a pre-filled bookmark icon.
Clicking on the bookmark icon again removes the Pokémon from bookmarks.

# Bookmarks Screen

The bookmarks screen shows all the Pokémon bookmarked by the user.
The bookmarked Pokémon data is stored locally on the device.
Users can remove a Pokémon from bookmarks on the bookmarks screen.

# Tech Stack

The app is built using the following technologies:

React Native (for the mobile app version) or ReactJS (for the web app version)
PokéAPI (public API for fetching Pokémon data)
Getting Started
To run the app locally, follow these steps:

Clone the repository: git clone https://github.com/your-repo.git
Navigate to the project directory: cd project-directory
Install the dependencies: npm install or yarn install
Start the development server: npm start or yarn start
Open the app in your browser or simulator/emulator.

# Conclusion

The Pokédex app allows users to search, browse, and bookmark their favorite Pokémon. It provides a user-friendly interface, seamless navigation, and efficient data loading. The app can be further enhanced with additional features such as sorting options, advanced search capabilities, and more. Enjoy exploring the Pokémon world with the Pokédex app!

# Resources

PokéAPI Documentation
React Native Documentation
ReactJS Documentation

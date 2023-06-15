Project Title: LyricSearch Web Application
![Alt-text](page1.png)
Description: The Lyric Search app is a web application designed to provide users with a convenient way to search for song lyrics. Users can enter the title of a song and instantly retrieve the corresponding lyrics, allowing them to sing along or explore the meaning behind their favorite tracks.

Technology Used:

- React: A JavaScript library for building user interfaces, providing a modular and efficient approach to development.
- Vite: A fast and efficient build tool for creating React applications, offering quick development server startup and optimized production builds.
- Musixmatch API: An API that provides access to a vast collection of song lyrics. It allows us to retrieve lyrics based on the song title and display them to the user.

Key Components:

1. SearchForm:

   - This component displays a form where users can enter the title of the song they want to search for.
   - Functionality: Users can input the song title and submit the form to initiate the search for lyrics.

2. LyricsDisplay:

   - The LyricsDisplay component fetches the lyrics from the Musixmatch API based on the user's search query.
   - Functionality: After the user submits the search form, the LyricsDisplay component sends a request to the Musixmatch API with the provided song title. It retrieves the corresponding lyrics and displays them to the user.

3. ChosenSongPage:
   - This page displays the chosen song's lyrics and additional track details.
   - Functionality: Users can view the lyrics of the chosen song and navigate back to the search results or the homepage using the provided buttons.

Routes:

- Homepage:

  - Route Path: "/"
  - Purpose: This route directs users to the homepage of the Lyric Search app, where they can initiate song searches.

- Search Results Page:

  - Route Path: "/search/:query"
  - Purpose: This route displays the search results for a specific song query. Users can select a song from the results to view its lyrics.

- Chosen Song Page:
  - Route Path: "/song/:id"
  - Purpose: This route displays the chosen song's lyrics and additional track details. Users can navigate back to the search results or the homepage from this page.

Design Considerations:

- The user interface is designed to be user-friendly and intuitive, providing a seamless experience for searching and viewing song lyrics.
- The application incorporates a purple background color, providing a visually appealing and consistent theme across all pages.
- The use of spinner loaders ensures a smooth transition between loading states and prevents the "No search results found" message from appearing momentarily.
- The search button is disabled when the input field is empty, ensuring that users must enter a song title to initiate a search.

By leveraging the Musixmatch API and incorporating a user-friendly interface, the Lyric Search app simplifies the process of finding song lyrics, allowing users to explore their favorite songs in depth and enhance their musical experience.

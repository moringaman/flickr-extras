import Gallery from '../Containers/Gallery'

// App Steps
// 1. Pull some Image data from a gallery in flickr
// 2. Construct Image and User page Urls from JSON data
// 3. Create a search function to find galleryid from search term to create search URL
// 4. Use observer api to create infinate scroll functionality
// 5. Use UseEffect and useReducer to lazyload images
// 6. Refactor into hooks api.
// 7. Consider how you might test this

function App() {
  return (
    <div id="image" style={{height: '400vh'}}>
      <Gallery />
    </div>
  );
}

export default App;

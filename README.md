# IOP Specs Generator

## Development

Just another Vue project.

### Commands:

- **`npm run start`**  
   Start a local server, compiles assets and hot-reloads modules with Gulp.

- **`npm run build`**  
   Compile assets for production, before pushing the repo

### Updating the Repository:

**After running the build script**, simply push the changes to the repo.
This tool is hosted on GitHub and the site will automatically update.

### Refreshing the google fonts response file
Grab a new one from [Google Fonts Developer API](https://developers.google.com/fonts/docs/developer_api?apix_params=%7B%22sort%22%3A%22ALPHA%22%7D)
Then Copy the reponse into `app/googlefontsres.js`, run `npm run build` and commit the changes.

# Understanding the Code

TODO

### File Structure

#### Top-Level Entries

TODO

##### `src`

This directory contains all of the front-end logic. For the most part, the contents of this 
directory is organized according to the [Best Practice Recommendations for Angular App Structure]
(https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub). However, 
the file structure of this app contains many small changes from this original specification.

##### `res`

This directory contains all of the media files used within this project.

##### `dist`

This directory is not actually stored in the project repository. Instead, everything in `dist` is 
generated as part of the build process. During the build process all previous contents of `dist` 
are deleted, so remember to **never make changes directly to the contents of `dist`!**

#### Server-Side Files

TODO

##### `src/server/config`

###### `secure-config.js`

Contains sensitive information (API keys, database credentials, cookie secrets, etc.) that should 
not be kept in a public repository. This file is ignored by git, so you will need to manually 
transfer it around whenever you want to set up a new development environment for this codebase. 

TODO

#### Front-End Files

TODO
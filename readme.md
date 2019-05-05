# Static Webpack Boilerplate :rocket:

> Minimal & Modern Webpack Boilerplate for building static sites

[![Build Status](https://travis-ci.org/xxczaki/static-webpack-boilerplate.svg?branch=master)](https://travis-ci.org/xxczaki/static-webpack-boilerplate) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)


[**Demo Site**](https://static-webpack-boilerplate.now.sh)

---

![](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)

## Highlights
- Easy to use
- Includes optimized Webpack & Babel configuration
- Perfect Lighthouse score
- Non-blocking CSS & fonts loading
- Friendly errors & warnings
- Ensures clean code with xo & stylelint
- Normalizes default browser style with modern-normalize
- HTML template with social media meta tags
- Targets the latest browsers
- Works offline

## File Tree
```bash
├── public                                      # Main folder
│   ├── css                                     # Subfolder with css
│   │   ├── main.css                            # Main CSS file
│   ├── fonts                                   # Subfolder with fonts
│   │   ├── open-sans-v16-latin-regular.woff    # .woff font
│   │   └── open-sans-v16-latin-regular.woff2   # .woff2 font
│   ├── images                                  # Subfolder with images
│   │   ├── favicon.png                         # Favicon
│   ├── js                                      # Subfolder with JavaScript
│   │   ├── main.js                             # Main (entry) file
│   └── index.html                              # HTML template
├── .npmrc                                      # npm config
├── .stylelintrc                                # stylelint config
├── .travis.yml                                 # Travis CI config
├── package.json                                # Package config with scripts, list of dependencies etc.
├── webpack.config.js                           # Webpack config
├── babel.config.js                             # Babel config
```

## Usage
```bash
# Install dependencies

 $ npm install
 
# Start webpack-dev-server at port 8080

 $ npm start
 
# Run linters

 $ npm test
 
# Build app for production (gets output in the 'dist' directory)

 $ npm run build
```

## Deploying

I recommend to use either [Zeit Now](https://now.sh) or [Netlify](https://netlify.com) for hosting your site.

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/xxczaki/static-webpack-boilerplate)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xxczaki/static-webpack-boilerplate)

## TODO

- [ ] HMR
- [ ] Testing

## Related

- [styled-react-boilerplate](https://github.com/xxczaki/styled-react-boilerplate)

### License

MIT

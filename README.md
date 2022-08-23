# About this repo
Challenge for Edmachina frontend position.
- Author: Catalina Fernandez
- Technologies: Docker, Vue2, Vuetify 3, sass.

# Important things i may forget
- Theme is synced with browser/os theme variant, but you can switch between themes with the theme switch at the topnav too.
- The project structure is designed according to popular design patterns and Vuetify conventions.
- Vuetify defaults (colors scheme, fonts) were safely replaced with design pattern given in the mockup.
Which means we are not overwriting or doing some kinky stuff, instead we are overriding with the provided vuetify configuration files.
- Mockdata is just a vuex store with initial values.

# Build image
`docker build -t edmachina-challenge .`

# Serve app
`docker run -it -p 8080:8080 edmachina-challenge`

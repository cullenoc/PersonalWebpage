# Welcome to My Portfolio! 👨‍💻

You can find all of the code which powers [my portfolio webpage](https://stanford.edu/~cullenoc/) here.
It is a simple single page website which uses javascript to add interactivity. It is styled after a windows
desktop and features the [Typed.js](https://github.com/mattboldt/typed.js/)
library to add typing animations to text within a container styled after a terminal.

This project has been created using **webpack-cli** to allow import of node modules on the front end. 
To develop and run the project if you are interested in tinkering with the code to create your own animated terminal, 
clickable folder icons, or something else:

Clone the repository using your preferred method

```
npm install --save-dev webpack webpack-cli
```

to install webpack as a development dependency

```
npm run build
```

to bundle the application

For additional information on using webpack to bundle applications and errors you might encounter when using webpack,
see this [video by Fireship](https://www.youtube.com/watch?v=5IG4UmULyoA) and this [article by Flavio Copes](https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/).

```
npm install nodemon
```

to install nodemon to view the application during development

```
npm start
```

to run nodemon, after which you should be able to view the website at localhost:1930.

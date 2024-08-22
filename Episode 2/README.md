### npm 
npm is package manager for JavaScript. It is used to install and manage dependencies for a project.
### npm init 
`npm init` is used to create a package.json file. It will ask you some questions and then create a package.json file. if you want to skip the questions you can use `npm init -y`
```terminal
npm init
npm init -y
```
### package.json
package.json is a congiguration file that keep track of all the dependencies of a project. It also contains the name, version, description, author, devDependencies, scripts etc.

### devDependencies
devDependencies are the dependencies that are only required during development. For example, bundlers etc.

### bundler 
bundler is a tool that manages the dependencies of a project. It bundles all the dependencies into a single file. For example, webpack, parcel etc.

### parcel 
parcel is a bundler that is used to bundle the dependencies of a project. It is very easy to use. You can install parcel using npm. 
```terminal
npm install -D parcel 
```
here -D mean dev depencies

#### parcel give lot of features 
- Dev Build & Production Build
- Local Server - HTTP & HTTPs
- Hot Module Replacement
- File Watching Algorithm - written in c++
- Code Splitting
- Tree Shaking - remove unused code
- Image Optimization
- CSS & JS Minification
- Differential bundling
- Diagnostic Messages
and lot more...


``` Json
"devDependencies": {
    "parcel": "^2.12.0"
}
```
here ^ caret means that the version of parcel should be greater than 2.12.0 

### caret vs tilde
#### caret
`^2.12.0` means that the version of parcel should be greater than 2.12.0 but less than 3.0.0
#### tilde
`~2.12.0` means that the version of parcel should be greater than 2.12.0 but less than 2.13.0

### package-lock.json
package-lock.json is a file that keeps track of the exact version of the dependencies of a project. It is used to make sure that the same version of dependencies is installed on all the machines.

### node_modules
node_modules is a folder that contains all the dependencies of a project. It is created when you install the dependencies of a project.

### transitive dependencies
transitive dependencies are the dependencies of the dependencies of a project. For example, if you install parcel, parcel will install some other dependencies. These dependencies are called transitive dependencies.

### why not push node_modules to git?
`node_modules` is a folder that contains all the dependencies of a project. It is very large in size. If you push node_modules to git, it will increase the size of the repository. It is not a good practice to push node_modules to git.

<img src="https://d33wubrfki0l68.cloudfront.net/9722a8164dec5096faa0144f7d7466c9f97e87d5/1af5e/images/uploads/node_modules_meme.png" style="height:300px" />

If you have `package.json` and `package-lock.json`file, you can recreate node_modules on any machine by the following command:
```terminal
npm install
```

- React Apps are fast but when we build large scale apps, we need lot more things instead of React. React is not only that making apps fast like bundler. 

### BrowserList
BrowserList is a configuration file that is used to specify the browser support of a project. It is used by the bundlers to compile the code according to the browser support.

```Json
"Browserlist":[
    "last 2 versions"
]
```

### Configuring scripts in package.json
You can configure scripts in package.json file. You can run the scripts using npm.
```Json
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
```

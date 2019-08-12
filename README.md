# js-advanced-cookie
 An lightweight Javascript plugin without dependencies to use cookies in a simple way.
 
 ## Install
 Add this line to your html file:
 ```
 <script src="path/to/cookie.js"></script>
 ```
 
 ## Usage
 ### Add cookies
 Use ```cookie.add("name, "value", {...});``` to add cookies. The last parameter is the optional settings (```expire```: time in seconds, where cookies should expire, ```override```: true to override existing cookie with the same name, ```path```: specify a path where cookies are available (relative to domain)). This function returns a bool which indicates if the cookie was stored or not.
 
 ### Get cookies
 Use ```cookie.get("name", {...});``` to read cookies. The last parameter is the optional settings (```json```: set it to true, when the value should be interpreted as json string, ```key```: load a specific key, if the value is a json object).
 The cookie will be interpreted as json, if its a json object, automatically, even if you don't set ```json: true```. So if you want to **not** get a json object, set ```json: false```.
 While json can also be an array, you can also store arrays. To load a specific array element set ```key: index```.
 
 ### Remove cookies
 Use ```cookie.remove("name");```. This function will return true if the cookie has been existed and was deleted successfully.
 
 ### Testing
 You find a server.js file in the "test" folder. Launch it with ```npm install``` and ```npm start server.js``` to start a local server on ```localhost:5000/test```. There you can test the framework with a playground app.
 
 ## Contribute
 Feel free to report bugs or post questions in the issues section or create a pull request to implement new features.

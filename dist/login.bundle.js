/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Log In.js":
/*!**********************!*\
  !*** ./src/Log In.js ***!
  \**********************/
/***/ (() => {

eval("// Log In\nlet Log InBtn = document.getElementById(\"Log In\");\nlet logoutBtn = document.getElementById(\"logout\");\n\nLog InBtn.addEventListener(\"click\", () => {\n  let oauth2Endpoint = \"https://accounts.google.com/o/oauth2/v2/auth\";\n  let form = document.createElement(\"form\");\n  form.setAttribute(\"method\", \"GET\");\n  form.setAttribute(\"action\", oauth2Endpoint);\n\n  let params = {\n    client_id:\n      \"807690195816-ibtf6a67ee9g0ib3oojrsob2pbf33ifa.apps.googleusercontent.com\",\n    redirect_uri: \"https://preciousitservices.vercel.app\",\n    response_type: \"token\",\n    scope:\n      \"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly\",\n    include_granted_scope: \"true\",\n    state: \"pass-through-value\",\n  };\n\n  for (var p in params) {\n    let input = document.createElement(\"input\");\n    input.setAttribute(\"type\", \"hidden\");\n    input.setAttribute(\"name\", p);\n    input.setAttribute(\"value\", params[p]);\n    form.appendChild(input);\n  }\n  document.body.appendChild(form);\n  form.submit();\n});\n\nlet params = {};\nlet regex = /([^&=]+)=([^&]*)/g,\n  temp;\n\nwhile ((temp = regex.exec(location.href))) {\n  params[decodeURIComponent(temp[1])] = decodeURIComponent(temp[2]);\n}\n\nif (Object.keys(params).length > 0) {\n  localStorage.setItem(\"authInfo\", JSON.stringify(params));\n}\n\n// hiding access token -\nwindow.history.pushState({}, document.title, \"/\" + \"index.html\");\n\nlet info = JSON.parse(localStorage.getItem(\"authInfo\"));\nconsole.log(JSON.parse(localStorage.getItem(\"authInfo\")));\nconsole.log(info[\"access_token\"]);\nconsole.log(info[\"expires_in\"]);\n\nfetch(\"https://www.googleapis.com/oauth2/v3/userinfo\", {\n  headers: {\n    Authorization: `Bearer ${info[\"access_token\"]}`,\n  },\n})\n  .then((data) => data.json())\n  .then((info) => {\n    console.log(info);\n    document.getElementById(\"name\").innerHTML += info.name;\n    document.getElementById(\"name\").classList.add(\"nameCSS\");\n    document.getElementById(\"image\").setAttribute(\"src\", info.picture);\n    document.getElementById('Log In').textContent='Logout';\n});\n\nfunction logout() {\n  fetch(\"https://oauth2.googleapis.com/revoke?token=\" + info[\"access_token\"], {\n    method: \"POST\",\n    headers: {\n      \"Content-type\": \"application/x-www-form-urlencoded\",\n    },\n  }).then(() => {\n    // Remove stored authentication information\n    localStorage.removeItem(\"authInfo\");\n    // Redirect to the Log In page\n    location.href = \"https://preciousitservices.vercel.app\";\n  });\n}\n\n// Hide Log In button if logged in\nif (info && info.hasOwnProperty(\"access_token\")) {\n  Log InBtn.style.display = \"none\";\n}\nif (info && info.hasOwnProperty(\"access_token\")) {\n  logoutBtn.style.display = \"block\";\n}\n\n//# sourceURL=webpack://precious-it-services/./src/Log In.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Log In.js"]();
/******/ 	
/******/ })()
;
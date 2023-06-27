// Login
let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");

loginBtn.addEventListener("click", () => {
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  let form = document.createElement("form");
  form.setAttribute("method", "GET");
  form.setAttribute("action", oauth2Endpoint);

  let params = {
    client_id:
      "807690195816-ibtf6a67ee9g0ib3oojrsob2pbf33ifa.apps.googleusercontent.com",
    redirect_uri: "https://preciousitservices.vercel.app",
    response_type: "token",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
    include_granted_scope: "true",
    state: "pass-through-value",
  };

  for (var p in params) {
    let input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
});

// Logout
let params = {};
let regex = /([^&=]+)=([^&]*)/g,
  temp;

while ((temp = regex.exec(location.href))) {
  params[decodeURIComponent(temp[1])] = decodeURIComponent(temp[2]);
}

if (Object.keys(params).length > 0) {
  localStorage.setItem("authInfo", JSON.stringify(params));
}

// hiding access token -
window.history.pushState({}, document.title, "/" + "index.html");

let info = JSON.parse(localStorage.getItem("authInfo"));
console.log(JSON.parse(localStorage.getItem("authInfo")));
console.log(info["access_token"]);
console.log(info["expires_in"]);

fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
  headers: {
    Authorization: `Bearer ${info["access_token"]}`,
  },
})
  .then((data) => data.json())
  .then((info) => {
    console.log(info);
    document.getElementById("name").innerHTML += info.name;
    document.getElementById("name").classList.add("nameCSS");
    document.getElementById("image").setAttribute("src", info.picture);
});
function logout() {
  fetch("https://oauth2.googleapis.com/revoke?token=" + info["access_token"], {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  }).then(() => {
    // Remove stored authentication information
    localStorage.removeItem("authInfo");
    // Redirect to the login page
    location.href = "https://preciousitservices.vercel.app";
  });
}

// Hide login button if logged in
if (info && info.hasOwnProperty("access_token")) {
  loginBtn.style.display = "none";
}
if (info && info.hasOwnProperty("access_token")) {
  logoutBtn.style.display = "block";
}z

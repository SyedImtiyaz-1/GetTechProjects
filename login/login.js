// Login
let loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', ()=>{    
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
let form = document.createElement('form')
form.setAttribute('method', 'GET')
form.setAttribute('action',oauth2Endpoint)

let params = {
    "client_id":"807690195816-ibtf6a67ee9g0ib3oojrsob2pbf33ifa.apps.googleusercontent.com",
    "redirect_uri": "https://preciousitservices.vercel.app",
    "response_type": "token",
    "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
    "include_granted_scope": "true",
    "state": "pass-through-value"
}

for(var p in params){
    let input = document.createElement('input')
    input.setAttribute('type','hidden');
    input.setAttribute('name',p);
    input.setAttribute('value',params[p]);
    form.appendChild(input);
}
document.body.appendChild(form);
form.submit();
});

// Logout


let params = {};
let regex = /([^&=]+)=([^&]*)/g, temp

while(temp = regex.exec(location.href)){
    params[decodedURIComponent(m[1])] = decodeURIComponent(m[2])
}

if(Object.keys(params).length > 0){
    localStorage.setItem('authInfo',JSON.stringify(params))
}

// hiding access token -
window.history.pushState({},document.title,"/" + "profile.html")

let info = JSON.parse(localStorage.getItem('authInfo'))
console.log(JSON.parse(localStorage.getItem('authInfo')))
console.log(info['access_token'])
console.log(info['expires_in'])

fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
    headers:{
        "Authorization":`Bearer ${info['access_token']}`
    }
})
.then((data) => data.json())
.then((info) => {
    console.log(info)
    document.getElementById('name').innerHTML += info.name
    document.getElementById('image').setAttribute('src') = info.picture
})

// let logoutBtn = document.getElementById('logout')
// logoutBtn.addEventListener("click",() => {
// localStorage.removeItem('access_toke')
// <!-- <button id="login">Login</button>
//                 <h3 id="name"></h3>
//                 <img id="image"/>
//                 <button id="logout">Login</button> -->
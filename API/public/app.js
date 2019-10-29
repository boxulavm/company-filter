console.log('Hello from the client siiiiide!')




const companies = fetch('http://localhost:3000/companies')
  .then(response => response.json())
  .then(json => console.log(json));
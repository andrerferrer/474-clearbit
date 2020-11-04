// const authorization = "Bearer sk_YOUR_API_KEY";

// We know how to fetch the data from the api

const fetchApi = (email) => {

    const url = `https://person.clearbit.com/v1/people/email/${email}`;

    // this is the new thing from the livecode
    const options = {
        headers: {
          Authorization: "Bearer sk_f3f04bef2d500f1b9e7f42152a47edc3"
        }
    };

    fetch(url, options)
      .then(response => response.json())
      .then((json) => {
        
        const name = json.name.fullName;
        const email = json.email;
        const bio = json.bio;
        const location = json.location;

        // then, with this data, we will update the DOM
        const userName = document.getElementById('userName');
        userName.innerText = name;
        const userEmail = document.getElementById('userEmail');
        userEmail.innerText = email;
        const userBio = document.getElementById('userBio');
        userBio.innerText = bio;

        // You can do it inline if you want
        // document.getElementById('userLocation').innerText = location;
        const userLocation = document.getElementById('userLocation');
        userLocation.innerText = location;
      });
};

// select the element (form)
const form = document.querySelector('form');

// addEventListener('submit', show person's data)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector("#clearbitEmail");
    const email = input.value;
    // extract the email from the DOM
    //  we need to fetch from the api
    fetchApi(email);
    
});

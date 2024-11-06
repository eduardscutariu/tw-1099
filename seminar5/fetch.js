fetch('https://api.github.com/users/MihaiAdrianLungu')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

const getGitHubProfile=(username)=>
{
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

getGitHubProfile('MihaiAdrianLungu');
{
    try {
        const response=await fetch(`https://api.github.com/users/${username}`)
        
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
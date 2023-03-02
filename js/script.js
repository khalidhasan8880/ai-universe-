const getData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data))
}

const displayData = (data) => {
    data.tools.forEach(element => {
        console.log(element)
    });
    
    
}
getData()
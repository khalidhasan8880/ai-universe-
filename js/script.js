const getData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayData(data.data.tools))
}

const displayData = (allTools) => {
    
    const cardContainer = document.getElementById('card-container')
    tools = allTools.slice(0,6)
    tools.forEach(element => {

        console.log(element);
        const div =  document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                <img src="${element.image}"class="card-img-top" alt="...">
            `
        const cardBody  = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = '<h4>Feature</h4>';

        let i= 0;
        element.features.forEach(x=> {
            i++;
            const p = document.createElement('p');
            p.classList.add('ms-2');
            p.innerHTML= ` ${i}. ${x}`;
            cardBody.appendChild(p);
        })
        div.appendChild(cardBody);
        cardContainer.appendChild(div);
        const cardFooter = document.createElement('ul');
        cardFooter.classList.add('list-group');
        cardFooter.classList.add('list-group-flush');
        cardFooter.innerHTML=`<li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h4>${element.name}</h4>
                <span><i class="fa-solid fa-calendar-days"></i>  ${element.published_in}</span>
            </div>
            <button class="btn btn-primary">Details <i class="fa-solid fa-arrow-right"></i> </button>
        </li>`;
        div.appendChild(cardFooter);
    });

}
getData()
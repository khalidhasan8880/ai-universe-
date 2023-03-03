let allData ;
const getData = (seeAll) => {
    spinner(true)
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => {
            allData = data.data.tools;
            displayData(data.data.tools, seeAll)}
            )
}

const displayData = (allTools, seeAll) => {
    
    const cardContainer = document.getElementById('card-container')
    if (allTools.length > 6) {
        allTools = allTools.slice(0,6)
    }
    if (seeAll) {
        cardContainer.innerHTML = '';
        allTools = allData;
    }


    
    allTools.forEach(element => {

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
            <button onclick="details('${element.id}')" class="btn btn-primary">Details <i class="fa-solid fa-arrow-right"></i> </button>
        </li>`;
        div.appendChild(cardFooter);
    });
    spinner(false)

    
}
// see more click handleer
document.getElementById('see-more').addEventListener('click', function (params) {
    getData(true)
})

// spinner 
const spinner = (isSpin)=>{
    const spinnerDiv = document.getElementById('spinner');
    if (isSpin) {
        spinnerDiv.classList.remove('d-none')
    }
    else{
        spinnerDiv.classList.add('d-none')
    }
}


// modal
const details = (id) => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(data => console.log(data.data))
}





getData()

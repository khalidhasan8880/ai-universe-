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
    
    console.log(allTools.published_in);
    allTools.sort((a, b) => {
        const dateA = new Date(a.published_in);
        const dateB = new Date(b.published_in);
        return dateA - dateB;
      });


    const cardContainer = document.getElementById('card-container')
    if (allTools.length > 6) {
        allTools = allTools.slice(0,6)
    }
    if (seeAll) {
        cardContainer.innerHTML = '';
        allTools = allData;
    }


    
    allTools.forEach(element => {

        // console.log(element);
        const div =  document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                <img src="${element.image}"class="card-img-top" alt="...">
            `
        const cardBody  = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = '<h4>Feature</h4>';

        let i= 0;
        getCommonData(element.features,i, cardBody)
        // cardBody.appendChild(p);
        // console.log(features);
        
        // element.features.forEach(x=> {
        //     i++;
        //     const p = document.createElement('p');
        //     p.classList.add('ms-2');
        //     p.innerHTML= ` ${i}. ${x}`;
        //     cardBody.appendChild(p);
        // })
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
            <button onclick="details('${element.id}')" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#detailModal">Details <i class="fa-solid fa-arrow-right"></i> </button>
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



const details = (id) => {
    
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data=> modalShow(data.data))
}

const modalShow = (data) => {
    console.log(data);
    document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row gap-4 p-5">
                        <div class="col border border-danger border-2 rounded p-3  bg-danger bg-opacity-25">
                            <h4>${data.description}</h4>
                            <div class="d-flex justify-content-between text-center">
                                <div class="bg-light plan-card rounded p-4 d-flex align-items-center">
                                    <h6 class="text-danger-emphasis"> <span>${data.pricing[0].price ? data.pricing[0].price : 'Free'}</span> <br> ${data.pricing[0].plan ? data.pricing[0].plan : 'Free'}</h6>
                                </div>
                                <div class="bg-light plan-card rounded p-4 d-flex align-items-center">
                                    <h6 class="text-danger-emphasis"> <span>${data.pricing[1].price ? data.pricing[1].price : 'Free'}</span> <br>  ${data.pricing[1].plan ? data.pricing[1].plan : 'Free'}</h6>
                                </div>
                                <div class="bg-light plan-card rounded p-4 d-flex align-items-center">
                                    <h6 class="text-danger-emphasis"> <span>${data.pricing[2].price ? data.pricing[2].price : 'Free'}</span> <br>   ${data.pricing[2].plan ? data.pricing[2].plan : 'Free'}</h6>
                                </div>
                            </div>
                            <div id="featuresAndInegra"class="d-flex justify-content-between">
                                <div>
                                <h4>Features</h4>
                                    <p>1. ${data.features['1'].feature_name ? data.features['1'].feature_name : 'no data found'}</p>
                                    <p>1. ${data.features['2'].feature_name ? data.features['2'].feature_name : 'no data found'}</p>
                                    <p>1. ${data.features['3'].feature_name ? data.features['3'].feature_name : 'no data found'}</p>
                                </div>
                                <div id="integrations">
                                    <h4>Integrations</h4>
                                    
                                </div>
                            </div>
                        </div>
                        <div  class="col border border-danger border-2 rounded p-3">
                           <div class="d-flex justify-content-center">
                            <img class="img-fluid rounded" src="${data.image_link[0]}" alt="">
                           </div>
                            <div class="text-center">
                                <h4>${data.input_output_examples[0].input ?data.input_output_examples[0].input : 'no data Found'}</h4>
                                <p>${data.input_output_examples[0].output ?data.input_output_examples[0].output : 'no data Found'}</p>
                            </div>
                        </div>
                    </div>
    `
    let i = 0;
    const integrations =document.getElementById('integrations')
    getCommonData(data.integrations,i,integrations)

}







// ----------------------------------------------
function getCommonData(element,i,cardBody) {
        element.forEach(x=> {
            i++;
            const p = document.createElement('p');
            p.classList.add('ms-2');
            p.innerHTML= ` ${i}. ${x}`;
            cardBody.appendChild(p);
        })
}

getData()

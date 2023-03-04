document.getElementById('modal-content').innerHTML = `
<div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body row gap-4 p-5">
                    <div class="col border border-danger border-2 rounded p-3 bg-danger bg-opacity-25">
                        <h4 class="py-2">${data.description}</h4>
                        <div class="d-flex flex-wrap gap-2 justify-content-between text-center">
                            <div class="bg-light plan-card rounded p-4 d-flex align-items-center justify-content-center ">
                                <h6 class="text-danger-emphasis"> <span>${data.pricing[0].price ? data.pricing[0].price : 'Free'}</span> <br> ${data.pricing[0].plan ? data.pricing[0].plan : 'Free'}</h6>
                            </div>
                            <div class="bg-light plan-card rounded p-4 d-flex align-items-center justify-content-center ">
                                <h6 class="text-danger-emphasis"> <span>${data.pricing[1].price ? data.pricing[1].price : 'Free'}</span> <br>  ${data.pricing[1].plan ? data.pricing[1].plan : 'Free'}</h6>
                            </div>
                            <div class="bg-light plan-card rounded p-4 d-flex align-items-center justify-content-center ">
                                <h6 class="text-danger-emphasis"> <span>${data.pricing[2].price ? data.pricing[2].price : 'Free'}</span> <br>   ${data.pricing[2].plan ? data.pricing[2].plan : 'Free'}</h6>
                            </div>
                        </div>
                        <div id="featuresAndInegra"class="d-flex justify-content-between py-2">
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
                        <div class="position-relative">
                        <div id="accuracy" class="d-none text-light position-absolute top-0 end-0 px-4 py-1 m-2 bg-danger rounded"> <span id="score">${((data.accuracy.score) * 100) ? ((data.accuracy.score) * 100) : 0 }</span>% accuracy </div>
                            <img class="img-fluid rounded" src="${data.image_link[0]}" alt="">
                        </div>
                       </div>
                        <div class="text-center">
                            <h4>${data.input_output_examples[0].input ?data.input_output_examples[0].input : 'No! Not Yet! Take a break!!!'}</h4>
                            <p>${data.input_output_examples[0].output ?data.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
                        </div>
                    </div>
                </div>
`
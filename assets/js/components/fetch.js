async function fetchData(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data)
    return data;
}

async function renderModelList(url, options) {
    const data = await fetchData(url, options);
    // Render your model data here
    let itemElement = document.querySelector('#post');
    const paginationContainer = document.getElementById('pagination-ul');
    itemElement.innerHTML = '';
    data.results.forEach(blog => {
        
        console.log(blog)

    });

    // Render pagination links
    paginationContainer.innerHTML = '';

    if (data.previous) {
        paginationContainer.innerHTML += `
            <li class="page-item">
                <a class="page-link" href="${data.previous}">&laquo; Previous</a>
            </li>
        `
    }

    //stepLinks.innerHTML += `<span class="current">Page ${data.current_page} of ${data.num_pages}.</span>`;

    if (data.next) {

        paginationContainer.innerHTML += `
            <li class="page-item">
                <a class="page-link" href="${data.next}">Next</a>
            </li>
        `
    }
    

}

function errorMessage(error_message){            
    let createSquadForm = `
        <div class="modal fade" id="error-message" tabindex="-1" aria-labelledby="errorMessageTitle" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="errorMessageTitle">Create Team</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="text-danger">${error_message}</p>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
        </div>
    `

    document.body.insertAdjacentHTML('beforebegin', createSquadForm) 
    $('#error-message').modal('show');
}

export{renderModelList, errorMessage}
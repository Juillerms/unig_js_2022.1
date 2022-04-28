const inputItem = document.querySelector('#addItem form input[name="newItem"]')

const lista = document.querySelector('#itemListView ul')

const formItem = document.querySelector('#addItem form')

formItem.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = inputItem.value
    const spanTitle = document.createElement('SPAN')
    
    spanTitle.className="title"
    spanTitle.innerHTML =title

    const spanStatus = document.createElement('SPAN')

    spanStatus.className = "status"
    spanStatus.innerHTML = "pending"

    const newli = document.createElement('LI')
    newli.appendChild(spanTitle)
    newli.appendChild(spanStatus)
    lista.appendChild(newli)

})
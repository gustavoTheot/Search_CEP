let button = document.querySelector('.button')
let inform = document.querySelector('.inform')

function searchMyCep(e){
    e.preventDefault();
    let cep = document.querySelector('.cep').value;
        
    // conectando com a API e enviando 
    fetch(`https://viacep.com.br/ws/${cep}/json/`,{
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    })
    .then((response) =>{
        return response.json()
    })
    .then((response) => {
        let info = response;

        let ul = document.createElement('ul')
        ul.classList.add('.listc-cep')
        inform.appendChild(ul)

        // criando a linhas da lista e inserindo na list-cep
        let li = document.createElement('li');
        ul.appendChild(li)

        // criando valores e inserindo dentro das linhas
        let cep = document.createElement('p')
        let address = document.createElement('p')
        let complement = document.createElement('p')
        let district = document.createElement('p')
        let place = document.createElement('p')
        let UF = document.createElement('p')

        li.appendChild(cep)
        li.appendChild(address)
        li.appendChild(complement)
        li.appendChild(district)
        li.appendChild(place)
        li.appendChild(UF)

        cep.innerHTML = `<b>CEP:</b> ${info.cep}`
        address.innerHTML = `<b>Logradouro:</b> ${info.logradouro}`
        complement.innerHTML = `<b>Complemento:</b> ${info.complemento}`
        district.innerHTML = `<b>Bairro:</b> ${info.bairro}`
        place.innerHTML = `<b>Cidade:</b> ${info.localidade}`
        UF.innerHTML = `<b>UF:</b> ${info.uf}`

        clearCep();
    })

    function clearCep(){
        document.querySelector('.cep').value = ''
    }
}

button.addEventListener('click', searchMyCep);
document.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        console.log('click')
        searchMyCep(e);
    }
})


document.addEventListener('DOMContentLoaded', (ready) => {
    let pirmoPirmas = document.getElementById('pirmo-pirmas')
    console.log(pirmoPirmas)
    
    console.log(document.querySelector('#antras article'))
    console.log(document.querySelectorAll('#antras article'))
    
    console.log(document.querySelector('.straipsnio-paragrafas'))
    console.log(document.querySelectorAll('.straipsnio-paragrafas'))
    
    let antras = document.querySelector('#antras article')
    antras.querySelector('.straipsnio-paragrafas')
    
    let medis = document.getElementById('pirmo-antras')
    console.log('Medis:', medis)
    console.log('Sekantis: ', medis.nextElementSibling)
    console.log('Pries: ', medis.previousElementSibling)
    console.log('Tevinis: ', medis.parentElement)
    
    document.querySelector('#pirmo-pirmas').textContent = "Naujas tekstas"
    console.log(document.querySelector('#pirmo-pirmas').textContent)
    
    console.log(document.querySelector('#trecio-pirmas').textContent)
    document.querySelector('#trecio-pirmas').textContent = 'Labas rytas'
    console.log(document.querySelector('#trecio-pirmas').textContent)
    
    console.log(document.querySelector('#trecio-antras').innerText)
    console.log(document.querySelector('#trecio-antras').textContent)
    console.log(document.querySelector('#trecio-antras').innerHTML)
    
    console.log(document.getElementById('trecias').innerText)
    console.log(document.getElementById('trecias').textContent)
    console.log(document.getElementById('trecias').innerHTML)
    
    document.querySelector('#trecio-antras').innerText = 'Hello'
    let trecioAntras = document.querySelector('#trecio-antras')
    trecioAntras.innerText += ' again'
    
    document.getElementById('trecio-ketvirtas').innerText = 'su <span>vidine</span> zyme'
    document.getElementById('trecio-penktas').innerHTML = 'su <span>vidine</span> zyme'
    
    let ketvirtas = document.getElementById('ketvirtas')
    ketvirtas.innerHTML += '<p class="raudonas">Naujas paragrafas 2</p>'
    ketvirtas.innerHTML += '<p class="zalias">Naujas paragrafas 3</p>'
    
    let paragrafai = document.querySelectorAll('#ketvirtas p')
    paragrafai.forEach(paragrafas => {
        console.log(paragrafas.innerText)
    })
    
    paragrafai.forEach(function(paragrafas) {
        console.log(paragrafas.innerText)
    })
    
    let pirmasBtn = document.getElementById('pirmas-btn')
    let antrasBtn = document.getElementById('antras-btn')
    
    pirmasBtn.addEventListener('click', function(event) {
        alert('Paspaustas pirmas mygtukas')
    })
    
    antrasBtn.addEventListener('click', (e) => {
        e.target.disabled = true
    })
    
    let inputas = document.querySelector('#sestas input')
    inputas.addEventListener('keyup', (e) => {
        // console.log(e.target.value)
        let norimasTekstas = e.target.value
        document.querySelector('#sestas #norimas-tekstas').innerText = norimasTekstas
    })
    
    let naujasP1 = document.createElement('p')
    naujasP1.innerText = 'Naujo paragrafo turinys'
    
    let septintas = document.getElementById('septintas')
    septintas.appendChild(naujasP1)
    
    let naujasP2 = document.createElement('p')
    naujasP2.innerText = 'Dar vieno paragrafo turinys'
    septintas.appendChild(naujasP2)
    
    let naujasBtn = document.createElement('button')
    naujasBtn.innerText = 'Spausti'
    septintas.appendChild(naujasBtn)
    
    document.getElementById('pirmo-pirmas').style.color = 'red'
    document.getElementById('pirmo-pirmas').style.cssText = 'color:blue; background-color:gray;'

    let klases1 = document.querySelector('#astuntas .pirmas')
    klases1.classList.add('dar-viena')
    klases1.classList.add('ir-dar-viena', 'irrrrrr-dar-viena')

    klases1.classList.remove('irrrrrr-dar-viena', 'pirmas')

    let klases2 = document.querySelector('#astuntas .antras')
    klases2.classList.add('fonas-raudonas')

    let klases3 = document.querySelector('#astuntas .trecias')
    klases3.classList.replace('trecias','fonas-melynas')

    let naujasEl = document.createElement('div')
    naujasEl.classList.add('tekstas-storas', 'tekstas-didesnis', 'fonas-raudonas')
    naujasEl.innerHTML = '<p>pirmas paragrafas</p><p>antras paragrafas</p>'
    septintas.appendChild(naujasEl)
})

/*
UZDUOTIS:
- sukurti HTMl elementa su klase ir id, prideti dvi naujas klases per JS, panaikinti viena klase per JS, prideti CSS stiliu
- sukurti nauja div su id, jame JS pagalba sukurti nauja html elementa, tam naujam elementui ideti nauja tekstas ir bent viena klase, klases stiliu aprasyti css'e
*/
const currency = document.querySelector('.currency')
const currencyList = document.querySelector('.currency-list')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const icon = document.querySelector('.icon')


btn.addEventListener('click', () => {
    let valute = currencyList.value
    fetch('https://api.exchangerate.host/latest?base=KGS')
        .then(res => res.json())
        .then(data => result.value = (data.rates[valute] * currency.value).toFixed(2))
    function add(valute){
        if(valute === 'RUB'){
            return icon.innerText = "₽"
        } else if(valute === 'USD'){
            return icon.innerText = "$"
        } else if(valute === 'EUR'){
            return icon.innerText = "€"
        }
    }
    add(valute)
})




function buscarCep(cep) {
    //console.log(cep)

    let url = 'https://viacep.com.br/ws/' + cep + '/json/'

    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url)

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let JSONTexto = xmlHttp.responseText
            let JSONObjeto = JSON.parse(JSONTexto)

            document.getElementById('endereco').value = JSONObjeto.logradouro
            document.getElementById('bairro').value = JSONObjeto.bairro
            document.getElementById('cidade').value = JSONObjeto.localidade
            document.getElementById('uf').value = JSONObjeto.uf
        } else if(xmlHttp.readyState == 4 && xmlHttp.status != 200) {
            window.location.href = 'badrequest.html'
        } 
        
        

    }

    xmlHttp.send()

}
const mudarIcone = () => {
    const inputSenha = document.getElementById('input_senha')
    const iconeOlho = document.getElementById('olho')

    if(inputSenha.type === 'password') {
        inputSenha.type = 'text'
        iconeOlho.classList.remove('olho_aberto')
        iconeOlho.classList.add('olho_fechado')
        iconeOlho.title = 'esconder senha'
    } else {
        inputSenha.type = 'password'
        iconeOlho.classList.remove('olho_fechado')
        iconeOlho.classList.add('olho_aberto')
        iconeOlho.title = 'mostrar senha'
    }
}

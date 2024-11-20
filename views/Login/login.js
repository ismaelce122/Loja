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

const Inscrever = () => {
    const divInscrever = document.getElementById('div_inscrever')
    const divEntrar = document.getElementById('div_entrar')
    const btnInscrever = document.getElementById('btn_inscrever')
    const btnEntrar = document.getElementById('btn_entrar')

    divInscrever.classList.remove('tab3')
    divEntrar.classList.remove('tab2')
    divInscrever.classList.add('tab2')
    divEntrar.classList.add('tab3')

    btnEntrar.classList.remove('sign-in')
    btnInscrever.classList.remove('sign-in2')
    btnEntrar.classList.add('sign-in2')
    btnInscrever.classList.add('sign-in')
}

const Entrar = () => {
    const divInscrever = document.getElementById('div_inscrever')
    const divEntrar = document.getElementById('div_entrar')
    const btnInscrever = document.getElementById('btn_inscrever')
    const btnEntrar = document.getElementById('btn_entrar')

    divInscrever.classList.remove('tab2')
    divEntrar.classList.remove('tab3')
    divInscrever.classList.add('tab3')
    divEntrar.classList.add('tab2')

    btnEntrar.classList.remove('sign-in2')
    btnInscrever.classList.remove('sign-in')
    btnEntrar.classList.add('sign-in')
    btnInscrever.classList.add('sign-in2')
}
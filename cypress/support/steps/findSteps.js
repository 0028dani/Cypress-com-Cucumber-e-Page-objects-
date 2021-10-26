import esperaLista from "../pageobjects/findPage"

const EsperaLista = new esperaLista 

Given(/^que estou no site$/, () => {
	EsperaLista.acessarURL()
});

When(/^selecionar o botão Lista$/, () => {
	EsperaLista.Item1()
    EsperaLista.Item2()
});


And(/^Selecione o lista Dom$/, () => {
	EsperaLista.ListaDomItem1()
    EsperaLista.ListaDomItem2()
});





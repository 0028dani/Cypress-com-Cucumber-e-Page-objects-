import AtuandoComCheckboxs from "../pageobjects/checkboxsPage";

const atuandoComCheckboxs =  new AtuandoComCheckboxs

Given(/^que estou no site$/, () => {
	atuandoComCheckboxs.AcessarURL()
});


When(/^selecione o checkbox pizza$/, () => {
	atuandoComCheckboxs.SelecionarPizza()
});


And(/^selecione todos os checkboxs$/, () => {
	atuandoComCheckboxs.fullCheckboxs()
});

And(/^verificar dois checkbox$/, () => {
	atuandoComCheckboxs.verificarCheckboxPizza()
	atuandoComCheckboxs.verificarCheckboxVegetariana()
});







import AtuandoComCombo from "../pageobjects/comboPage"

const atuandoComCombo = new AtuandoComCombo 

Given(/^que estou no site$/, () => {
	atuandoComCombo.acessarURL()
});

When(/^selecionar dois combos$/, () => {
	atuandoComCombo.Combo()
});


And(/^selecione todos os combos$/, () => {
	atuandoComCombo.ComboMultiplo()
});






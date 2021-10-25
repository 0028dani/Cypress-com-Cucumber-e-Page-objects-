import esperaSinc from "../pageobjects/syncPage";

const EsperaSinc = new esperaSinc


Given(/^que estou no site$/, () => {
	EsperaSinc.acessarURL()
});


When(/^selecionar o botão Resposta Demorada$/, () => {
	EsperaSinc.BotaoRespostaDemorada()
});

And(/^preenche o novo campo$/, () => {
	EsperaSinc.NovoCampo()
});




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

And(/^verificar se existe$/, () => {
	EsperaSinc.VerificarExistenciaNovoCampo()
});

And(/^click retry$/, () => {
	EsperaSinc.ClickRetry()
});


And(/^botão lista Dom$/, () => {
	EsperaSinc.botaoListDom()
});

 


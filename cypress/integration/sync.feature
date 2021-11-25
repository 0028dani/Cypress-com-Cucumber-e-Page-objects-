Feature: Validando a espera do cypress

Scenario: Validando a espera do cypress no site

    Given que estou no site 
    When selecionar o botão Resposta Demorada
    #And preenche o novo campo
    And verificar se existe 
    And click retry 
    And botão lista Dom
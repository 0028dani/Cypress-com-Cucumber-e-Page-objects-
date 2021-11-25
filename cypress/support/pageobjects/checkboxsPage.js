import checkboxsElements from "../elements/checkboxsElements";

const primeiroCheckboxs =  new checkboxsElements

class AtuandoComCheckboxs {
    AcessarURL (){
        cy.visit(primeiroCheckboxs.acessandoSite())
    } 
    
    SelecionarPizza (){
        cy.get(primeiroCheckboxs.CheckboxPizza())
        .click()
        .should('be.checked')
    }
    
    fullCheckboxs (){
        cy.get(primeiroCheckboxs.todosOsCheckboxs())
        .click({multiple: true})
    }
    verificarCheckboxPizza (){
        cy.get(primeiroCheckboxs.VerificarCheckboxPizza())
        //.should('be.checked')
        .should('be.checked')
    }
    verificarCheckboxVegetariana(){
        cy.get(primeiroCheckboxs.VerificarCheckboxVegetariana())
        .should('be.checked')
        cy.title().debug()
    }
}

export default  AtuandoComCheckboxs;



//
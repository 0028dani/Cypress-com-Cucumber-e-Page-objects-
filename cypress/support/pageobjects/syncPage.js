  import syncElements from "../elements/syncElements";

const sync = new syncElements

class esperaSinc {
    acessarURL () {
        cy.visit(sync.acessandoSite())
    }
    BotaoRespostaDemorada () {
        cy.get(sync.novoCampo())
        .should('not.exist')

        cy.get(sync.botaoRespostaDemorado())
        .click()
    }

    NovoCampo () {
        cy.get(sync.novoCampo())
        .should('not.exist')

        cy.get(sync.novoCampo())
        .should('exist')

        cy.get(sync.novoCampo())
        .type('Funciona')
    }

    VerificarExistenciaNovoCampo () {
        cy.get(sync.novoCampo())
            .should('not.exist')

        cy.get(sync.botaoRespostaDemorado())
            .click()

        cy.get(sync.novoCampo())
            .should('not.exist')
        
        cy.get(sync.novoCampo())
            .should('exist')
            .type('Funciona')

    }

    ClickRetry() {
        cy.get(sync.clickretry())
            .click()
            .click()
            .should('have.value', '111')
    }

    // diferença de should e then
    botaoListDom() {
        cy.get(sync.ListarDom())
            //.click()
        //cy.get(sync.span())
        .should($el => {
            //console.log($el)
            expect($el).to.have.length(1)
            return 2
        }). and('have.id', 'buttonListDOM')

    }

}

export default esperaSinc
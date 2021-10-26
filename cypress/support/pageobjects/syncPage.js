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

}

export default esperaSinc
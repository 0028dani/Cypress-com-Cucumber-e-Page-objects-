import findElements from "../elements/findElements";

const find = new findElements

class esperaLista {
    acessarURL () {
        cy.visit(find.acessandoSite())
    }
    Item1 () {
        cy.get(find.BotaoLista())
            .click()
        
        cy.get(find.BuscaLista())
            .find(find.Span())    
            .should('contain', 'Item 1')
    }

    Item2 (){
        cy.get(find.BotaoLista())
        .click()
    
    cy.get(find.BuscaLista())
        .find(find.Span())    
        .should('contain', 'Item 2')
    }

    ListaDomItem1 () {
        cy.get(find.BotaoListaDom())
            .click()
        
        cy.get(find.BuscaListaSpan())
            //.find(find.Span())    
            .should('contain', 'Item 1')
    } 

    ListaDomItem2 () {
        cy.get(find.BotaoListaDom())
            .click()
    
        cy.get(find.BuscaListaSpan())
            //.find(find.Span())    
            .should('contain', 'Item 2')  
    }

}

export default esperaLista
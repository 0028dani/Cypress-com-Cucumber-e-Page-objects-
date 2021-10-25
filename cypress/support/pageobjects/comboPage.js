import comboElements from "../elements/comboElements"

const primeiroCombo = new comboElements

class AtuandoComCombo {
    acessarUrl () {
        cy.visit(primeiroCombo.acessandoSite())
    }
    Combo() {
        cy.get(primeiroCombo.combo())
        .select('2o grau completo')
        .should('have.value', '2graucomp')

        cy.get(primeiroCombo.combo())
        .select('1graucomp')
        .should('have.value', '1graucomp')
    }
    ComboMultiplo () {
        cy.get(primeiroCombo.comboMultiplo())
        .select(['natacao', 'Corrida', 'nada'])
    }
}

export default AtuandoComCombo
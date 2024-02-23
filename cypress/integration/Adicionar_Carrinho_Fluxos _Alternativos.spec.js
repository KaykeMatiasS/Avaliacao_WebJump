// <reference type="Cypress" />
describe('Adicionar produto ao carrinho através da página de produto', function(){
})

    //Para variar do primeiro exemplo, vou realizar um fluxo especifico de produto
    it("Acesso ao menu de jaquetas femininas.", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.get('#ui-id-12').click({force: true})
        })
    
    //Adição de produto ao carrinho com validação de mensagem de sucesso
    it("Adcionar jaqueta no carrinho.", function() {
        cy.get(".product-item-photo").first().click();
        cy.get('#option-label-size-157-item-171').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#qty').type("{backspace}1");
        cy.get('#product-addtocart-button').click();
        cy.get('.message-success').should('be.visible')
    })

//Utilização de mais um describe para vizualização dentro do Cypress
describe('Adicionar produto ao carrinho através do menu de busca', function(){
})
    
    //Especificação de produto através do campo de busca
    it("Escrever nome do produto na aba de busca", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.get('#search').type('Olivia 1/4 Zip Light Jacket{enter}')
        })

    //Adição de produto ao carrinho, mantendo a validação com mensagem de sucesso
    it("Adcionar jaqueta no carrinho.", function() {
        cy.get(".product-item-photo").first().click();
        cy.get('#option-label-size-157-item-171').click();
        cy.get('#option-label-color-93-item-50').click();
         cy.get('#qty').type("{backspace}1");
         cy.get('#product-addtocart-button').click();
        cy.get('.message-success').should('be.visible')
     })

   
   

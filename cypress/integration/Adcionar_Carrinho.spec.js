// <reference type="Cypress" />
describe('Adicionar produto ao carrinho', function(){
})
    it("Acesso ao menu de produtos.", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')
        //Acesso a pagina de novidades
        cy.contains("What's New").click();
        cy.url().should("include", "/what-is-new");
    })
    it("Selecionar um produto e adicioná-lo ao carrinho", function() {
        //Este script seleciona o primeiro produto apresentado em tela através de sua imagem
        cy.get(".product-item-photo").first().click();
        //Os comandos abaixo especificam as caracteristicas do produto, sendo respectivamente Tamanho, Cor e Quantidade
        cy.get('#option-label-size-157-item-175').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#qty').type("{backspace}1");
        //Confirmação do Pedido
        cy.get('#product-addtocart-button').click();
        //Validação realizada através da mensagem de sucesso
        cy.get('.message-success').should('be.visible')
    })
    it("Acessar carrinho", function() {
        cy.get('.showcart').click();
        cy.wait(2000)
        cy.get('#top-cart-btn-checkout').click()
    })      
   
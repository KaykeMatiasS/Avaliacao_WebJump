// <reference type="Cypress" />
describe('Finalização de Compra', function(){
})
    //Script feito em apenas um case por perca de informação durante a navegação do site

    it("Fluxo de compra com cliente Logado", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')

        //Realizar login com usuário fornecido
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.contains("Sign In").click();
        cy.url().should("include", "/customer/account/login/referer");
        cy.get("#email").type("roni_cost@example.com");
        cy.get("#pass").type("roni_cost3@example.com");
        cy.get('button[class="action login primary"]').click();

        //Acesso a loja
        cy.contains("What's New").click();
        cy.url().should("include", "/what-is-new");

        //Realizar adição de produto ao carrinho
        cy.get(".product-item-photo").first().click();
        cy.get('#option-label-size-157-item-175').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#qty').type("{backspace}1");
        cy.get('#product-addtocart-button').click();

        //Wait está sendo utilizado para que os elementos de tela tenham tempo de carregar propriamente
        cy.wait(2000)
        cy.get('.message-success').should('be.visible')
        cy.get('.showcart').click();
        cy.wait(2000)
        cy.get('#top-cart-btn-checkout').click()
        cy.wait(6000)

        //Após direcionamento para o menu de envio e endereço, seleção do método de entrega, optando por "fixo"
        cy.get('input[type="radio"][value="flatrate_flatrate"]').check()
        cy.get('button[class="button action continue primary"]').click();

        //Finalização de pedido
        cy.wait(5000)
        cy.get('button[class="action primary checkout"]').click();
    
    })    
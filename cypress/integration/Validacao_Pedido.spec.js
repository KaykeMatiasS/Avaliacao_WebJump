// <reference type="Cypress" />
describe('Validação de Pedido', function(){
})
    //Acesso a pagina de Login
    it("Acesso ao login de Usuário.", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.contains("Sign In").click();
        cy.url().should("include", "/customer/account/login/referer");
    ;
    })

    //Teste realizado em uma única case, para evitar perca de login, poderia ser também utilizado o método .session().
    it("Vizuaização da lista de pedidos e também so detalhamento do pedido", function () {
        //Utilização de login fornecido 
        cy.get("#email").type("roni_cost@example.com");
        cy.get("#pass").type("roni_cost3@example.com");
        cy.get('button[class="action login primary"]').click();
        //Wait utilizado para carregamento da página
        cy.wait(5000)
        //no cy.get abaixo, foi necessário buscar o botão de My Account através do elemento e link de redirecionamento, pois a cada refresh do site o ID do objeto era alterado.
        cy.get('a[href*="https://magento2-demo.magebit.com/customer/account/"]').first().click({force: true});
        //Verificação de informações do ultimo pedido realizado
        cy.get('a[href*="https://magento2-demo.magebit.com/sales/order/view/order_id/2/"]').first().click();
        
        
        
        });

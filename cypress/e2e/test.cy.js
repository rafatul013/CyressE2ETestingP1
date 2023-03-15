describe('Add cart',()=>{
    it('Tittle',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
    })
    it('Add to cart', ()=>{
        cy.xpath("//input[@id='small-searchterms']").type("Apple MacBook Pro 13-inch")
        cy.xpath("//button[contains(text(), 'Search')]").click()
        cy.get('.product-title > a').click() //class>tag
        cy.get('#add-to-cart-button-4').click() //id
        
        cy.xpath("//body[1]/div[5]/div[1]/p[1]/a[1]").click()
        cy.xpath("//*[@id='shopping-cart-form']/div[1]/table/tbody/tr/td[4]/span").contains("$1,800.00")
        cy.xpath("//*[@id='shopping-cart-form']/div[1]/table/tbody/tr/td[6]/span").contains("$3,600.00")
        cy.wait(5000)

        cy.get('.menu-toggle').screenshot()

    })
})
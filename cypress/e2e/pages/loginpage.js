import data from '../pages/loginpagelocators.json'
class login{
    login_Process(){
        // let username="//body/div[@id='app']/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[2]/input[1]"
        // let password="//body/div[@id='app']/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[2]/div[1]/div[2]/input[1]"
        // let submit="//body/div[@id='app']/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[3]/button[1]"

       // const data1 = require('../pages/loginpagelocators.json')
    //    cy.xpath(data1.username).type(data.user_value)
    //    cy.xpath(data1.password).type(data.user_pass)
    //    cy.xpath(data1.submit).click()

        cy.xpath(data.username).type(data.user_value)
        cy.xpath(data.password).type(data.user_pass)
        cy.xpath(data.submit).click()
    }
}
export default login
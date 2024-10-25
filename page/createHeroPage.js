class CreateNewHeroPage {

    selectorsList(){
       const selectors = {
            nameField : "[name='name']",
            priceField : "[name='price']",
            fansField : "[name='fans']",
            savesField : "[name='saves']",
            saveButton : ".bg-blue-700",
            powersArray : "option",
       }
       return selectors
    }
    
    namingTheHero(name){
        cy.get(this.selectorsList().nameField).click().clear().type(name)
    }

    pricingTheHero(price){
        cy.get(this.selectorsList().priceField).click().clear().type(price)
    }

    givingFansToTheHero(fans){
        cy.get(this.selectorsList().fansField).click().clear().type(fans)
    }

    registeringHeroSaves(saves){
        cy.get(this.selectorsList().savesField).click().clear().type(saves)
    }

    selectHeroPower(){
        cy.get(this.selectorsList().powersArray).eq(5).click()
    }

    createHero(){
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }

}
export default CreateNewHeroPage
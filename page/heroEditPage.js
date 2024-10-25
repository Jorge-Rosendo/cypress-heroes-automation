class HeroEditPage {

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

    editHeroName(name){
        cy.get(this.selectorsList().nameField).click().clear().type(name)
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }

    editHeroPrice(newPrice){
        cy.get(this.selectorsList().priceField).click().clear().type(newPrice)
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }

    editFansNumber(newFans){
        cy.get(this.selectorsList().fansField).click().clear().type(newFans)
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }

    editSavesNumber(newSaves){
        cy.get(this.selectorsList().savesField).click().clear().type(newSaves)
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }

    changingHeroPower(){
        cy.get(this.selectorsList().powersArray).eq(5).click({ force: true })
        cy.wait(500) 
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }

}
export default HeroEditPage
class HeroEditPage {

    selectorsList(){
        const selectors = {
            priceField : "[name='price']"
        }
        return selectors
    }

    editHeroPrice(newPrice){
        cy.get(this.selectorsList().priceField).click().clear().type(newPrice)
    }

}
export default HeroEditPage


class MainPage {

    selectorsList(){
        const selectors = {
            logoHeroes : "[src='/images/cyheroes-logo.svg']",
            loginButton : "nav button",
            emailField : "[name='email']",
            passwordField : "[name='password']",
            signInButton : ".text-white",
            createHeroButton : "[href='/heroes/new']",
            invalidEmailOrPasswordMessage : ".text-red-500",
            likeButton : "[data-cy='like']",
            moneyButton : "[data-cy='money']",
            optionsButton : ".justify-end button",
            editButton : "[data-cy='pencil']",
            deleteButton : "[data-cy='trash']",
            locationConfirmationOnEditPage : ".transition-all"
        }
        return selectors
    }

    accessWebsite(){
        cy.visit("http://localhost:3000/heroes")
        cy.get(this.selectorsList().logoHeroes) //checking if the location is right!
    }

    login(email, password){
        cy.visit("http://localhost:3000/heroes")
        cy.get(this.selectorsList().logoHeroes)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    verifySuccessfulLogin(){
        cy.get(this.selectorsList().createHeroButton)
    }

    invalidLoginMessage (){
        cy.get(this.selectorsList().invalidEmailOrPasswordMessage)
    }

    checkLikeButton(){
        cy.get(this.selectorsList().likeButton).eq(0).click()
    }

    checkMoneyButton(){
        cy.get(this.selectorsList().moneyButton).eq(0).click()
    }

    checkNoHireHeroButton(){
        cy.get(this.selectorsList().optionsButton).eq(1).click()
    }
    
    checkYesHireHeroButton(){
        cy.get(this.selectorsList().optionsButton).eq(0).click()
    }

    checkEditButton(){
        cy.get(this.selectorsList().editButton).eq(0).click()
        cy.get(this.selectorsList().locationConfirmationOnEditPage)
    }

    checkDeleteButton(){
        cy.get(this.selectorsList().deleteButton).eq(0).click()
        cy.get(this.selectorsList().optionsButton).eq(0).click()
    }

}
export default MainPage
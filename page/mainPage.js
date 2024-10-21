import User from "../fixtures/user/userData.json"

class MainPage {

    selectorsList(){
        const selectors = {
            logoHeroes : "[src='/images/cyheroes-logo.svg']",
            loginButton : "nav button",
            emailField : "[name='email']",
            passwordField : "[name='password']",
            signInButton : ".text-white",
            createHeroButton : "[href='/heroes/new']",
            likeButton : "[data-cy='like']",
            moneyButton : "[data-cy='money']",
            hireHeroButton : ".justify-end button",
            editButton : "[data-cy='pencil']",
        }
        return selectors
    }

    accessWebsite(){
        cy.visit("http://localhost:3000/heroes")
        cy.get(this.selectorsList().logoHeroes) //checking if the location is right!
    }

    login(){
        cy.visit("http://localhost:3000/heroes")
        cy.get(this.selectorsList().logoHeroes)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(User.email)
        cy.get(this.selectorsList().passwordField).type(User.password)
        cy.get(this.selectorsList().signInButton).click()
    }

    verifySuccessfulLogin(){
        cy.get(this.selectorsList().createHeroButton)
    }

    checkLikeButton(){
        cy.get(this.selectorsList().likeButton).eq(0).click()
    }

    checkMoneyButton(){
        cy.get(this.selectorsList().moneyButton).eq(0).click()
    }

    checkNoHireHeroButton(){
        cy.get(this.selectorsList().hireHeroButton).eq(1).click()
    }
    
    checkYesHireHeroButton(){
        cy.get(this.selectorsList().hireHeroButton).eq(0).click()
    }

    checkEditButton(){
        cy.get(this.selectorsList().editButton).eq(0).click()
        cy.url().should('eq', 'http://localhost:3000/heroes/1/edit')

    }

}
export default MainPage
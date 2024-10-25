import User from "../fixtures/user/userData.json"
import MainPage from "../page/mainPage"

const mainPage = new MainPage()

describe('Testing funcionality of main page in cy.heroes', () => {

    const login = () => {
        mainPage.accessWebsite()        
        mainPage.login(User.email, User.password)         
        mainPage.verifySuccessfulLogin()
        }

    const yesHireHero = ()=>{
        mainPage.checkMoneyButton()
        mainPage.checkYesHireHeroButton()
        }
        
    const noHireHero = ()=>{
        mainPage.checkMoneyButton()
        mainPage.checkNoHireHeroButton()
        }

    it('Successfully logs into the application', () => {
        login()
    })

    it('Login with wrong email formatting in the app', () => {
        mainPage.login(User.wrongEmail, User.password)
        mainPage.invalidLoginMessage()
    })

    it('Login with wrong password in the app', () => {
        mainPage.login(User.email, User.wrongPassword)
        mainPage.invalidLoginMessage()
    })
    
    it('Checking the functionality of the like button', () => {
        login()
        mainPage.checkLikeButton()
    })

    it('Checking the functionality of the hire button', () => {
        login()
        noHireHero()
        yesHireHero()
    })

    it('Checking the functionality of the edit button', () => {
        login()
        mainPage.checkEditButton()
    })

    it('Checking the functionality of the delete button', () => {
        login()
        mainPage.checkDeleteButton()
    })

    it('Checking the functionality of the create new hero button', () => {
        login()
        mainPage.checkCreateNewHeroButton()
    })
})
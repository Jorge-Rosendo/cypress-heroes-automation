import User from "../fixtures/user/userData.json"
import MainPage from "../page/mainPage"
import CreateNewHeroPage from "../page/createHeroPage"

const mainPage = new MainPage()
const createHeroPage = new CreateNewHeroPage()

const login = () => {
    mainPage.accessWebsite()        
    mainPage.login(User.email, User.password)         
    mainPage.verifySuccessfulLogin()
    }

describe ('Creating a new hero', ( ) => {

    it ('Accessing create a hero page', () => {
        login()
        mainPage.checkCreateNewHeroButton()
    })

    it ('Creating a hero', () => {
        login()
        mainPage.checkCreateNewHeroButton()
        createHeroPage.namingTheHero('macacoAzul')
        createHeroPage.pricingTheHero('95')
        createHeroPage.givingFansToTheHero('25')
        createHeroPage.registeringHeroSaves('15')
        createHeroPage.selectHeroPower()
        createHeroPage.createHero()
    })

})
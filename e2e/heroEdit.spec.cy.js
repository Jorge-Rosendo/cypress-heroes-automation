import MainPage from "../page/mainPage"
import HeroEditPage from "../page/heroEditPage"

const mainPage = new MainPage()
const heroEditPage = new HeroEditPage()

describe('Login Heroes App', () => {

    const login = () => {
        mainPage.accessWebsite()        
        mainPage.login()         
        mainPage.verifySuccessfulLogin()
        }
    
    it('Validates Hero Edit page navigation and content', () => {
        login()
        mainPage.checkEditButton()
        heroEditPage.editHeroPrice("120")
    })
})
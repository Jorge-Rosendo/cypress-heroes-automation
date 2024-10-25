import User from "../fixtures/user/userData.json"
import MainPage from "../page/mainPage"
import HeroEditPage from "../page/heroEditPage"

const mainPage = new MainPage()
const heroEditPage = new HeroEditPage()

describe('Login Heroes App', () => {

    const login = () => {
        mainPage.accessWebsite()        
        mainPage.login(User.email, User.password)         
        mainPage.verifySuccessfulLogin()
        }
    
    it('Editing the name of a hero', () => {
        login()
        mainPage.checkEditButton()
        heroEditPage.editHeroName("Teste")
    })

    it('Editing the price of a hero', () => {
        login()
        mainPage.checkEditButton()
        heroEditPage.editHeroPrice("120")
    })

    it("Editing a hero's fans", () => {
        login()
        mainPage.checkEditButton()
        heroEditPage.editFansNumber("120")
    })

    it("Editing a hero's saves", () => {
        login()
        mainPage.checkEditButton()
        heroEditPage.editSavesNumber("120")
    }) 

    it("Changing Hero Power", () => {
        login()
        mainPage.checkEditButton()
        heroEditPage.changingHeroPower()
    })    
})
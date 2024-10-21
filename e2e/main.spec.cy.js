import MainPage from "../page/mainPage"

const mainPage = new MainPage()

describe('Login Heroes App', () => {

    const login = () => {
        mainPage.accessWebsite()        
        mainPage.login()         
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
    
    it('Checks hero interaction buttons functionality', () => {
        login()
        mainPage.checkLikeButton()
        noHireHero()
        yesHireHero()
        mainPage.checkEditButton()
    })
})
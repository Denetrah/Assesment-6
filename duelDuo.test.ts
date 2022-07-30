
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// test("See All Bots should display all bots", () => {
//     expect().toBe("all")
// })

test('If Draw button clicks and displays bots', async () => {
        await driver.findElement(By.id('draw')).click()
        const options = await driver.findElement(By.id('choices'))
        const displayed = await options.isDisplayed()
        expect(displayed).toBeTruthy()
        await driver.sleep(3000)
    })
    
    test('If see all bots button clicks and displays bots', async () => {
    await driver.findElement(By.id('see-all')).click()
     const all = await driver.findElement(By.id('all-bots'))
    const displayed = await all.isDisplayed()
    expect(displayed).toBeTruthy()
    await driver.sleep(3000)
    })

test('When add to duo is clicked new bot is added', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    // await driver.findElement(By.id('Add to Duo')).click()
    const bot = await driver.findElement(By.id('player-duo'))
    const displayed = await bot.isDisplayed()
   expect(displayed).toBeTruthy()
    await driver.sleep(3000)
})
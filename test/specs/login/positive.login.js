describe('Test Sample Login Register APK', () => {
    it('Apps opened', async() => {
        const header_logo = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.ImageView')
        expect(header_logo).toExist()
        expect(header_logo).toBeDisplayed()

        const header_app_version = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.TextView[1]')
        expect(header_app_version).toExist()
        expect(header_app_version).toBeDisplayed()
        expect(header_app_version).toHaveText('VERSION - V4')

        const button_login = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.Button')
        expect(button_login).toExist()
        expect(button_login).toBeDisplayed()
        expect(button_login).toHaveText('LOGIN')
    })

    it('User input email', async() => {
        const input_email = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/TextInputLayout[1]/android.widget.EditText')
        await (input_email).addValue("tes@email.com")
    })

    it('User input password', async() => {
        const input_password = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/TextInputLayout[2]/android.widget.EditText')
        await (input_password).addValue("password123")
    })

    it('User click button login', async() => {
    const button_login = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.Button')
    await (button_login).click()
    })

    it('User see dashboard page', async() => {
        const hello = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.TextView[2]')
        expect (hello).toExist()
        expect (hello).toBeDisplayed()

        const email = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.TextView[3]')
        expect (email).toExist()
        expect (email).toBeDisplayed()
    })
})
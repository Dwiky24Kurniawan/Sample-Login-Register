describe('Test Sample Login Register APK', () => {
    it('Apps opened', async() => {
        const header_logo = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.ImageView')
        expect(header_logo).toExist()
        expect(header_logo).toBeDisplayed()

        const header_app_version = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.TextView[1]')
        expect(header_app_version).toExist()
        expect(header_app_version).toBeDisplayed()
        expect(header_app_version).toHaveText('VERSION - V4')

        const link_register = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.TextView[2]')
        expect(link_register).toExist()
        expect(link_register).toBeDisplayed()
        expect(link_register).toHaveText('No account yet? Create one')
        await (link_register).click()
    })

    it('User input name', async() => {
        const input_name = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/TextInputLayout[1]/android.widget.EditText')
        await (input_name).addValue("Dwiky")
    })

    it('User input email', async() => {
        const input_email = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/TextInputLayout[2]/android.widget.EditText')
        await (input_email).addValue("tes@email.com")
    })

    it('User input password', async() => {
        const input_password = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/TextInputLayout[3]/android.widget.EditText')
        await (input_password).addValue("password123")
    })

    it('User input confirm password', async() => {
        const input_confirm_password = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/TextInputLayout[4]/android.widget.EditText')
        await (input_confirm_password).addValue("password123")
    })

    it('User click button register', async() => {
        const button_register = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/android.widget.Button')
        await (button_register).click()
    })

    it('User see message : registration successful', async () => {
        const alert = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.support.v7.widget.LinearLayoutCompat/TextInputLayout[4]/android.widget.LinearLayout/android.widget.TextView')
        expect(alert).toExist()
        expect(alert).toBeDisplayed()
        expect(alert).toHaveText("Registration Successful")
    })
})
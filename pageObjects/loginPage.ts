import { Page } from 'playwright';

export class LoginPage {
    private page: Page;
    private usernameInput = '[name="username"]';
    private passwordInput = '[name="password"]';
    private loginButton = '.oxd-button';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async enterUsername(username: string) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password: string) {
        await this.page.fill(this.passwordInput, password);
    }

    async clearUsername() {
        await this.page.fill(this.usernameInput, "");
    }

    async clearPassword() {
        await this.page.fill(this.passwordInput, "");
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    async getErrorMessageInvalidCredentials() {
        return this.page.locator('text=Invalid credentials');
    }

    async getErrorMessageMissingCredentials() {
        return this.page.locator('text=Required');
    }

}

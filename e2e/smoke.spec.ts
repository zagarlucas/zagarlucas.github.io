import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Lucas Zagar/);
});

test('starts on main page', async ({ page }) => {
    await page.goto('/');
    // Check if some key section is present
    await expect(page.locator('h2')).toContainText(['Experiencia Laboral', 'Formación Académica']);
});

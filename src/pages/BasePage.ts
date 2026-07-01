import { Page } from '@playwright/test';

/**
 * BasePage is the root of the Page Object hierarchy.
 *
 * Single responsibility: hold the shared Playwright `Page` instance.
 *
 * Following ADR-003 (BasePage Strategy) and the YAGNI principle, no helper
 * methods, navigation methods, or utilities are added here until they are
 * actually required by multiple Page Objects.
 */
export abstract class BasePage {
  constructor(protected readonly page: Page) {}
}

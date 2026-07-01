# ADR-001 – Framework Philosophy

## Status

Accepted

## Context

This framework is intended to serve as the foundation for real-world Playwright + TypeScript automation projects.

The primary goals are:

- Maintainability
- Readability
- Scalability
- Reusability
- Clear separation of responsibilities

The framework should be easy to extend and easy to understand by any QA Automation Engineer joining the project.

---

# Decisions

## Tests

Tests describe business behavior.

Tests must:

- Read like business scenarios.
- Contain all assertions.
- Never interact directly with locators.
- Never contain implementation details.
- Use Page Objects and Components only.

Good example:

```ts
await loginPage.login(standardUser);

await inventoryPage.addProduct(backpack);

await expect(cartPage.shoppingCartBadge).toHaveText("1");
```

---

## Page Objects

A Page Object represents one application page.

Responsibilities:

- Encapsulate UI interactions.
- Expose business-oriented methods.
- Hide implementation details.
- Own the locators of that page.

A Page Object must NOT:

- Contain assertions.
- Know business validations.
- Return raw locators unless they are intentionally exposed.

---

## Components

Components represent reusable UI sections shared across multiple pages.

Examples:

- Header
- Navigation Bar
- Footer
- Sidebar
- Modal
- Shopping Cart Icon

If the same UI appears in multiple pages, it should become a Component.

---

## Helpers

Helpers contain reusable logic that does not belong to any page.

Examples:

- Random data generation
- File utilities
- Date formatting
- JSON readers
- Screenshot utilities

Helpers never contain business logic.

---

## Assertions

Assertions always belong inside tests.

Page Objects must never verify business expectations.

---

## Naming

### Files

Use PascalCase.

Examples:

- LoginPage.ts
- InventoryPage.ts
- HeaderComponent.ts
- Users.ts

---

### Methods

Use verbs describing business actions.

Good:

- login()
- logout()
- addProduct()
- checkout()

Avoid implementation-oriented names like:

- clickLoginButton()
- fillUsername()
- clickSubmit()

---

## Locators

Prefer:

- getByRole()
- getByLabel()
- getByTestId()
- getByText()

Avoid XPath unless no stable alternative exists.

Expose locators as `readonly` only when tests legitimately need access to them.

Otherwise keep them private.

---

## Guiding Principle

Optimize the code to be read rather than written.

Future maintainability is more important than short-term implementation speed.

### Inheritance

All Page Objects must inherit from BasePage.

The inheritance exists only to share common behavior.

If a feature is used by only one page, it must remain inside that page.
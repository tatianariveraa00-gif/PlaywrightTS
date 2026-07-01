# ADR-002 – Locator Strategy

## Status

Accepted

---

# Context

A reliable locator strategy is essential for maintaining stable and readable automated tests.

The framework should prioritize locators that best represent how users interact with the application while remaining resilient to UI changes.

Whenever possible, the chosen strategy should minimize maintenance effort and avoid brittle selectors.

---

# Decision

The framework will follow a prioritized locator strategy.

Locators must always use the highest-priority option available.

Priority order:

1. getByRole()
2. getByLabel()
3. getByTestId()
4. getByText()
5. CSS selectors
6. XPath (last resort)

---

## Locator Priority

### 1. getByRole()

Preferred whenever possible.

Reason:

- Reflects how users interact with the application.
- Improves accessibility awareness.
- Highly resilient.

Example

```ts
page.getByRole('button', { name: 'Login' })
```

---

### 2. getByLabel()

Preferred for form fields.

Reason:

- Stable.
- Human-readable.
- Accessibility-friendly.

Example

```ts
page.getByLabel('Username')
```

---

### 3. getByTestId()

Preferred when the application exposes dedicated testing attributes.

The framework standardizes Playwright's `getByTestId()` API regardless of the underlying HTML attribute.

Applications may use:

- data-testid
- data-test

The attribute is configured globally through:

```ts
testIdAttribute
```

This allows Page Objects to remain independent from the application's implementation.

Example

```ts
page.getByTestId('login-button')
```

---

### 4. getByText()

Acceptable only when the displayed text is stable and represents business functionality.

Avoid using dynamic or localized text.

Example

```ts
page.getByText('Checkout')
```

---

### 5. CSS Selectors

Use only when semantic locators are unavailable.

Selectors should be as stable and readable as possible.

Avoid deep CSS chains.

Good:

```ts
page.locator('.shopping-cart-link')
```

Avoid:

```ts
page.locator('#root > div > div > div:nth-child(2) > button')
```

---

### 6. XPath

XPath should be considered the last option.

It may be used only when no stable alternative exists.

If XPath is introduced, its usage should be documented in the related Page Object.

---

# General Rules

Prefer semantic locators over implementation details.

Avoid:

- nth-child
- absolute XPath
- long CSS chains
- fragile DOM traversal

Locators should describe the business element rather than the HTML structure.

---

# Page Objects

Locators belong exclusively inside Page Objects or Components.

Tests must never create locators directly.

Good

```ts
await loginPage.login(standardUser);
```

Avoid

```ts
await page.locator('#username').fill(...);
```

---

# Framework Configuration

Playwright is configured to support the application's testing attribute through:

```ts
testIdAttribute
```

This abstraction allows the framework to switch between `data-testid` and `data-test` without modifying any Page Object.

---

# Rationale

A consistent locator strategy:

- Improves readability.
- Reduces flaky tests.
- Simplifies maintenance.
- Decouples Page Objects from HTML implementation details.
- Encourages accessible application development.

---

# Consequences

Advantages

- Stable tests.
- Consistent codebase.
- Easier onboarding.
- Easier framework migration.

Trade-offs

- Some legacy applications may require CSS selectors or XPath.
- Exceptions should remain isolated and documented.
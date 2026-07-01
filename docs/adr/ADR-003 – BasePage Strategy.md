# ADR-003 – BasePage Strategy

## Status

Accepted

## Context

As the framework grows, multiple Page Objects will share common behavior.

A common abstraction is needed to avoid duplication while keeping the architecture simple and maintainable.

However, introducing a large BasePage too early often leads to unnecessary abstractions and tightly coupled pages.

---

# Decision

The framework will use an abstract BasePage.

Initially, BasePage will have a single responsibility:

- Hold the Playwright Page instance.

```ts
export abstract class BasePage {
    constructor(protected readonly page: Page) {}
}
```

No helper methods, navigation methods or utilities will be added until they are required by multiple Page Objects.

---

## Responsibilities

BasePage is responsible for:

- Holding the shared Page instance.
- Acting as the root of the Page Object hierarchy.

BasePage is NOT responsible for:

- Login
- Navigation
- Assertions
- Waiting strategies
- Generic helpers
- Business logic

These concerns belong elsewhere and should only be abstracted when duplication appears.

---

## Rationale

This approach follows the YAGNI principle (You Aren't Gonna Need It).

The framework will introduce abstractions only when a real need exists.

The goal is to keep inheritance shallow and Page Objects easy to understand.

---

## Consequences

Advantages

- Consistent architecture.
- Easy to extend.
- Minimal inheritance.
- Reduced technical debt.

Trade-offs

- Some code duplication may temporarily exist.
- New common functionality will be evaluated before being moved into BasePage.
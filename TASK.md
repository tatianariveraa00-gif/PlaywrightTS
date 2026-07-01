# Feature-004

## Goal

Introduce a minimal BasePage abstraction following ADR-003.

---

## Scope

- Create BasePage.
- Refactor LoginPage to extend BasePage.
- Keep the public API unchanged.
- Do not modify test behavior.

---

## Acceptance Criteria

- [ ] BasePage created.
- [ ] LoginPage extends BasePage.
- [ ] BasePage only encapsulates the shared Playwright Page instance.
- [ ] Public API unchanged (`navigate()` and `login()`).
- [ ] No helper methods added to BasePage.
- [ ] No behavior changes.
- [ ] Lint passes.
- [ ] Tests pass.

---

## Out of Scope

- InventoryPage
- CartPage
- Components
- Fixtures
- API
- Environment configuration
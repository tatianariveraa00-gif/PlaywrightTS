## BasePage

- Every Page Object must inherit from BasePage.
- BasePage should remain minimal.
- New shared methods require at least two Page Objects before being promoted to BasePage.

## Architecture Evolution

The framework must evolve incrementally.

Each feature should introduce one architectural concept.

Avoid implementing future requirements before they become necessary.
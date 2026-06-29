# 🎯 Enterprise Playwright Automation Framework

## 🧭 Objetivo

Construir un framework de automatización de pruebas E2E con Playwright + TypeScript que sea:

- Reutilizable en proyectos reales de empresa
- Escalable (100+ tests sin perder mantenibilidad)
- Fácil de adaptar a distintos entornos (QA, DEV, UAT)
- Compatible con UI + API testing
- Base para iniciar proyectos desde cero en trabajos nuevos

Este framework no es solo educativo, sino una plantilla profesional lista para producción.

---

## 👥 Público objetivo

Este framework está diseñado para:

- QA Automation Engineers
- QA Seniors que lideran frameworks
- Equipos de producto que necesitan automatización desde cero
- Uso personal como base en nuevos proyectos laborales

---

## 🏗️ Principios de arquitectura

El framework sigue estos principios:

- Separación clara de responsabilidades
- Reutilización de código (DRY)
- Mantenibilidad por encima de complejidad
- Tests independientes entre sí
- Código legible antes que “inteligente”
- Escalabilidad horizontal (agregar tests sin romper estructura)

---

## 🧱 Stack tecnológico

- Playwright
- TypeScript
- Node.js
- pnpm
- ESLint
- Prettier
- dotenv
- GitHub Actions (CI)
- Allure Reports
- Docker (opcional en fase avanzada)

---

## 📂 Estructura del proyecto (alto nivel)

- pages → Page Objects
- components → componentes reutilizables de UI
- tests → casos de prueba organizados por dominio
- api → helpers de API testing
- fixtures → inyección de dependencias y datos
- helpers → funciones reutilizables
- utils → utilidades generales
- data → datos de prueba
- config → configuración por entorno
- docs → documentación del framework

---

## 🧪 Aplicación bajo prueba

- Sauce Demo (https://www.saucedemo.com)

Se utilizará para:

- Login/logout
- Flujo de compra
- Validaciones de carrito
- Casos negativos
- Testing E2E completo

---

## 🚀 Roadmap del proyecto

### v0.1 — Setup base
- Inicialización del proyecto
- Playwright instalado
- TypeScript configurado
- ESLint + Prettier
- Primer test básico

### v0.2 — Arquitectura base
- Page Object Model
- Estructura de carpetas
- Helpers y utils

### v0.3 — Framework reusable
- Fixtures
- Data-driven testing
- Config por ambientes

### v0.4 — API testing
- Validaciones de API
- Integración UI + API

### v0.5 — CI/CD
- GitHub Actions
- ejecución automática de tests

### v1.0 — Enterprise ready
- Docker
- Allure Reports completos
- Paralelización
- Estrategia de tags y suites

---

## 🤖 Uso de IA en el proyecto

Se utilizarán herramientas de IA como:

- ChatGPT → arquitectura, diseño, revisión técnica
- Claude Code + MCP → generación y refactorización de código
- Copilot → autocompletado

Reglas:

- Ningún código generado por IA se acepta sin revisión
- Toda decisión técnica debe ser entendida
- La IA es asistente, no arquitecto final

---

## 📏 Estándares de calidad

- No usar `waitForTimeout`
- Uso correcto de locators
- Código tipado en TypeScript
- Tests independientes
- Naming claro y consistente
- Evitar duplicación de lógica

---

## 🚫 Qué se evita

- Tests frágiles
- Código duplicado
- Dependencia de sleep
- Lógica dentro de tests (debe ir a pages/helpers)
- Estructuras acopladas

---

## 🧠 Filosofía del proyecto

Este framework está diseñado para ser:

> "El punto de partida de cualquier proyecto de automatización profesional"

No es un tutorial. Es una base real de trabajo.
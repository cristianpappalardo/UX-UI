# CSS Specificity — Detailed Calculation

This document calculates the specificity of each selector using the standard CSS specificity tuple:

- **A** = number of **ID selectors** (`#id`)
- **B** = number of **class selectors**, **attribute selectors**, and **pseudo-classes** (`.class`, `[attr=...]`, `:hover`, `:nth-child(...)`)
- **C** = number of **type selectors** and **pseudo-elements** (`div`, `a`, `li`, `::before`)

Specificity format: **(A, B, C)**

> Important:
> - Combinators (` `, `>`, `+`, `~`) do **not** add specificity.
> - Universal selector (`*`) adds **0**.
> - Values inside pseudo-classes like `:nth-child(2n+1)` do not add extra points beyond the pseudo-class itself.

---

## 1) `ul li {}`
### Breakdown
- `ul` → type selector → **C +1**
- `li` → type selector → **C +1**

### Specificity
**(0, 0, 2)**

### Why
This selector has only element names and no class/id/pseudo-class parts.

---

## 2) `ul > li {}`
### Breakdown
- `ul` → type selector → **C +1**
- `li` → type selector → **C +1**
- `>` → combinator → **+0**

### Specificity
**(0, 0, 2)**

### Why
The child combinator changes matching behavior but not specificity.

---

## 3) `body > #main.mobile a:hover {}`
### Breakdown
- `body` → type selector → **C +1**
- `#main` → ID selector → **A +1**
- `.mobile` → class selector → **B +1**
- `a` → type selector → **C +1**
- `:hover` → pseudo-class → **B +1**
- `>` and descendant space → combinators → **+0**

### Specificity
**(1, 2, 2)**

### Why
Contains one ID (strong), two B-level selectors (class + pseudo-class), and two element selectors.

---

## 4) `div p > span {}`
### Breakdown
- `div` → type selector → **C +1**
- `p` → type selector → **C +1**
- `span` → type selector → **C +1**
- `>` and space → combinators → **+0**

### Specificity
**(0, 0, 3)**

### Why
Three element selectors only.

---

## 5) `.users .name {}`
### Breakdown
- `.users` → class selector → **B +1**
- `.name` → class selector → **B +1**

### Specificity
**(0, 2, 0)**

### Why
Two class selectors, no IDs, no element selectors.

---

## 6) `[href$='.pdf'] {}`
### Breakdown
- `[href$='.pdf']` → attribute selector → **B +1**

### Specificity
**(0, 1, 0)**

### Why
Attribute selectors belong to the B bucket.

---

## 7) `:hover {}`
### Breakdown
- `:hover` → pseudo-class → **B +1**

### Specificity
**(0, 1, 0)**

### Why
Pseudo-classes are B-level selectors.

---

## 8) `div .name {}`
### Breakdown
- `div` → type selector → **C +1**
- `.name` → class selector → **B +1**

### Specificity
**(0, 1, 1)**

### Why
One class and one type selector.

---

## 9) `a[href$='.pdf'] {}`
### Breakdown
- `a` → type selector → **C +1**
- `[href$='.pdf']` → attribute selector → **B +1**

### Specificity
**(0, 1, 1)**

### Why
Same weight structure as `div .name`: one B-level + one C-level selector.

---

## 10) `.pictures img:hover {}`
### Breakdown
- `.pictures` → class selector → **B +1**
- `img` → type selector → **C +1**
- `:hover` → pseudo-class → **B +1**

### Specificity
**(0, 2, 1)**

### Why
Two B-level parts (class + pseudo-class) and one type.

---

## 11) `.news.breaking.featured {}`
### Breakdown
- `.news` → class selector → **B +1**
- `.breaking` → class selector → **B +1**
- `.featured` → class selector → **B +1**

### Specificity
**(0, 3, 0)**

### Why
Multiple classes on the same element still each count.

---

## 12) `.user #name {}`
### Breakdown
- `.user` → class selector → **B +1**
- `#name` → ID selector → **A +1**

### Specificity
**(1, 1, 0)**

### Why
Any selector with an ID is generally stronger than selectors without IDs.

---

## 13) `#name span {}`
### Breakdown
- `#name` → ID selector → **A +1**
- `span` → type selector → **C +1**

### Specificity
**(1, 0, 1)**

### Why
One ID and one type; no class/attribute/pseudo-class.

---

## 14) `nav#nav > li:hover {}`
### Breakdown
- `nav` → type selector → **C +1**
- `#nav` → ID selector → **A +1**
- `li` → type selector → **C +1**
- `:hover` → pseudo-class → **B +1**
- `>` → combinator → **+0**

### Specificity
**(1, 1, 2)**

### Why
ID + pseudo-class + two element selectors yields a very strong selector.

---

## 15) `li:nth-child(2n+1):hover {}`
### Breakdown
- `li` → type selector → **C +1**
- `:nth-child(2n+1)` → pseudo-class → **B +1**
- `:hover` → pseudo-class → **B +1**

### Specificity
**(0, 2, 1)**

### Why
Two pseudo-classes and one element selector.  
`2n+1` is argument data, not extra specificity.

---

## Final Summary Table

| Selector | Specificity |
|---|---|
| `ul li` | **(0, 0, 2)** |
| `ul > li` | **(0, 0, 2)** |
| `body > #main.mobile a:hover` | **(1, 2, 2)** |
| `div p > span` | **(0, 0, 3)** |
| `.users .name` | **(0, 2, 0)** |
| `[href$='.pdf']` | **(0, 1, 0)** |
| `:hover` | **(0, 1, 0)** |
| `div .name` | **(0, 1, 1)** |
| `a[href$='.pdf']` | **(0, 1, 1)** |
| `.pictures img:hover` | **(0, 2, 1)** |
| `.news.breaking.featured` | **(0, 3, 0)** |
| `.user #name` | **(1, 1, 0)** |
| `#name span` | **(1, 0, 1)** |
| `nav#nav > li:hover` | **(1, 1, 2)** |
| `li:nth-child(2n+1):hover` | **(0, 2, 1)** |

---

## Ordering (Weakest → Strongest)

A practical ordering by tuple comparison (A first, then B, then C):

1. `(0,0,2)` → `ul li`, `ul > li`
2. `(0,0,3)` → `div p > span`
3. `(0,1,0)` → `[href$='.pdf']`, `:hover`
4. `(0,1,1)` → `div .name`, `a[href$='.pdf']`
5. `(0,2,0)` → `.users .name`
6. `(0,2,1)` → `.pictures img:hover`, `li:nth-child(2n+1):hover`
7. `(0,3,0)` → `.news.breaking.featured`
8. `(1,0,1)` → `#name span`
9. `(1,1,0)` → `.user #name`
10. `(1,1,2)` → `nav#nav > li:hover`
11. `(1,2,2)` → `body > #main.mobile a:hover`

When two selectors have exactly the same specificity, the one that appears later in the stylesheet wins (assuming same origin and no `!important`).
# Exercise 01-Alien-Frogs Unit 07

## Request
- On an alien planet you find alien frogs
- Two types: green and orange
- And two sizes: big and small
- Small frogs have dark eyes
- Big frogs have bright eyes
- When frogs are touched their eyes become black

- Create a page full of all possible combinations of alien frogs
- Frogs should fill the page from left to right
- Frogs should wrap if there isn't enough space
- All frogs should change their eye color to black when touched
- The HTML should be valid and complete
- In the readme.md explain your CSS code
- Do all the work in CSS, the HTML should only include elements of this type:
`<div class="frog type1 small">--</div>`
`<div class="frog type2 small">--</div>`

## Approach to solution
### HTML
- The HTML should be valid and complete. I will use the `<!DOCTYPE html>` declaration at the beginning of the document, and I will include the `<html>`, `<head>`, and `<body>` tags.

- Do all the work in CSS, the HTML should only include elements of this type:
`<div class="frog type1 small">--</div>`
`<div class="frog type2 small">--</div>`. I will use the class attribute to specify the type and size of the frog, and I will use the content property in CSS to add the eyes and mouth to the frogs.

### CSS  
- Frogs should fill the page from left to right. I will use the display property and set it to inline. 

- Frogs should wrap if there isn't enough space. I will use the flex-wrap property and set it to wrap.

- All frogs should change their eye color to black when touched. I will use the :hover pseudo-class to change the eye color to black when the frog is touched.


## Understanding Key TypeScript Concepts(BLOG)

When working with TypeScript, choosing the right tool for the Task is essential.Two commonly used typescript features are interfaces and types and three tricky keywords are unknown,never and any.In this blog i will discuss about this two topic.

**Interfaces vs Types:**  
Interfaces are best for defining the shape of objects . Types, on the other hand, are more flexible allowing union types, intersections, and primitive aliases. For example, when working with classes or objects use `interface` and when you need to compose multiple types together use `type` .

**any vs unknown vs never:**  
The `any` type disables type checking, making your code unsafe by default if we didn't give type typescript infer this as any type. Use `unknown` when the type isn't known and in future you'll be forced to do type checks before using it. The `never` type indicates that something should never happen.

Using these features thoughtfully will make your code more robust, safer, and easier to maintain.

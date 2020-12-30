# Propy challenge
## Old MacDonald Had a Farm 🐄 🐐 🐈 🤖

### Checklist
- [-] Task 1
  - [ ] Unit testing
- [-] Task 2
  - [-] Routing
- [ ] Task 3
- [ ] Task 4

### Task 1
Write an app/SPA(single page application) to show 5 verses of the nursery rhyme “Old MacDonald Had a Farm” with 5 animals of your choosing. 
Angular would be preferable, and any framework you are comfortable with is acceptable. 
The verse is repeated for each animal and the appropriate sound for the animal is used e.g. cows go “moo”, ducks go “quack” etc. 

```
Old MACDONALD had a farm
E-I-E-I-O
And on his farm he had a {{ animalName }}
E-I-E-I-O
With a {{ animalSound }} {{ animalSound }} here
And a {{ animalSound }} {{ animalSound }} there
Here a {{ animalSound }}, there a {{ animalSound }}
Everywhere a {{ animalSound }} {{ animalSound }}
Old MacDonald had a farm
E-I-E-I-O
```

```
⭐ Please write a few unit tests for your solution. 
``` 

### Task 2
Extend your app to allow the user to provide their own set of animals and sounds through some UI. 
For example, the user can choose to have 3 animals: cat, dog, peacock and then the app renders the 3 verses. 

```
⭐ It would be nice to have a separate page/route for this task’s 
   solution. (Example task1 - ‘/auto’  task2 - ‘/manual’) 
```

### Task 3
Provide some documentation. For example - Readme.md. 

### Task 4
Deploy the app so it’s available online.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

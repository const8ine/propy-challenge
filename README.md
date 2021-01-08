# Propy challenge

## Deployed app
[https://propy-challenge.web.app/](https://propy-challenge.web.app/)

## Development server

Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`. 

## Build and deployment

Deployment is set up with GitHub Actions and Firebase CLI.
Firebase account is authorized using a token with `workflow` permissions.
Deployment configuration: `firebase.json`.
Build task: `npm run build`.
The build artifacts will be stored in the `dist/propychallenge` directory.

### How to deploy an app
Building and deployment automatically trigger on merge to master branch (`main`).
Make a pull request and merge your branch into `main` branch.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Unit tests run one by one. Module unit tests with nested `describe blocks` and imports are added manually to the `src/test.ts` fie.

---

## Test assignment

### Checklist
- [x] Task 1
  - [x] Unit testing
- [x] Task 2
  - [x] Routing
- [x] Task 3
- [x] Task 4

### Task 1
Write an app/SPA(single page application) to show 5 verses of the nursery rhyme “Old MacDonald Had a Farm” with 5 animals of your choosing. 
Angular would be preferable, and any framework you are comfortable with is acceptable. 
The verse is repeated for each animal and the appropriate sound for the animal is used e.g. cows go “moo”, ducks go “quack” etc. 

**Old MacDonald Had a Farm 🐄 🐐 🐈 🤖**
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
Deploy the app, so it’s available online.


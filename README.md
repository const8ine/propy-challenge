# Propy challenge

## Deployed app
[https://propy-challenge.web.app/](https://propy-challenge.web.app/)

## Development server

Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`. 

---

## Environments
`src/environments` configuration files have the same set both for development and production stands.
`firebaseConfig` — configuration for FireBase.
`mockJsonUrl` — path to JSON file for mocking response from the server for app testing.

## Build and deployment

Deployment is set up with GitHub Actions and Firebase CLI.
Firebase account is authorized on GitHub using a token with `workflow` permissions.
An app authenticates in FireBase using a token specified in `src/environments` configuration files.
Deployment configuration: `firebase.json`.
Build task: `npm run build`.
The build artifacts will be stored in the `dist/propychallenge` directory.

### How to deploy an app
Building and deployment automatically trigger on merge to master branch (`main`).
Make a pull request and merge your branch into `main` branch.

## Running unit tests
`npm run test`

### Notes
Unit tests run one by one. Module unit tests with nested `describe` blocks and imports are added manually to the `src/test.ts` fie.

**UPDATE:**

Added tests for Angular services.

---

## Notes

In `SettingsComponent` I tried to use my experience with PrimeNG.

Other components are made without dependency. I implemented my own UI components in a very simple way just to show how I would do this in a project like this.

`IconComponent` was meant to use only SVG sprites. Then I didn't find any proper SVGs for animals, so I implemented a feature for loading a static image.
I didn't remove SVG sprite, and used it in one place, because I was sorry to remove this functionality.

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
Provide some documentation. For example — README.md. 

### Task 4
Deploy the app, so it’s available online.


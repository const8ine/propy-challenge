// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mockJsonUrl: "assets/data/animals.mock.json",
  firebaseConfig: {
    apiKey: "AIzaSyDtjkGSWJHfdKQPCtbg3QApQUntkQUtJ_o",
    authDomain: "propy-challenge.firebaseapp.com",
    projectId: "propy-challenge",
    storageBucket: "propy-challenge.appspot.com",
    messagingSenderId: "409005616988",
    appId: "1:409005616988:web:bc8ed1778d6c52ddfa1b99"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

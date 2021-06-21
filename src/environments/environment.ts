// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export enum AuthMode
{
  InMemory = 'In Memory',
  CustomServer = 'Custom Server',
  Firebase = 'Firebase'
}

export const environment = {
  production: false,
  authMode: AuthMode.InMemory,
    firebase: {
      apiKey: "AIzaSyC1GhscLOrqXsvSPtBZ4M5th1z-DDfRhsQ",
      authDomain: "lemon-mart-cde0a.firebaseapp.com",
      projectId: "lemon-mart-cde0a",
      storageBucket: "lemon-mart-cde0a.appspot.com",
      messagingSenderId: "156254108844",
      appId: "1:156254108844:web:db0e91a9bfa6cdff7cb309",
      measurementId: "G-E3HBLVVYPM"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

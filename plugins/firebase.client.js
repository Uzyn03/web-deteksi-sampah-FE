import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useRuntimeConfig } from "#app";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Initialize Analytics (optional, only in browser)
  let analytics = null;
  if (process.client && config.public.firebaseMeasurementId) {
    try {
      analytics = getAnalytics(app);
    } catch (error) {
      console.warn("Analytics initialization failed:", error);
    }
  }

  return {
    provide: {
      firebase: app,
      firestore: db,
      analytics,
    },
  };
});

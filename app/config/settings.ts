/**
 * This file returns a set of configurations for the respective environment that the app is running in.
 */

const settings = {
  dev: {
    baseURL: "https://ill-gold-parrot-sock.cyclic.app",
  },
  prod: {
    // update this URL once we deploy to prod env
    baseURL: "https://some-url-in-prod.com",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();

export const selectUserData = state => state.auth.userData;
export const selectAuthenticated = state =>
  state.auth ? state.auth.authenticated : false;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;

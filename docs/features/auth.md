---
sidebar_position: 1
---

# Authentication

We use Single Sign On (SSO) to authenticate the user.

## 0Auth2

We follow the [0Auth](https://oauth.net/2/) protocol to integrate the SSO. For more detailed info refer to:

- [0Auth Documentation](https://oauth.net/2/)
- Saudi Smart ID Integration Guide
<object data={require("../assets/Saudi_Smart_ID_OIDC_Integration_Guide_V1.pdf").default} type="application/pdf" width="100%" height="500px">

  Unable to display PDF file. <a href={require("../assets/Saudi_Smart_ID_OIDC_Integration_Guide_V1.pdf").default}>Download</a> instead
</object>

## How It Works

:::info Prerequisites
You will need to **read the previous documentations** before diving into the implementation.
:::

The login flow using SSO (Single Sign-On) is as follows:

1. **User clicks the Login button**
   - On the login page, the user clicks the "Login" button, which triggers the SSO login process.

2. **PKCE Challenge Generation**
   - The frontend generates a random `code_verifier` and a corresponding `code_challenge` using the PKCE (Proof Key for Code Exchange) method for enhanced security.
   - The `code_verifier` is stored in the browser's local storage for later use.

3. **Redirect to SSO Provider**
   - The user is redirected to the SSO provider with parameters including:
     - `client_id`: The application's client ID.
     - `redirect_uri`: The URI to return to after authentication.
     - `response_type=code`: Requests an authorization code.
     - `scope`: The required scopes (e.g., `openid profile email`).
     - `code_challenge` and `code_challenge_method=S256`: For PKCE.
     - `ui_locales`: The current language/locale.

4. **User Authentication**
   - The user completes authentication with SSO (e.g., via mobile app or other means).

5. **Redirect Back with Authorization Code**
   - After successful authentication, visitsaudi redirects the user back to the application's `redirect_uri` with an authorization `code` in the URL.

6. **Exchange Authorization Code for Tokens**
   - The frontend exchanges the received `code` and the original `code_verifier` (from local storage) with the backend or directly with the SSO provider to obtain access and ID tokens.

7. **Store Tokens and Authenticate User**
   - The access token and user information (such as admin ID) are stored in local storage.
   - The app fetches the admin's profile using the admin ID and sets the authenticated state.

8. **Access Granted**
   - The user is now authenticated and can access protected routes in the dashboard.

If authentication fails or the admin's access is revoked, the user is redirected to the login or access revoked page.

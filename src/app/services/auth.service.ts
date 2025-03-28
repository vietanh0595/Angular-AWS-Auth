import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';

interface idTokenClaims extends JwtPayload {
  'cognito:groups'?: string[];
}

export interface User {
  email: string;
  roles?: string[];
  sub: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData: User | null = null;

  constructor(private readonly oidcSecurityService: OidcSecurityService) {
  }

  async initAuthCheck() {
    // if(this.userData) return;

    const { isAuthenticated, userData, accessToken, idToken, configId } =
      await firstValueFrom(this.oidcSecurityService.checkAuth());

    if (!isAuthenticated) {
      this.oidcSecurityService.authorize();
      return;
    }

    const decodedIdToken = jwtDecode<idTokenClaims>(idToken);

    userData.roles = decodedIdToken['cognito:groups'];

    this.userData = userData;
  }

  logout() {
    // Clear session storage
    if (window.sessionStorage) {
      window.sessionStorage.clear();
    }

    this.userData = null;

    window.location.href =
      'https://ap-southeast-2b99mq6bmq.auth.ap-southeast-2.amazoncognito.com/logout?client_id=73nh4q53hgvg5i2f9er7m86la5&logout_uri=http://localhost:4200/';
  }

  getUser() {
    return this.userData;
  }
}

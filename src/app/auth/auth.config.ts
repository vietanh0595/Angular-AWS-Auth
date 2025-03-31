import { PassedInitialConfig } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';

export const authConfig: PassedInitialConfig = {
  config: {
    authority:
      'https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_b99MQ6bmq',
    redirectUrl: environment.returnUrl,
    clientId: '73nh4q53hgvg5i2f9er7m86la5',
    scope: 'email openid phone',
    responseType: 'code',
  },
};

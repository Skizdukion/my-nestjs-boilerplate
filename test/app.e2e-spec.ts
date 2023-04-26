import request from 'supertest';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from './utils/constant';
import TestApp from './utils/create-test-app';
// import TestApp from './utils/create-test-app';

describe('App e2e', () => {
  let url;
  beforeAll(async () => {
    const randomTestApp = await TestApp.createNewApp();
    url = randomTestApp.url;
  });

  describe('Seeding correctly', () => {
    describe('Login: /api/v1/auth/admin/email/login (POST)', () => {
      it('Success', async () => {
        return request(url)
          .post('/api/v1/auth/admin/email/login')
          .send({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD })
          .expect(200)
          .expect(({ body }) => {
            expect(body.token).toBeDefined();
            expect(body.user.email).toBeDefined();
          });
      });
    });
  });
});

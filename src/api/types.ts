/**
 * Response shape for `GET /auth/me` (matches backend contract).
 */
export type AuthMeResponse = {
  user: {
    id: string;
    email: string;
    fullName: string;
  };
  organization: {
    id: string;
    name: string;
    slug: string;
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};

import { FirstMiddlewareMiddleware } from './first-middleware.middleware';

describe('FirstMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new FirstMiddlewareMiddleware()).toBeDefined();
  });
});

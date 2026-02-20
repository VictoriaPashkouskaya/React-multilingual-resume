import '@testing-library/jest-dom';
import './i18n/i18n';

const originalConsoleError = console.error;

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    const [firstArg] = args;

    if (
      typeof firstArg === 'string' &&
      firstArg.includes('ReactDOMTestUtils.act is deprecated in favor of React.act')
    ) {
      return;
    }

    originalConsoleError(...args);
  });
});

afterAll(() => {
  console.error.mockRestore();
});

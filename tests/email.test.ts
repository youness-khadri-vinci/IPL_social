import { validateEmail } from '../src/email';

test('Email valide doit retourner true', () => {
  expect(validateEmail('test@vinci.be')).toBe(true);
});

test('Email sans @ doit retourner false', () => {
  expect(validateEmail('testvinci.be')).toBe(false);
});

test('Email avec espace doit retourner false', () => {
  expect(validateEmail('te st@vinci.be')).toBe(false);
});
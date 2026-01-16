import { validateEmail } from '../src/email';

// Test pour le point (a) : Au moins un @
    test('doit refuser un email sans @', () => {
        expect(validateEmail('testvinci.be')).toBe(false);
    });

    // Test pour le point (b) : Point dans le domaine et pas à la fin
    test('doit refuser un domaine sans point', () => {
        expect(validateEmail('test@vinci')).toBe(false);
    });

    test('doit refuser si le point est le dernier caractère', () => {
        expect(validateEmail('test@vinci.')).toBe(false);
    });

    // Test pour le point (c) : Aucun espace
    test('doit refuser les espaces', () => {
        expect(validateEmail('te st@vinci.be')).toBe(false);
    });

    // Test pour le point (d) : Texte avant et après le @
    test('doit refuser si rien avant le @', () => {
        expect(validateEmail('@vinci.be')).toBe(false);
    });

    test('doit refuser si rien après le @', () => {
        expect(validateEmail('test@')).toBe(false);
    });

    // Test de succès
    test('doit accepter un email valide', () => {
        expect(validateEmail('youness@vinci.be')).toBe(true);
    });
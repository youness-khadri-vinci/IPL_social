export function validateEmail(email: string): boolean {
    if (email.includes(' ')) return false; // Pas d'espace
    
    const parts = email.split('@');
    if (parts.length !== 2) return false; // Exactement un @
    
    const [local, domain] = parts;
    if (local.length === 0 || domain.length === 0) return false; // Texte avant et après @
    
    if (!domain.includes('.') || domain.endsWith('.')) return false; // Point présent et pas à la fin
    
    return true;
}
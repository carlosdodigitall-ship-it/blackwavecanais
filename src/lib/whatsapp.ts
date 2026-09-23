/**
 * WhatsApp integration for BLACKWAVE
 * Phone: +55 (75) 99246-9425
 */

export const WHATSAPP_PHONE = '5575992469425';

export const WHATSAPP_MESSAGES = {
  DEFAULT: 'Olá! Quero conhecer a BLACKWAVE.',
  MONTHLY: 'Olá! Quero assinar o plano mensal BLACKWAVE de R$ 25.',
  ANNUAL: 'Olá! Quero assinar o plano anual BLACKWAVE de R$ 100.',
  FINAL_CTA: 'Olá! Quero assinar a BLACKWAVE. Gostaria de saber mais sobre os planos.',
} as const;

/**
 * Builds the direct WhatsApp contact URL with encoded message
 */
export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGES.DEFAULT): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

/**
 * Opens WhatsApp in a new tab or window, falling back to top navigation if needed
 */
export function openWhatsApp(message: string = WHATSAPP_MESSAGES.DEFAULT): void {
  const url = getWhatsAppUrl(message);
  
  if (typeof window !== 'undefined') {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = url;
    }
  }
}

export const createWhatsAppLink = (message: string): string => {
  const phoneNumber = '523321594848'; // México con código de país
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

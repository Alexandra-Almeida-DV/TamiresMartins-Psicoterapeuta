export const WHATSAPP = '5516997366306';

export const createWhats = (msg: string) => {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
};

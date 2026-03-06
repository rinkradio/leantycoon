// 60 Direct Clients
export const directClients = Array.from({ length: 61 }, (_, i) => ({
  id: i + 1,
  src: `/clients/client-${i + 1}.webp`,
}));

// 12 Indirect Clients
export const indirectClients = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/clients/client-indirect-${i + 1}.webp`,
}));
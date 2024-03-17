const setupExpiredAt = (expires_in: number): number => {
  return Math.floor(Date.now() / 1000 + expires_in);
};

export default setupExpiredAt;

export const getCircularIndex = (index: number, totalRoutes: number): number => {
  return ((index % totalRoutes) + totalRoutes) % totalRoutes;
};

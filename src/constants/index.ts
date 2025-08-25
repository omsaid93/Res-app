export const ROUTES = {
  HOME: '/',
  RESERVATION: '/reservation',
  LIST: '/list',
} as const;

export const STORAGE_KEYS = {
  RESERVATION_DATA: 'reservationData',
  COUNTER: 'counter',
} as const;

export const RESERVATION_STATUS = {
  CONFIRMED: 'CONFIRMED',
  NOT_CONFIRMED: 'NOT CONFIRMED',
  SEATED: 'SEATED',
  CHECKED_OUT: 'CHECKED OUT',
} as const;

export const SHIFTS = {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
} as const;

export const AREAS = {
  BAR: 'BAR',
  MAIN_ROOM: 'MAIN ROOM',
} as const;

export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export const SORT_FIELDS = {
  NAME: 'name',
  QUANTITY: 'quantity',
} as const;

export const MAX_IMAGE_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = {
  'image/jpeg': ['.jpeg', '.jpg'],
  'image/jpg': ['.jpg'],
  'image/png': ['.png'],
  'image/webp': ['.webp'],
};

export const IMAGE_COMPRESSION = {
  MAX_SIZE_MB: 1,
  MAX_DIMENSION: 400,
  FILE_TYPE: 'image/jpeg'
};
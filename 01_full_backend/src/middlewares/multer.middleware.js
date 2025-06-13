import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuid } from 'uuid';

// Create uploads folder if it doesn't exist
const uploadPath = 'public/temp';
fs.mkdirSync(uploadPath, { recursive: true });

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${uuid()}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);
  }
});

// File filter
const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

// Final upload middleware
export const upload = multer({ storage, fileFilter });
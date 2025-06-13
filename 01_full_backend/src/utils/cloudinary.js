import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// ✅ Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

/**
 * Uploads a file to Cloudinary and deletes the local file
 * @param {string} localFilePath - Path of the file to be uploaded
 * @returns {object|null} Cloudinary response or null if failed
 */
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto'
    });

    // ✅ File uploaded, delete from local storage
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // ❌ Upload failed, delete local file if exists
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    console.error('Cloudinary Upload Error:', error);
    return null;
  }
};

export { uploadOnCloudinary };
import { useRuntimeConfig } from "#app";

export const useCloudinary = () => {
  const config = useRuntimeConfig();

  const uploadImage = async (file) => {
    try {
      // Validasi konfigurasi
      if (!config.public.cloudinaryCloudName) {
        throw new Error(
          "Cloudinary cloud name tidak dikonfigurasi. Periksa file .env"
        );
      }

      if (!config.public.cloudinaryUploadPreset) {
        throw new Error(
          "Cloudinary upload preset tidak dikonfigurasi. Periksa file .env"
        );
      }

      // Validasi file
      if (!file) {
        throw new Error("File tidak ditemukan");
      }

      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        throw new Error("Ukuran file terlalu besar (maksimal 10MB)");
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", config.public.cloudinaryUploadPreset);

      // Optional: Add folder organization
      formData.append("folder", "waste-detection");

      // Optional: Add tags for better organization
      formData.append("tags", "waste,detection,ecodetect");

      console.log("Uploading to Cloudinary:", {
        cloudName: config.public.cloudinaryCloudName,
        uploadPreset: config.public.cloudinaryUploadPreset,
        fileSize: file.size,
        fileType: file.type,
      });

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${config.public.cloudinaryCloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Cloudinary response status:", response.status);

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Cloudinary error response:", errorData);

        // Parse error message if possible
        try {
          const errorJson = JSON.parse(errorData);
          throw new Error(
            `Cloudinary Error: ${errorJson.error?.message || errorData}`
          );
        } catch {
          throw new Error(
            `Cloudinary Error (${response.status}): ${errorData}`
          );
        }
      }

      const data = await response.json();
      console.log("Cloudinary upload success:", data.secure_url);

      return {
        url: data.secure_url,
        publicId: data.public_id,
        width: data.width,
        height: data.height,
        format: data.format,
        bytes: data.bytes,
        resourceType: data.resource_type,
        createdAt: data.created_at,
      };
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  const deleteImage = async (publicId) => {
    try {
      // Note: Deletion requires server-side implementation for security
      // This is just a placeholder for now
      console.log("Delete image:", publicId);

      // For production, you would need to implement this on your backend
      // because deletion requires your API secret which should not be exposed

      return { success: true, message: "Image deletion logged" };
    } catch (error) {
      console.error("Error deleting from Cloudinary:", error);
      throw error;
    }
  };

  const getOptimizedUrl = (publicId, options = {}) => {
    if (!publicId || !config.public.cloudinaryCloudName) return null;

    const {
      width = "auto",
      height = "auto",
      crop = "fill",
      quality = "auto",
      format = "auto",
    } = options;

    return `https://res.cloudinary.com/${config.public.cloudinaryCloudName}/image/upload/w_${width},h_${height},c_${crop},q_${quality},f_${format}/${publicId}`;
  };

  return {
    uploadImage,
    deleteImage,
    getOptimizedUrl,
  };
};

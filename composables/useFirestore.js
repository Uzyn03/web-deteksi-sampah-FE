import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { useNuxtApp } from "#app";

export const useFirestore = () => {
  const { $firestore } = useNuxtApp();

  const saveDetectionResult = async (detectionData) => {
    try {
      const docRef = await addDoc(collection($firestore, "detections"), {
        ...detectionData,
        timestamp: Timestamp.now(),
        createdAt: new Date().toISOString(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error saving detection result:", error);
      throw error;
    }
  };

  const getDetectionHistory = async (limitCount = 50) => {
    try {
      const q = query(
        collection($firestore, "detections"),
        orderBy("timestamp", "desc"),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      const history = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        history.push({
          id: doc.id,
          ...data,
          timestamp: data.timestamp?.toDate() || new Date(data.createdAt),
        });
      });
      return history;
    } catch (error) {
      console.error("Error getting detection history:", error);
      throw error;
    }
  };

  const deleteDetection = async (id) => {
    try {
      await deleteDoc(doc($firestore, "detections", id));
    } catch (error) {
      console.error("Error deleting detection:", error);
      throw error;
    }
  };

  const getStatistics = async () => {
    try {
      const querySnapshot = await getDocs(collection($firestore, "detections"));
      let totalImages = 0;
      let totalOrganik = 0;
      let totalAnorganik = 0;
      const dailyStats = {};
      const weeklyStats = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        totalImages++;

        // Count by dominant type
        if (data.dominantType === "organik") {
          totalOrganik++;
        } else if (data.dominantType === "anorganik") {
          totalAnorganik++;
        }

        // Daily statistics
        const date = data.timestamp?.toDate() || new Date(data.createdAt);
        const dateKey = date.toISOString().split("T")[0];
        if (!dailyStats[dateKey]) {
          dailyStats[dateKey] = { organik: 0, anorganik: 0, total: 0 };
        }
        dailyStats[dateKey].total++;
        if (data.dominantType === "organik") {
          dailyStats[dateKey].organik++;
        } else if (data.dominantType === "anorganik") {
          dailyStats[dateKey].anorganik++;
        }
      });

      return {
        totalImages,
        totalOrganik,
        totalAnorganik,
        dailyStats,
        weeklyStats,
      };
    } catch (error) {
      console.error("Error getting statistics:", error);
      throw error;
    }
  };

  const getRecentActivities = async (limitCount = 10) => {
    try {
      const q = query(
        collection($firestore, "detections"),
        orderBy("timestamp", "desc"),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      const activities = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        activities.push({
          id: doc.id,
          description: `Deteksi sampah ${data.dominantType} berhasil`,
          type: data.dominantType,
          timestamp: data.timestamp?.toDate() || new Date(data.createdAt),
          detectionCount: data.detectionCount || 0,
        });
      });
      return activities;
    } catch (error) {
      console.error("Error getting recent activities:", error);
      throw error;
    }
  };

  const saveEducationContent = async (contentData) => {
    try {
      const docRef = await addDoc(collection($firestore, "education"), {
        ...contentData,
        timestamp: Timestamp.now(),
        createdAt: new Date().toISOString(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error saving education content:", error);
      throw error;
    }
  };

  const getEducationContent = async () => {
    try {
      const querySnapshot = await getDocs(collection($firestore, "education"));
      const content = [];
      querySnapshot.forEach((doc) => {
        content.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return content;
    } catch (error) {
      console.error("Error getting education content:", error);
      throw error;
    }
  };

  return {
    saveDetectionResult,
    getDetectionHistory,
    deleteDetection,
    getStatistics,
    getRecentActivities,
    saveEducationContent,
    getEducationContent,
  };
};

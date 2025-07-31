import { collection, addDoc, getDocs, query, orderBy, limit, deleteDoc, doc } from "firebase/firestore"
import { useNuxtApp } from "#app"

export const useFirestore = () => {
  const { $firestore } = useNuxtApp()

  const saveDetectionResult = async (detectionData) => {
    try {
      const docRef = await addDoc(collection($firestore, "detections"), {
        ...detectionData,
        timestamp: new Date(),
        createdAt: new Date().toISOString(),
      })
      return docRef.id
    } catch (error) {
      console.error("Error saving detection result:", error)
      throw error
    }
  }

  const getDetectionHistory = async (limitCount = 50) => {
    try {
      const q = query(collection($firestore, "detections"), orderBy("timestamp", "desc"), limit(limitCount))
      const querySnapshot = await getDocs(q)
      const history = []
      querySnapshot.forEach((doc) => {
        history.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      return history
    } catch (error) {
      console.error("Error getting detection history:", error)
      throw error
    }
  }

  const deleteDetection = async (id) => {
    try {
      await deleteDoc(doc($firestore, "detections", id))
    } catch (error) {
      console.error("Error deleting detection:", error)
      throw error
    }
  }

  const getStatistics = async () => {
    try {
      const querySnapshot = await getDocs(collection($firestore, "detections"))
      let totalImages = 0
      let totalOrganik = 0
      let totalAnorganik = 0

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        totalImages++
        if (data.dominantType === "organik") {
          totalOrganik++
        } else if (data.dominantType === "anorganik") {
          totalAnorganik++
        }
      })

      return {
        totalImages,
        totalOrganik,
        totalAnorganik,
      }
    } catch (error) {
      console.error("Error getting statistics:", error)
      throw error
    }
  }

  return {
    saveDetectionResult,
    getDetectionHistory,
    deleteDetection,
    getStatistics,
  }
}

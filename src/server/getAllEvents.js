import {db} from "./firebase";
import {collection, query, getDocs, doc, getDoc} from "firebase/firestore";

const getAllEvents = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const userQuerySnapshot = await getDoc(docRef);
    if (userQuerySnapshot.exists()) {
      const q = query(collection(userQuerySnapshot.ref, "events"));
      const eventsQuerySnapshot = await getDocs(q);
      return eventsQuerySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          name: data.name,
          focus: data.focus,
          start_time: new Date(data.start_time.seconds * 1000),
          end_time: new Date(data.end_time.seconds * 1000),
        };
      });
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export default getAllEvents;

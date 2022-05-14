import {db} from "./firebase";
import {collection, addDoc, doc, getDoc} from "firebase/firestore";
import EventValidator from "./models/event.joi";

const addEvent = async (data, uid) => {
  try {
    const validated = await EventValidator.validateAsync(data, {
      abortEarly: false,
    });
    const docRef = doc(db, "users", uid);
    const userQuerySnapshot = await getDoc(docRef);
    if (userQuerySnapshot.exists()) {
      const docId = await addDoc(
        collection(userQuerySnapshot.ref, "events"),
        validated
      );
      console.log("Event written with ID: ", docId.id);
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (e) {
    console.log(`Error adding event to Firestore: ${e}`);
  }
};

export default addEvent;

import { db } from 'firebase';
import { collection, addDoc } from 'firebase/firestore';

const addEvent = async (data) => {
  try {
    const docId = await addDoc(collection(db, 'events'), data);
    console.log("Event written with ID: ", docId.id);
  } catch (e) {
    console.log("Unable to add event.");
  }
}

export default addEvent;
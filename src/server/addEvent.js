import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import EventValidator from './models/event.joi';

const addEvent = async (data) => {
  try {
    const validated = await EventValidator.validateAsync(data, {
      abortEarly: false,
    });
    const docId = await addDoc(collection(db, 'events'), validated);
    console.log("Event written with ID: ", docId.id);
  } catch (e) {
    console.log(`Error adding event to Firestore: ${e}`);
  }
}

export default addEvent;
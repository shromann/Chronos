import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore'; 

const getAllEvents = async() => {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
  } catch (e) {
    console.log(e);
  }
}

export default getAllEvents;

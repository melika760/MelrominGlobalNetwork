import { addDoc, collection, getDocs, query, updateDoc, where, doc} from "firebase/firestore";
import {  db } from "@/config/firebaseConfig";
import { toast } from 'sonner';
const addData=async(formData,user)=>{
   try{
    await addDoc(collection(db, "ShippingData"), {
        Commodity: formData.Commodity,
        VolumeWeight: formData.VolumeWeight,
        Dimenssion: formData.Dimenssion,
        Temprature: formData.Temprature,
        GrossWeight: formData.GrossWeight,
        HsCode: formData.HS,
        Special: formData.Special,
        Note: formData.Note,
        origin: formData.selectedCounty,
        destination: formData.destination,
        date: formData.date,
        transportation: formData.transportation,
        Switch: formData.Switch,
        transit: formData.transit,
        userId: user.uid
    });
   }catch(error){
    console.log(error)
   }
       
  

}
const getDatas=async(user)=>{
    try{
        if (!user) {
            throw new Error("User not authenticated");
          }
          const userId = user.uid;
          const q = query(collection(db, "ShippingData"), where("userId", "==", userId));
          const getshipping = await getDocs(q);
          const data = [];
          getshipping.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          return(Array.isArray(data) ? data : [])
    }
    catch(error){}
}
const getContracts=async(user)=>{
  try{
      if (!user) {
          throw new Error("User not authenticated");
        }
        const userId = user.uid;

  const contractsRef = collection(db, "contracts");
  const q = query(
    contractsRef,
  where('users', 'array-contains', user.uid)
  
  );

  const contractSnapshot = await getDocs(q);
  const data = [];

  contractSnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return Array.isArray(data) ? data : [];
} catch (error) {
  console.error("Error fetching contracts:", error);
}
}
const UpdatingInquieries=async(formData,user)=>{
    try {
        const c = query(collection(db, "ShippingData"), where("userId", "==", user.uid));
        const changeData = await getDocs(c);
        if (!changeData.empty) {
          const userDoc = changeData.docs[0];
          const docRef = doc(db, "ShippingData", userDoc.id);
          await updateDoc(docRef, {
            Commodity: formData.Commodity,
            VolumeWeight: formData.VolumeWeight,
            Dimenssion: formData.Dimenssion,
            Temprature: formData.Temprature,
            GrossWeight: formData.GrossWeight,
            HsCode: formData.HS,
            Special: formData.Special,
            Note: formData.Note,
            origin: formData.selectedCounty,
            destination: formData.destination,
            date: formData.date,
            transportation: formData.transportation,
            Switch: formData.Switch,
            transit: formData.transit,
            userId: user.uid
          });
          toast("Your Data changed successfully!");
        }
      } catch (error) {
        toast("something went wrong please try again!");
        console.log(error);
      }
}
const getForwardersByCountry = async (country, transportation) => {
    try {
        const q = query(collection(db, "Forwarders"), where("country", "==", country));
        const getForwarders = await getDocs(q);
        const forwarders = [];
        const transportationArray = Array.isArray(transportation) ? transportation : [transportation];

        getForwarders.forEach((doc) => {
            const data = doc.data();
            if (Array.isArray(data.transportationtype)) {
                if (transportationArray.some(t => 
                    data.transportationtype.some(tt => tt.toLowerCase().includes(t.toLowerCase()))
                )) {
                    forwarders.push({ id: doc.id, ...data });
                }
            }
        });
        return forwarders;
    } catch (error) {
        console.error("Error fetching forwarders:", error);
        throw error;
    }
};
const sendDatastofrwd=async(forwarder,user,inquiery)=>{
    try {
      console.log("Sending data to Firebase:", {
        SupplierId: user.uid,
        forwarderId: forwarder.userId,
        forwarderName: forwarder.name,
        ...inquiery
    });
        await addDoc(collection(db, "Quotes"), {
            SupplierId: user.uid,
            forwarderId: forwarder.userId,
            forwarderName: forwarder.name,
            ...inquiery
        });
        toast("Your data sent to forwarder successfully!");
    } catch (error) {
        console.log(error);
    }
}
const EditSupplierprofile=async(FormsData,user)=>{
    try {
        const q = query(collection(db, "Suppliers"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
    
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const docRef = doc(db, "Suppliers", userDoc.id);
          await updateDoc(docRef, {
            name: FormsData.companyname || "", 
            Address: FormsData.Address || "",
            country: FormsData.selectedCounty || "",
            Phone: FormsData.Phone || "",
            Mobile: FormsData.Mobile || "",
            transportationtype: FormsData.transportation || [],
            role: "Supplier",
          });
    
          toast("Your profile updated successfully!")
        } else {
          console.error("No document found for user ID:", user.uid);
        }
      } catch (error) {
        console.error("Error updating document:", error);
      }
    
}
const EditForwarderprofile=async(FormsData,user)=>{
  try {
    const q = query(collection(db, "Forwarders"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const docRef = doc(db, "Forwarders", userDoc.id);
      await updateDoc(docRef, {
        name: FormsData.companyname|| "",
        Address: FormsData.Address|| "",
        country: FormsData.selectedCounty|| "",
        Phone: FormsData.Phone|| "",
        Mobile: FormsData.Mobile|| "",
        transportationtype: FormsData.transportation|| [],
        Experience:FormsData.Ex|| "",
        description:FormsData.des|| "",
        role: "Forwarder",
       
      });

      toast("Your profile updated successfully!")
    } else {
      console.error("No document found for user ID:", user.uid);
    }
  } catch (error) {
    console.error("Error updating document:", error);
  }

}
const fetchQuotes = async (userId) => {
  try {
    const q = query(collection(db, "Quotes"), where("forwarderId", "==", userId));
    const getQuotes = await getDocs(q);
    const quotes = [];
    getQuotes.forEach((doc) => {
      quotes.push({ id: doc.id, ...doc.data() });
    });
    return quotes;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default{
    addData,
    getDatas,
    UpdatingInquieries,
    getForwardersByCountry,
    sendDatastofrwd,
    EditSupplierprofile,
    EditForwarderprofile,
    fetchQuotes,
    getContracts
}
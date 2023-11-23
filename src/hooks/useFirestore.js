import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function useFirestore() {
  //get collection
  let getCollection = (path) => {
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);
    let [data, setData] = useState([]);
    useEffect(function () {
      setLoading(true);
      let ref = collection(db, path);
      let q = query(ref, orderBy("date", "desc"));

      onSnapshot(q, (docs) => {
        if (docs.empty) {
          setError("No Documents Found");
          setLoading(false);
        } else {
          let collectionDatas = [];
          docs.forEach((doc) => {
            let document = { id: doc.id, ...doc.data() };
            collectionDatas.push(document);
          });
          setData(collectionDatas);
          setLoading(false);
          setError("");
        }
      });
    }, []);
    return { error, loading, data };
  };
  // get Document
  let getDocument = (path, id) => {
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);
    let [data, setData] = useState(null);
    useEffect(() => {
      setLoading(true);
      let ref = doc(db, path, id);
      onSnapshot(ref, (doc) => {
        if (!doc.exists()) {
          setError("Document not found");
          setLoading(false);
        } else {
          let document = { id: doc.id, ...doc.data() };
          setData(document);
          setLoading(false);
          setError("");
        }
      });
    }, [id]);

    return { error, loading, data };
  };
  //add collection
  let addCollection = async (path, data) => {
    data.date = serverTimestamp();
    let ref = collection(db, path);
    return addDoc(ref, data);
  };
  //delete document
  let deleteDocument = async (path, id) => {
    let ref = doc(db, path, id);
    return deleteDoc(ref);
  };
  //update document
  let updateDocument = async (path, id, data) => {
    data.date = serverTimestamp();
    let ref = doc(db, path, id);
    return updateDoc(ref, data);
  };

  return {
    getCollection,
    getDocument,
    addCollection,
    deleteDocument,
    updateDocument,
  };
}

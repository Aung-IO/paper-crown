import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../firebase";
import useFirestore from "../hooks/useFirestore";
import TextAreaInput from "./TextAreaInput";

export default function CreateBook() {
  let { id } = useParams();
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState("");
  let [dimension, setDimension] = useState("");
  let [pages, setPages] = useState("");
  let [description, setDescription] = useState("");
  let [author, setAuthor] = useState("");
  let [preview, setPreview] = useState("");
  let [file, setFile] = useState(null);
  let [isEdit, setIsEdit] = useState(false);
  let [collectionName, setCollectionName] = useState("");
  let navigate = useNavigate("");

  let { addCollection, updateDocument } = useFirestore();

  useEffect(() => {
    // edit form
    if (id) {
      setIsEdit(true);
      let ref = doc(db, collectionName, id);
      getDoc(ref).then((doc) => {
        if (doc.exists()) {
          let { title, price, dimension, pages, description, author } =
            doc.data();
          setTitle(title);
          setPrice(price);
          setDimension(dimension);
          setPages(pages);
          setDescription(description);
          setAuthor(author);
        }
      });
    }
    // create form
    else {
      setIsEdit(false);
      setTitle("");
      setPrice("");
      setDimension("");
      setPages("");
      setDescription("");
      setAuthor("");
    }
  }, []);

  let handleCoverImage = (e) => {
    setFile(e.target.files[0]);
  };
  let handlePreivewImage = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };
  useEffect(() => {
    if (file) {
      handlePreivewImage(file);
    }
  }, [file]);

  let uploadToFirebase = async (file) => {
    let uniqueFileName = Date.now().toString() + "_" + file.name;
    let path = "/covers/" + uniqueFileName;
    let storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  let submitForm = async (e) => {
    e.preventDefault();
    let url = await uploadToFirebase(file);

    let data = {
      title,
      price,
      dimension,
      pages,
      description,
      author,
      cover: url,
    };

    if (isEdit) {
      await updateDocument(collectionName, id, data);
    } else {
      await addCollection(collectionName, data);
    }
    navigate("/");
  };

  return (
    <form className="w-full max-w-lg mx-auto mt-4" onSubmit={submitForm}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <TextAreaInput
          label="Book Title"
          value={title}
          func={(e) => setTitle(e.target.value)}
          id="title"
          placeholder="Book Title"
        ></TextAreaInput>
        <TextAreaInput
          label="Book Price"
          value={price}
          func={(e) => setPrice(e.target.value)}
          id="price"
          placeholder="Sale Price"
        ></TextAreaInput>
        <TextAreaInput
          label="Book Dimension"
          value={dimension}
          func={(e) => setDimension(e.target.value)}
          id="dimension"
          placeholder="Book Dimension"
        ></TextAreaInput>
        <TextAreaInput
          label="Pages"
          value={pages}
          func={(e) => setPages(e.target.value)}
          id="pages"
          placeholder="Pages"
        ></TextAreaInput>
        <TextAreaInput
          label="Book Author"
          value={author}
          func={(e) => setAuthor(e.target.value)}
          id="author"
          placeholder="Book Author"
        ></TextAreaInput>
        <TextAreaInput
          tag="textarea"
          label="Book Description"
          value={description}
          func={(e) => setDescription(e.target.value)}
          id="description"
          placeholder="Description"
        ></TextAreaInput>
       
        {/* image upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cover"
          >
            Choose Cover Image
          </label>
          <input type="file" name="" id="" onChange={handleCoverImage} />
          {!!preview && <img src={preview} className="mt-3"></img>}
        </div>

         {/* choose collection */}
         <div className="flex gap-4">
          <button
            onClick={() => setCollectionName("books")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:bg-red-500"
          >
            Books
          </button>
          <button
            onClick={() => setCollectionName("commission")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:bg-red-500"
          >
            Commission
          </button>
          <button
            onClick={() => setCollectionName("og")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:bg-red-500"
          >
            Original Arts
          </button>
        </div>
        <div className="md:flex md:items-center mt-4">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {isEdit ? "Edit" : "Create"} Book
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

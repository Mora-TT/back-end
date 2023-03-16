const app = require('../../config/Firebase');
const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore/lite');
const { getStorage, ref } = require("firebase/storage");
const express = require('express');
const { firebase } = require('googleapis/build/src/apis/firebase');


class TestDAO {

    constructor() {
        try {
        } catch (error) {
        }
    }


    static async getEntries() {
        try {
            const db = getFirestore(app);
            const entries = collection(db, 'Entries');
            const entriesDoc = await getDocs(entries);
            const entriesList = [];
            // Loop through each document in the collection and log its data
            entriesDoc.forEach((doc) => {
                //console.log(doc.id, '=>', doc.data());
                entriesList.push(doc.data());

            }); return entriesList;
            // Code to access Firestore data here
        } catch (error) {
            console.error('Error connecting to Firestore:', error);
        }


        // Loop through each document in the collection and log its data
        
    }
    static async uploadAndGetURL(file){

        const storage = getStorage(app);
        const bucketRef = ref(storage, "pdfs");
        console.log("uploading the file",file.name);
        const fileRef = await bucketRef.child(file.name).put(file);
        const downloadURL = await fileRef.getDownloadURL();
        return downloadURL;

    }

    static async saveEntry(entry) {
        const db = getFirestore(app);
        const entries = collection(db, 'Entries');
        console.log(entry.body);
        const {files}=entry.files;
        const url =await this.uploadAndGetURL(files);
        console.log(url);
        const data = {
            "name": entry.body["name"], // Example: get the name of the PDF from the HTTP request body
            "url": "url",
            "created_at": new Date()
          };
        await addDoc(entries,data);
        return ;
    }
}
module.exports = TestDAO;
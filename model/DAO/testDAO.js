const app = require('../../config/Firebase');
const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore/lite');
const { getStorage, ref, uploadBytes ,getDownloadURL} = require("firebase/storage");
const express = require('express');
const { firebase } = require('googleapis/build/src/apis/firebase');
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
var fs = require('fs');
const { File } = require('file-api');
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



  

    static async saveEntry(entry) {
        const db = getFirestore(app);
        console.log(entry.body); 
        
        const entries = collection(db, 'Entries');
        const pdfFile = entry.file;
        const storage = getStorage();
        var target_path = 'pdfs/' + pdfFile.originalname;
        const storageRef = ref(storage, target_path);
        const filePath = pdfFile.path;
        const buffer = fs.readFileSync(filePath);
        const uint8Array = new Uint8Array(buffer);
        console.log('Uploading started a blob or file!');
        // 'file' comes from the Blob or File API
        const fileSnapshot = await uploadBytes(storageRef, uint8Array);
        console.log('Uploaded file!');
        const downloadURL = await getDownloadURL(fileSnapshot.ref);
        //var url =TestDAO.uploadAndGetURL(file);
        // Create Firestore document
        const data = {
          "name": entry.body["name"],
          "url": downloadURL,
          "created_at": new Date(),
          //"events": entry.body["events"]
        };
        console.log("Creating the entry");
        await addDoc(entries, data);
        console.log("Entry Creation Successful")
        fs.unlink(filePath, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Temp File deleted successfully');
          });
        return;
      }
}
module.exports = TestDAO;
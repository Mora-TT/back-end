const db = require('../../config/Firebase');
const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore/lite');

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
        const entries = collection(db, 'Entries');
        await addDoc(entries, entry);
        return ;
    }
}
module.exports = TestDAO;
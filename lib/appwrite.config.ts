// lib/appwrite.config.ts
import { Client, Databases, Storage, Users } from "node-appwrite";

const client = new Client();
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT!;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const apiKey = process.env.NEXT_PUBLIC_API_KEY!;
const DATABASE_ID = process.env.DATABASE_ID!;
const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID!;
// const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID!;
const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID!;
const NEXT_PUBLIC_BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID!;

client
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId) // Your project ID
  .setKey(apiKey); // Your secret API key

const databases = new Databases(client);
const storage = new Storage(client);
const users = new Users(client);

export {
  client,
  databases,
  storage,
  users,
  endpoint,
  projectId,
  DATABASE_ID,
  NEXT_PUBLIC_BUCKET_ID,
  APPOINTMENT_COLLECTION_ID,
  PATIENT_COLLECTION_ID,
};

// import * as sdk from 'node-appwrite';

// const {
//     PROJECT_ID,
//     API_KEY,
//     DATABASE_ID,
//     PATIENT_COLLECTION_ID,
//     DOCTOR_COLLECTION_ID,
//     APPOINTMENT_COLLECTION_ID,
//     NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
//     NEXT_PUBLIC_ENDPOINT: ENDPOINT
// } = process.env;

// const client = new sdk.Client();

// // client
// //     .setEndpoint(ENDPOINT!)
// //     .setProject(PROJECT_ID!)
// //     .setKey(API_KEY!);

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('66aefde70029cbcceb50')
//     .setKey('2a7ca2bc63004b18866795665b01ed62f4fbba6266f36a2a9601a054ccf58cef8e6d69bcf687a71725a0e6b4ded4d55dbe74e94a4bd4f2588fbf7dc9dc24c757466bc74eb5926098fdca94d352431ec855b9b29b6a26075ed50a2603c351b91bf2700b3037e7f83e7dd6fbc9a7f03bb94565f36c588c890e47b092f18b069bb5');

// export const databases = new sdk.Databases(client);
// export const storage = new sdk.Storage(client);
// export const messaging = new sdk.Messaging(client);
// export const users = new sdk.Users(client);

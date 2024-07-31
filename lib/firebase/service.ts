import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import { data } from "@/lib/data";
const firestore = getFirestore(app);

interface Product {
  id: string;
  name: string;
  [key: string]: any;
}

export async function retrieveData(collectionName: string): Promise<Product[]> {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
  return data;
}

export async function retrieveDataById(
  collectionName: string,
  id: string
): Promise<Product | undefined> {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data() as Product | undefined;
  return data;
}

export async function retrieveDataByCategory(
  collectionName: string,
  category: string
): Promise<Product[]> {
  const q = query(
    collection(firestore, collectionName),
    where("categories", "array-contains", category)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
  return data;
}

export async function retrieveDataByName(
  collectionName: string,
  name: string
): Promise<Product[]> {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
  return data.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
}

export async function retrieveDataByFeatured(
  collectionName: string,
  featured: boolean
): Promise<Product[]> {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
  // Filter data berdasarkan nilai `featured`
  return data.filter((product) => product.featured === featured);
}

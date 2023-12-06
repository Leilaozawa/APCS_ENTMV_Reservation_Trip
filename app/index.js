import { Link, useRouter } from "expo-router";
import Layout from "./Layout";
import { Button, View } from "react-native";



export default function Page() {
  const router = useRouter();
  return ( 
    <View>
      <Button onPress={()=> router.push('/Navigation/Screens/Welcome')} title="open welcome page"></Button>
      <Link href={'/Navigation/Screens/Home'}>
      <Button title="open register"></Button>
      </Link>
    </View>
  );
}


import { Link, useRouter } from "expo-router";
import Layout from "./Layout";
import { Button, View } from "react-native";



export default function Page() {
  const router = useRouter();
  return ( 
    <View>
      <Button onPress={()=> router.push('/Components/Welcome')} title="open welcome page"></Button>
    </View>
  );
}


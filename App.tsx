import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import Layout from "./src/components/Layout";
import SmallText from "./src/components/Text/Small";
import RegularText from "./src/components/Text/Regular";
import BigText from "./src/components/Text/Big";
import TextInput from "./src/components/Inputs/TextInput";
import RegularButton from "./src/components/Buttons";

export default function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <TextInput
        label="Email Address"
        icon="email-variant"
        value={email}
        onChangeText={setEmail}
        placeholder="email@email.com"
        keyboardType="email-address"
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Name"
        icon="account"
        value={name}
        onChangeText={setName}
        placeholder="John Doe"
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Password"
        icon="lock-open"
        value={password}
        onChangeText={setPassword}
        placeholder="* * * * * * *"
        isPassword={true}
        style={{ marginBottom: 20 }}
      />
      <RegularButton onPress={() => alert("Clicked")}>Submit</RegularButton>
      <StatusBar style="auto" />
    </Layout>
  );
}

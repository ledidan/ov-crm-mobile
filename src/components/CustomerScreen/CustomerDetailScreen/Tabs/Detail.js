import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { AppInput } from "../../../../fields";
import AppSelect from "../../../../fields/AppSelect";

const Detail = () => {
  const [text, setText] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  return (
    <View>
      <AppInput
        label="Số điện thoại"
        required
        placeholder="Nhập số điện thoại"
        value={text}
        onChangeText={setText}
      />
      <AppSelect
        label="Nhóm khách hàng"
        required
        value={selectedGroup}
        onSelect={setSelectedGroup}
        options={[
          { label: "Khách VIP", value: 1 },
          { label: "Khách mới", value: 2 },
          { label: "Khách lâu năm", value: 3 },
        ]}
      />
    </View>
  );
};

export default Detail;

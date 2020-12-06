import React from "react";
import { View } from "react-native";
const RadioButton = (props) => {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "#84D037",
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: "#84D037",
          }}
        />
      ) : null}
    </View>
  );
};

export default RadioButton;

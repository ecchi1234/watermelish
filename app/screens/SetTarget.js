import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
	StatusBar,
	Switch
} from "react-native";

import MyAppText from "../components/MyAppText";

export default function EditProfile ({ navigation }) {
	const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <MyAppText
            content="Mục tiêu hằng ngày"
            format="bold"
            style={{
              color: "#84D037",
              paddingTop: 20,
						}}
						size={25}
          >
          </MyAppText>
        </View>
				<View style={styles.guide}>
					<MyAppText
						content="Đặt mục tiêu số từ học trong ngày để việc học hiệu quả hơn"
						format="regular"
						size={15}
					/>
				</View>
				<View style={styles.arrow}>
					<View style={{ flexDirection: "row"}}>
						<TouchableOpacity onPress={() => {console.log("Increased")}}>
							<Image source={require("../img/increase-arrow.png")} />
						</TouchableOpacity>
					</View>
					<View style={styles.target}>
						<MyAppText
							content="200"
							format="bold"
							size={30}
							style={{
								color: "#fff"
							}}
						>
							200
						</MyAppText>
					</View>
					<View style={{ flexDirection: "row"}}>
						<TouchableOpacity onPress={() => {console.log("Decreased")}}>
							<Image source={require("../img/decrease-arrow.png")} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.reminder}>
					<MyAppText
						content="Nhắc nhở tôi"
						format="bold"
						size={20}
						style={{
							color: "#84D037",
						}}
					>Nhắc nhở tôi
					</MyAppText>
					<Switch
						trackColor={{ false: "#DEE2E6", true: "#84D037" }}
						thumbColor={isEnabled ? "#fff" : "#fff"}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={styles.saveBtn}>
            <MyAppText
            content="Lưu lại"
            format="bold"
            style={{
              color: "#fff",
              paddingTop: 10,
              paddingBottom: 10
            }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.escapeBtn}>
            <MyAppText
              content="Thoát"
              format="italic"
              style={{ color: "#609F20" }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  scroll: {
    padding: StatusBar.currentHeight,
	},
	
	guide: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		width: 240,
	},

	arrow: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 20,
		marginBottom: 20,
	},

	target: {
		marginTop: 20,
		marginBottom: 20,
		width: 200,
		height: 150,
		backgroundColor: "#84D037",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	reminder: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},

  saveBtn: {
    width: 186,
    alignItems: "center",
    backgroundColor: "#609F20",
    borderRadius: 50,
    shadowColor: "0 4 4 rgba(0, 0, 0, 0.25)",
    marginBottom: 20,
  },

  escapeBtn: {
    alignItems: "center",
  },

});

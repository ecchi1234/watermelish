import {StyleSheet} from 'react-native';

const icon_styles = StyleSheet.create({
    title: {
        fontSize: 15,
        lineHeight: 40,
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#2D2727',
    },
    game: {
        // flex: 4,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#8E8888",
        borderRadius: 10,
    },
    image: {
        // flex: 1,
        resizeMode: 'stretch',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    textScore: {
        // position: 'absolute',
        // width: 195,
        // height: 114,
        // left: 185,
        // top: 404,
        marginTop: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'center',
        color: '#84D037',
    },
});


export default icon_styles;
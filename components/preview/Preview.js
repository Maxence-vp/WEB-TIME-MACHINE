import * as React from 'react';
import { WebView, } from 'react-native-webview';
import { StyleSheet } from "react-native";

export default function Preview({ route, navigation }) {
    const { urlInsight } = route.params;
    return (
        <WebView
            style={styles.container}
            source={urlInsight}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
}
)
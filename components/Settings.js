import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>Settings</Text>

            <View>
                <Text>General</Text>

                <View style={styles.generalSetting}>
                    <Text>Download settings</Text>
                    <Text>Notification settings</Text>
                    <Text>Theme</Text>
                </View>

                <Text>Download tools</Text>

                <View style={styles.downloadTools}>
                    <Text>Recover deleted files</Text>
                    <Text>WhatsApp status saver</Text>
                    <Text>Vault</Text>
                </View>

                <View style={styles.phoneClean}>
                    <Text>Junk clean</Text>
                    <Text>Boost</Text>
                    <Text>Battery saver</Text>
                    <Text>Large files clean</Text>
                    <Text>WhatsApp clean</Text>
                    <Text>App uninstaller</Text>
                </View>

                <View style={styles.info}>
                    <Text>Account <Text style={styles.info.signIn}>Sign in</Text></Text>
                    <Text>Region & language</Text>
                    <Text>Feedback</Text>
                    <Text>Share Snaptube</Text>
                    <Text>About</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    mainHeading: {
        color: '#fff',
        fontSize: 5,
        fontWeight: '400',
        paddingBottom: 4,
    },
})
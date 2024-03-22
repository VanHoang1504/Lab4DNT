import React, { useState } from "react";
import { Audio } from "expo-av";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function Bai3() {
    const [sound, setSound] = useState(null);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
        );
        setSound(sound);
        await sound.playAsync();
    }

    async function pauseSound() {
        if (sound) {
            await sound.pauseAsync();
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://i.pinimg.com/originals/35/1e/62/351e62c0c0b29d65a5dbb72d1c8a6d88.jpg' }}
                style={styles.backgroundImage}
                blurRadius={3}
            >
                <View style={styles.playerContainer}>
                    {/* Thông tin bài hát */}
                    <View style={styles.songInfo}>
                        <Text style={styles.songTitle}>Tên bài hát</Text>
                        <Text style={styles.artist}>Tên ca sĩ</Text>
                    </View>

                    {/* Nút điều khiển */}
                    <View style={styles.controls}>
                        <TouchableOpacity onPress={playSound} style={styles.controlButton}>
                            <Text style={styles.controlButtonText}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pauseSound} style={styles.controlButton}>
                            <Text style={styles.controlButtonText}>Pause</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    playerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50,
    },
    songInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    songTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    artist: {
        fontSize: 18,
        color: '#fff',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    controlButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 25,
    },
    controlButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

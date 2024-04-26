import React from 'react';
import { View, Text, Button } from 'react-native';
import { copyToClipboard, pasteFromClipboard } from 'react-native-copy-paste';


const CopyComponent = () => {
    const handleCopy = (text) => {
        copyToClipboard(text);
    };
    const text = "Hello World";

    const handlePaste = async () => {
        await pasteFromClipboard();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Copy and Paste Example</Text>
            <Button title="Copy" onPress={handleCopy(text)} />
            <Button title="Paste" onPress={handlePaste} />
        </View>
    );
};

export default CopyComponent;

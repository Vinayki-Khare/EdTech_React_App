import { Clipboard } from 'react-native';

export const copyToClipboard = (text) => {
    Clipboard.setString(text);
};

export const pasteFromClipboard = async () => {
    try {
        const content = await Clipboard.getString();
        return content;
    } catch (error) {
        console.error('Error pasting from clipboard:', error);
        return null;
    }
};

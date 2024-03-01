import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from'react';


export const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 0.8,
      });
      if (result.canceled) {
        return canceled;
      }
      return result.assets[0];
};
export const openLibarary = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.8,
    });
    if (result.canceled) {
    }
    return result.assets[0];
};

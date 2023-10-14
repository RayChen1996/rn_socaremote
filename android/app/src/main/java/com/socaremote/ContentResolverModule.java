package com.socaremote;
import android.content.ContentResolver;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ContentResolverModule extends ReactContextBaseJavaModule {
    private ContentResolver contentResolver;

    public ContentResolverModule(ReactApplicationContext reactContext, ContentResolver contentResolver) {
        super(reactContext);
        this.contentResolver = contentResolver;
    }

    @Override
    public String getName() {
        return "ContentResolverModule";
    }

    @ReactMethod
    public void readContentFromUri(String contentUri) {
        // 在這裡實現訪問 ContentResolver 的邏輯
    }
}

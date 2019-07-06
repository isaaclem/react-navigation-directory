Steps to install React-Navigation
-   yarn add react-navigation react-native-gesture-handler
-   react-native link react-native-gesture-handler

iOS Problem
============
-   Hit 2 issues when launch the app
    >  (null is not an object(evaluating 'RNGestureHandlerModule.xxx'))
    >  'React/RCTEventDispatcher.h' file not found

iOS Solution
=============
-   Reinstall Pod with command `rm -rf Pods; pod install`


Android Problem
===============
-   Can't resolve symbol android.support.v4.util.Pools in react-native-gesture-handler

Android Solution
================
-   change all `import android.support.v4.util.Pools;` to `import androidx.core.util.Pools;` @ node_modules
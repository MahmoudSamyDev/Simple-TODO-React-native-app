# 📝 React Native Todo App

A beautiful and intuitive todo application built with React Native and Expo, featuring a modern purple-themed UI with smooth animations and comprehensive goal management capabilities.

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-0.79.3-blue?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-~53.0.11-000020?style=for-the-badge&logo=expo)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey?style=for-the-badge)

</div>

## 🌟 Features

### Core Functionality

-   ✅ **Add Goals**: Create new goals through an intuitive modal interface
-   🗑️ **Delete Goals**: Remove completed or unwanted goals with a single tap
-   📱 **Responsive Design**: Optimized for both iOS and Android devices
-   🎨 **Modern UI**: Purple-themed interface with smooth animations
-   💾 **Real-time Updates**: Instant goal addition and removal without page refresh

### User Experience

-   🖼️ **Visual Feedback**: Goal icon and intuitive button designs
-   ⚡ **Smooth Animations**: Slide-in modal with fluid transitions
-   🎯 **Touch-Friendly**: Large touch targets and responsive interactions
-   🌈 **Consistent Theming**: Cohesive color scheme throughout the app

## 📱 Screenshots

![input](/screenshots/1.webp)
![todos](/screenshots/2.webp)
![]()

## 🏗️ Project Structure

```
Todo-App/
├── 📁 components/
│   ├── GoalCard.js              # Individual goal display component
│   ├── HorizontalLine.js        # UI separator component
│   └── 📁 GoalInput/
│       ├── index.js             # Main goal input modal
│       ├── ActionButton.js      # Reusable button component
│       └── styles.js            # Goal input styling
├── 📁 utils/
│   └── data.js                  # Sample data and utilities
├── 📁 assets/
│   ├── goal.png                 # Goal icon
│   ├── icon.png                 # App icon
│   ├── splash-icon.png          # Splash screen icon
│   ├── adaptive-icon.png        # Android adaptive icon
│   └── favicon.png              # Web favicon
├── 📁 android/                  # Android-specific files
├── 📁 ios/                      # iOS-specific files
├── App.js                       # Main application component
├── index.js                     # App entry point
├── package.json                 # Dependencies and scripts
├── app.json                     # Expo configuration
└── README.md                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

-   **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
-   **npm** or **yarn** package manager
-   **Expo CLI** - Install globally with `npm install -g @expo/cli`
-   **Git** - [Download here](https://git-scm.com/)

### Mobile Development Setup (Optional)

For native development:

-   **Android Studio** (for Android development)
-   **Xcode** (for iOS development - macOS only)

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd Todo-App
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server**

    ```bash
    npm start
    # or
    expo start
    ```

4. **Run on your preferred platform**

    **For mobile testing:**

    - Install the **Expo Go** app on your mobile device
    - Scan the QR code displayed in the terminal or browser

    **For simulator/emulator:**

    ```bash
    # iOS Simulator (macOS only)
    npm run ios

    # Android Emulator
    npm run android

    # Web Browser
    npm run web
    ```

## 📖 Usage Guide

### Adding a New Goal

1. Tap the **"Add Goals"** button on the main screen
2. Enter your goal text in the modal that appears
3. Tap **"Add Goal"** to save or **"Cancel"** to discard

### Managing Goals

-   **View Goals**: All goals are displayed in a scrollable list
-   **Delete Goals**: Tap the **"Delete"** button on any goal card to remove it
-   **Visual Feedback**: Goals are displayed with a blue theme and clear typography

### Interface Navigation

-   **Main Screen**: Displays all goals and the add button
-   **Modal Interface**: Slide-up modal for goal input
-   **Responsive Layout**: Adapts to different screen sizes automatically

## 🛠️ Available Scripts

| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm start`       | Start the Expo development server |
| `npm run android` | Run on Android emulator/device    |
| `npm run ios`     | Run on iOS simulator/device       |
| `npm run web`     | Run in web browser                |

## 🏛️ Architecture

### Component Hierarchy

```
App
├── StatusBar
├── View (Main Container)
│   ├── Button (Add Goals)
│   ├── GoalInput (Modal)
│   │   ├── Image (Goal Icon)
│   │   ├── TextInput
│   │   └── ActionButton (Add/Cancel)
│   ├── HorizontalLine
│   └── FlatList
│       └── GoalCard (per goal)
│           ├── Text (Goal Text)
│           └── Pressable (Delete Button)
```

### State Management

The app uses React's built-in state management with hooks:

-   **`useState`** for local component state
-   **Props drilling** for parent-child communication
-   **Callback functions** for child-to-parent communication

### Key Data Flow

1. **Goal Addition**: `App` → `GoalInput` → `ActionButton` → callback → `App`
2. **Goal Deletion**: `App` → `GoalCard` → `Pressable` → callback → `App`
3. **Modal Control**: `App` → `GoalInput` (visibility prop)

## 🎨 Design System

### Color Palette

| Color          | Hex Code    | Usage                 |
| -------------- | ----------- | --------------------- |
| Primary Purple | `#9607e2`   | Main background       |
| Dark Purple    | `#311b6b`   | Modal background      |
| Blue           | `#0067ca`   | Goal cards background |
| Dark Blue      | `#003e79`   | Goal cards border     |
| Green          | `#b121fe`   | Add button            |
| Red            | `#fa4326`   | Cancel/Delete buttons |
| Light Gray     | `lightgray` | Divider lines         |
| White          | `#ffffff`   | Text and borders      |

### Typography

-   **Primary Text**: White color for contrast
-   **Button Text**: Bold white text for clarity
-   **Placeholder Text**: White with transparency

### Spacing & Layout

-   **Container Padding**: 20px horizontal, 50px vertical
-   **Component Gap**: 20px between major sections
-   **Border Radius**: 20px for cards, 10px for buttons
-   **Border Width**: 2-3px for emphasis

## 🔧 Configuration

### Expo Configuration (`app.json`)

```json
{
    "expo": {
        "name": "ToDo",
        "slug": "ToDo",
        "version": "1.0.0",
        "orientation": "portrait",
        "platforms": ["ios", "android", "web"]
    }
}
```

### Key Configuration Options

-   **Orientation**: Portrait mode only
-   **New Architecture**: Enabled for better performance
-   **Platform Support**: iOS, Android, and Web
-   **Bundle Identifiers**: Configured for app store deployment

## 📦 Dependencies

### Production Dependencies

| Package           | Version  | Purpose                   |
| ----------------- | -------- | ------------------------- |
| `expo`            | ~53.0.11 | Expo development platform |
| `expo-status-bar` | ~2.2.3   | Status bar management     |
| `react`           | 19.0.0   | Core React library        |
| `react-native`    | 0.79.3   | React Native framework    |

### Development Dependencies

| Package       | Version | Purpose               |
| ------------- | ------- | --------------------- |
| `@babel/core` | ^7.20.0 | JavaScript transpiler |

## 🧪 Testing

### Manual Testing Checklist

-   [ ] App launches successfully
-   [ ] Add Goals button opens modal
-   [ ] Text input accepts and displays text
-   [ ] Add Goal button creates new goal
-   [ ] Cancel button closes modal without saving
-   [ ] Goals display in scrollable list
-   [ ] Delete button removes specific goals
-   [ ] App handles empty goal list
-   [ ] Modal animations work smoothly
-   [ ] App works on different screen sizes

### Future Testing Enhancements

-   Unit tests with Jest and React Native Testing Library
-   Integration tests for component interactions
-   E2E tests with Detox
-   Performance testing with Flipper

## 🚀 Deployment

### Development Build

1. **Create development build**
    ```bash
    expo build:android
    expo build:ios
    ```

### Production Build

1. **Configure EAS Build**

    ```bash
    npm install -g eas-cli
    eas build:configure
    ```

2. **Create production builds**

    ```bash
    # Android APK/AAB
    eas build --platform android

    # iOS IPA
    eas build --platform ios
    ```

3. **Submit to app stores**
    ```bash
    eas submit --platform android
    eas submit --platform ios
    ```

## 🔮 Future Enhancements

### Planned Features

-   [ ] **Data Persistence**: Save goals using AsyncStorage
-   [ ] **Goal Categories**: Organize goals by categories
-   [ ] **Due Dates**: Add deadline functionality
-   [ ] **Goal Priority**: Priority levels (High, Medium, Low)
-   [ ] **Goal Status**: Mark goals as complete/incomplete
-   [ ] **Search & Filter**: Find specific goals quickly
-   [ ] **Dark/Light Theme**: Theme switching capability
-   [ ] **Goal Statistics**: Progress tracking and analytics
-   [ ] **Backup & Sync**: Cloud storage integration
-   [ ] **Notifications**: Reminder system for goals

### Technical Improvements

-   [ ] **State Management**: Implement Context API or Redux
-   [ ] **Navigation**: Add React Navigation for multi-screen app
-   [ ] **Animations**: Enhanced animations with Reanimated
-   [ ] **Testing**: Comprehensive test suite
-   [ ] **Performance**: Optimization for large goal lists
-   [ ] **Accessibility**: Improved accessibility features
-   [ ] **Internationalization**: Multi-language support

## 🤝 Contributing

We welcome contributions to improve the Todo App! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
    ```bash
    git checkout -b feature/amazing-feature
    ```
3. **Make your changes**
4. **Commit your changes**
    ```bash
    git commit -m 'Add some amazing feature'
    ```
5. **Push to the branch**
    ```bash
    git push origin feature/amazing-feature
    ```
6. **Open a Pull Request**

### Contribution Guidelines

-   Follow the existing code style and conventions
-   Add JSDoc comments for new functions and components
-   Update README.md if you change functionality
-   Test your changes on both iOS and Android
-   Keep commits focused and descriptive

### Areas for Contribution

-   Bug fixes and improvements
-   New features and functionality
-   Documentation improvements
-   Performance optimizations
-   UI/UX enhancements
-   Testing coverage

## 🐛 Troubleshooting

### Common Issues

**Metro bundler issues:**

```bash
npx react-native start --reset-cache
```

**Expo CLI issues:**

```bash
npm install -g @expo/cli@latest
```

**Android build issues:**

-   Ensure Android SDK is properly installed
-   Check Java version compatibility

**iOS build issues (macOS only):**

-   Ensure Xcode is up to date
-   Check iOS Simulator installation

**Dependencies issues:**

```bash
rm -rf node_modules
npm install
```

### Getting Help

-   **Expo Documentation**: [docs.expo.dev](https://docs.expo.dev)
-   **React Native Documentation**: [reactnative.dev](https://reactnative.dev)
-   **Community Forums**: [forums.expo.dev](https://forums.expo.dev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

-   **Todo App Team** - _Initial work and development_

## 🙏 Acknowledgments

-   React Native team for the amazing framework
-   Expo team for the excellent development tools
-   Open source community for inspiration and resources
-   All contributors who help improve this project

---

<div align="center">

**Built with ❤️ using React Native and Expo**

[⬆ Back to Top](#-react-native-todo-app)

</div>

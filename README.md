## KiranaShop App

### Local setup

- Clone [KiranaShop](https://github.com/ndedhia1210/KiranaShop)

```
https://github.com/ndedhia1210/KiranaShop.git
```

- Build project locally

```
npm i
```

- Run App locally

```
npm start
```

OR

```
npx expo start
```

Then press `w`

- Visit following Url to test local instance

```
http://localhost:19006
```

### Directory structure

```
app   // contains all the source code
    |-- api   // contains clients for APIs
	|-- assets  // contains resources like images, animated gifs etc
					|-- imgs
					|-- animations
					|-- icons
	|-- auth   // contains code for authorization and authentication
	|-- components   // contains building blocks for constructing views/screens
	|-- config   // contains files to hold theme/setting/config variables
	|-- hooks   // contains custom hooks
	|-- navigation   // contains navigators and router for the app
	|-- screens   // contains consolidated view of components. Screen corresponds to mockup in Figma.
	|-- utility // contains utility files for async storage, logging, analytics etc
```

### How to push

```
- git add .
- git commit -m "< Add your message >"
- git push -u origin main
- <Please contact owner for Token>
```

### How to generate apk?

- Follow this blog - [How to generate apk](https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae)
- Generate abb or apk

```
eas build -p android
```

### Upload to play store

- TBD

### Learning

- [React-native-paper](https://callstack.github.io/react-native-paper/docs/guides/getting-started/)
- [Component library doc](https://callstack.github.io/react-native-paper/docs/components)
- [Expo doc](https://docs.expo.dev/)
- [Expo dashboard](https://expo.dev/login)

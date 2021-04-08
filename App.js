import React from 'react';
import { Navigator } from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/ThemeContext'

const App = () => {
 
  return (
    <ThemeProvider>
    <Navigator/>
    </ThemeProvider>
  );
};

export default App













// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>My Second Raect Native Project</Text>
//       <Text>Check the saving</Text>
//       <StatusBar style="auto" />

//       <TouchableOpacity style={styles.button} onPress={()=>{alert('You tapped the button!')}}>
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     borderRadius: 40,
    
//   }
  
// });

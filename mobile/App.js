import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'profile' && <ProfileScreen />}
      
      {/* Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={[styles.navButtonText, currentScreen === 'home' && styles.navButtonActive]}>
            🏠 Accueil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => setCurrentScreen('profile')}
        >
          <Text style={[styles.navButtonText, currentScreen === 'profile' && styles.navButtonActive]}>
            👤 Profil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


// Écran: Accueil
function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>Mon Application</Text>
        </View>
        <Text style={styles.text0}>Mon Application</Text>
      <View style={styles.view1}>
        <Text style={styles.text100}>🎨 Design Moderne</Text>
        <Text style={styles.text101}>Interface élégante et intuitive</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text200}>⚡ Performance</Text>
        <Text style={styles.text201}>Chargement rapide et optimisé</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text300}>📱 Responsive</Text>
        <Text style={styles.text301}>Compatible tous appareils</Text>
      </View>
      <TouchableOpacity style={styles.button4} onPress={() => console.log('navigate:profile')}>
        <Text style={styles.buttonText4}>Commencer</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Écran: Profil
function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>Mon Profil</Text>
        </View>
        <View style={styles.view1000}>
        <Text style={styles.text100000}>Mon Profil</Text>
        <View style={styles.view100001}>
        <Text style={styles.text10000100}>⚙️ Paramètres</Text>
      </View>
        <View style={styles.view100002}>
        <Text style={styles.text10000200}>🔔 Notifications</Text>
      </View>
        <View style={styles.view100003}>
        <Text style={styles.text10000300}>🔒 Confidentialité</Text>
      </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  navbar: {
    backgroundColor: '#667eea',
    padding: 16,
    alignItems: 'center',
  },
  navbarTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navButtonText: {
    fontSize: 14,
    color: '#6B7280',
  },
  navButtonActive: {
    color: '#667eea',
    fontWeight: '600',
  },
    text0: {
  "fontSize": 28,
  "fontWeight": "bold",
  "color": "#111827",
  "margin": 16,
  "textAlign": "center"
},
  view1: {
  "padding": 20,
  "margin": 16,
  "backgroundColor": "#FFFFFF",
  "borderRadius": 12
},
  text100: {
  "fontSize": 18,
  "fontWeight": "600",
  "color": "#667eea",
  "marginBottom": 8
},
  text101: {
  "fontSize": 14,
  "color": "#6B7280"
},
  view2: {
  "padding": 20,
  "margin": 16,
  "backgroundColor": "#FFFFFF",
  "borderRadius": 12
},
  text200: {
  "fontSize": 18,
  "fontWeight": "600",
  "color": "#667eea",
  "marginBottom": 8
},
  text201: {
  "fontSize": 14,
  "color": "#6B7280"
},
  view3: {
  "padding": 20,
  "margin": 16,
  "backgroundColor": "#FFFFFF",
  "borderRadius": 12
},
  text300: {
  "fontSize": 18,
  "fontWeight": "600",
  "color": "#667eea",
  "marginBottom": 8
},
  text301: {
  "fontSize": 14,
  "color": "#6B7280"
},
  button4: {
  "backgroundColor": "#667eea",
  "padding": 16,
  "borderRadius": 12,
  "margin": 16
},
  buttonText4: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', textAlign: 'center' },
  view1000: {
  "padding": 16,
  "alignItems": "center"
},
  text100000: {
  "fontSize": 24,
  "fontWeight": "bold",
  "marginBottom": 24,
  "textAlign": "center"
},
  view100001: {
  "width": "100%",
  "padding": 20,
  "marginBottom": 16
},
  text10000100: {
  "fontSize": 18,
  "fontWeight": "600"
},
  view100002: {
  "width": "100%",
  "padding": 20,
  "marginBottom": 16
},
  text10000200: {
  "fontSize": 18,
  "fontWeight": "600"
},
  view100003: {
  "width": "100%",
  "padding": 20
},
  text10000300: {
  "fontSize": 18,
  "fontWeight": "600"
},

});

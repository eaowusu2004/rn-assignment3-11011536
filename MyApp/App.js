import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CategoryMockUp from './src/MockUpData/CategoryMockUp';
import OngoingTaskMockUp from './src/MockUpData/OngoingTaskMockUp';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.profileText}>Hello, Devs</Text>
            <Text>14 tasks today</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('./assets/person.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <Image source={require('./assets/search.png')} />
            <TextInput placeholder="Search" style={styles.searchTextInput} />
          </View>
          <Image source={require('./assets/setting.png')} />
        </View>
        <Text style={styles.categoryTitle}>Categories</Text>
        <FlatList
          data={CategoryMockUp}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item.title}</Text>
              <Text>{item.task}</Text>
              <Image source={item.image} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: 15 }}
        />
        <Text style={styles.categoryTitle}>Ongoing Task</Text>
        <FlatList
          data={OngoingTaskMockUp}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.ongoingTask}>
              <Text style={styles.ongoingTaskText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={{ rowGap: 15 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};


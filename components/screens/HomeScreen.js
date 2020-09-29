import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import SafeScreen from "../global/SafeScreen";
import { connect } from "react-redux";
import { get_all_products } from "../../redux/actions/product";
import Card from "../global/Card";
import ActivityIndicator from "../global/ActivityIndicator";

const HomeScreen = ({ logOut, get_all_products, product, navigation }) => {
  useEffect(() => {
    get_all_products();
  }, []);

  return (
    <>
      <ActivityIndicator visible={product.loading} />
      <SafeScreen style={styles.container}>
        {product && product.products.length > 0 ? (
          <FlatList
            data={product.products}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Card
                onPress={() => navigation.navigate("productDetails", item)}
                title={item.title}
                description={item.description}
                imageUrl={item.images[0]}
              />
            )}
          />
        ) : null}
      </SafeScreen>
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, {
  get_all_products,
})(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

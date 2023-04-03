<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
<Card>
    <View style={styles.NavigationSlidercon}>
        <View style={{ backgroundColor: 'green', borderRadius: 10, padding: 10 }} />
        <View style={styles.ActiveSlider} >
            <View style={styles.active} />
        </View>
        <View style={{ backgroundColor: 'green', borderRadius: 10, padding: 10 }} />
    </View>
</Card>
<View style={{ backgroundColor: 'white', padding: 2, borderRadius: '30' }}>
    <Feather name="fast-forward" size={24} color="teal" />
</View>
</View>


NavigationSlidercon: {
    flexDirection: 'row', marginHorizontal: 7
},
active: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 14,
    width: 14,
},
ActiveSlider: {
    backgroundColor: 'green',
    borderRadius: 10, height: 20,
    width: 20, marginHorizontal: 8,
    justifyContent: 'center', alignItems: 'center'
},
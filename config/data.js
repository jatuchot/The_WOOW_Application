checkAuth = () => { 
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        this.setState({
        loading: false,
        user,
        });
    });
}
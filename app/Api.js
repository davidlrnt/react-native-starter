const Api = {
	fetchData(url){
		return fetch(url)
      .then((response) => {
      	if (response.status >= 200 && response.status < 300) {
      		console.log("res");
      	}

      	console.log("here");
      	return response.json()
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
	}
}

export default Api

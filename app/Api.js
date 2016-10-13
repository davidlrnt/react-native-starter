const Api = {
	fetchData(url){
		return fetch(url)
      .then((response) => {
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
